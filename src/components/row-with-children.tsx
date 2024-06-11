import React, { HTMLAttributes, useMemo, useState } from "react";
import WithToggle from "./with-toggle";

export type RowDataWithChildren<TData extends Object> = {
  data: TData;
  defaultState?: boolean;
  children?: RowDataWithChildren<TData>[];
};

export type RowWithChildrenProps<TData extends Object> = {
  row: RowDataWithChildren<TData>;
  level?: number;
  renderRow: React.ElementType<
    HTMLAttributes<HTMLTableRowElement> & {
      data: TData;
      hasChildren?: boolean;
      level?: number;
      expanded?: boolean;
      onToggle?: (state?: boolean) => void;
      isFirstRow?: boolean;
    }
  >;
};

export function RowWithChildren<TData extends Object>(
  props: RowWithChildrenProps<TData>
) {
  const { row, level = 1, renderRow: RenderRow } = props;
  const { children, data, defaultState } = row;

  const hasChildren = useMemo(() => {
    return children !== undefined && children.length > 0;
  }, [children]);

  if (!hasChildren) {
    return (
      <RenderRow
        data={data}
        level={level}
        hasChildren={hasChildren}
        isFirstRow
      />
    );
  }

  return (
    <WithToggle initial={defaultState}>
      {({ state: isExpanded, toggle }) => {
        return (
          <>
            <RenderRow
              data={data}
              level={level}
              hasChildren={hasChildren}
              expanded={isExpanded}
              onToggle={toggle}
              isFirstRow
            />

            {isExpanded &&
              children!.map((child, index) => (
                <RowWithChildren
                  key={`${level}-${index}`}
                  row={child}
                  level={level + 1}
                  renderRow={RenderRow}
                />
              ))}
          </>
        );
      }}
    </WithToggle>
  );
}
