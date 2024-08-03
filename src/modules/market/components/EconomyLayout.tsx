"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useFetcher from "@/hooks/useFetcher";
import {
  HTMLAttributes,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Spinner from "@/components/spinner";
import { motion } from "framer-motion";
import {
  calculateMedian,
  calculateYoY,
  formatCurrency,
  GDPWithYoY,
} from "@/lib/utils";
import ColoredNumber, {
  ColoredNumberProps,
} from "@/components/ui/ColoredNumber";
import Panels, { PanelsProps } from "./Economy/Panels";
import ReactPaginate from "react-paginate";
import { useMediaQuery } from "react-responsive";

type GDP = { date: string; value: number };

async function getData(route: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${route}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<{
    message: String;
    status: number;
    data: GDP[];
  }>;
}

type EconomyProps = {
  panel: PanelsProps["active"];
  route: string;
  indicator: string;
  industry?: string;
  short?: string;
  date?: string;
  valueRenderer: (val: number) => JSX.Element | string | number;
} & HTMLAttributes<HTMLDivElement>;

export default function EconomyLayout(props: EconomyProps) {
  const {
    panel,
    route,
    valueRenderer,
    indicator,
    industry,
    short,
    date = "MMM / YYYY",
  } = props;
  const { wrapper, loading, data } = useFetcher<{
    message: String;
    status: number;
    data: GDP[];
  }>();
  const [yoy, setYoy] = useState<GDPWithYoY[]>([]);
  const [table, setTable] = useState<GDPWithYoY[]>([]);
  const [pageOffset, setPageOffset] = useState(0);
  const tableRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    wrapper(() => getData(route));
  }, [route]);

  useEffect(() => {
    (async function () {
      if (data) {
        calculateYoY(data.data).then((res) => {
          setYoy(res);
          setTable(res.slice(0, perPage));
        });
      }
    })();
  }, [data]);

  useEffect(() => {
    if (yoy.length === 0) return;
    setTable((s) => [
      ...yoy.slice(perPage * pageOffset, perPage * pageOffset + perPage),
    ]);
    // wrapper(() => getData(pageOffset + 1));
  }, [pageOffset, yoy]);

  const perPage = 51;
  const pageCount = useMemo(() => {
    if (!yoy) return 1;
    return yoy.length / perPage;
  }, [yoy, perPage]);
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const high = useMemo(() => {
    return !data
      ? 0
      : data.data.reduce((a, b) => (a.value > b.value ? a : b)).value;
  }, [data]);
  const median = useMemo(() => {
    return !data ? 0 : calculateMedian(data.data.map((a) => a.value));
  }, [data]);
  const low = useMemo(() => {
    return !data
      ? 0
      : data.data.reduce((a, b) => (a.value < b.value ? a : b)).value;
  }, [data]);

  async function handlePageClick({ selected }: { selected: number }) {
    window.scrollTo({ top: (tableRef?.current?.offsetTop ?? 0) + -24 });
    setPageOffset(selected);
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[300px,1fr]">
      <Panels active={{ parent: panel.parent, child: panel.child }} />
      <div className="">
        <motion.div
          initial="rest"
          animate={loading ? "show" : "hide"}
          variants={{
            rest: {
              top: -50,
              opacity: 0,
            },
            show: {
              opacity: 1,
              y: 0,
            },
            hide: {
              opacity: 0,
              y: -50,
            },
          }}
          className="flex items-center justify-center"
        >
          <Spinner />
        </motion.div>

        {data?.data && yoy.length > 0 && (
          <>
            <div className="mb-12 w-full">
              <ResponsiveContainer
                className={"h-36 w-full lg:h-96"}
                height={400}
              >
                <AreaChart
                  data={yoy.slice().reverse()}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FFAF5F" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FFAF5F" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey={(a) => moment(new Date(a.date)).format("YYYY")}
                  />
                  <YAxis dataKey={"value"} orientation="right" />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const entry = payload[0].payload;
                        return (
                          <div className="rounded-sm bg-white p-2 shadow-sm">
                            <p className="">
                              Date:{" "}
                              <span className="text-sm font-semibold">
                                {moment(entry.date).format(date)}
                              </span>
                            </p>
                            <p className="">
                              Value:{" "}
                              <span className="text-sm font-semibold">
                                {formatCurrency(entry.value)}
                              </span>
                            </p>
                            <p className="">
                              YOY%:{" "}
                              <span className="text-sm font-semibold">
                                {
                                  <ColoredNumber
                                    number={entry.yoy}
                                    percent
                                    sign
                                    decimals={3}
                                  />
                                }
                              </span>
                            </p>
                          </div>
                        );
                      }

                      return null;
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#FFAF5F"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="max-w-lg">
              <h2 className="font-bold">Basic info</h2>
              <p className="mb-12">
                As of {moment(data.data[0].date).format("MMMM Do YYYY")}, the{" "}
                {indicator} Rate stood at {formatCurrency(data.data[0].value)}.
                {industry ? ` According to the ${industry}` : ""}{" "}
                {industry ? "h" : "H"}istorically, the {indicator} reached its
                peak at this record high of {formatCurrency(high)}, with the
                lowest recorded value being {formatCurrency(low)} and a median{" "}
                {short ?? ""} value of {formatCurrency(median)}. The
                Year-Over-Year growth rate is{" "}
                <ColoredNumber
                  number={yoy[0].yoy}
                  sign
                  colored
                  percent
                  decimals={3}
                />
                .
              </p>
            </div>

            <div className="w-full overflow-auto" ref={tableRef}>
              <Table>
                <TableHeader>
                  <TableRow headerRow>
                    <TableHead className="!py-2 !text-sm capitalize">
                      Date
                    </TableHead>
                    <TableHead className="!py-2 text-center !text-sm capitalize">
                      Value
                    </TableHead>
                    <TableHead className="!py-2 text-right !text-sm">
                      YOY%
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {table.map((entry, index) => (
                    <TableRow
                      className=""
                      key={entry.date + entry.value + index}
                    >
                      <TableCell className="py-2 text-sm">
                        {moment(entry.date).format(date)}
                      </TableCell>
                      <TableCell className="py-2 text-center text-sm">
                        {valueRenderer(entry.value)}
                      </TableCell>
                      <TableCell className="py-2 text-right text-sm">
                        <ColoredNumber
                          number={entry.yoy}
                          percent
                          sign
                          decimals={3}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={isMobile ? 2 : 3}
                pageCount={pageCount}
                previousLabel="<"
                marginPagesDisplayed={isMobile ? 1 : 2}
                forcePage={pageOffset}
                containerClassName="pagination__container"
                pageClassName="pagination__page"
                nextClassName="pagination__page"
                previousClassName="pagination__page"
                activeClassName="pagination__page-active"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
