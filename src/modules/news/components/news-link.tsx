"use client";

import React, { HTMLAttributes } from "react";
import { GeneralNews, News } from "../types";
import { useAppStore } from "@/store";
import Link from "next/link";

interface NewsLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  news: News | GeneralNews;
}

export default function NewsLink(props: NewsLinkProps) {
  const { news, ...rest } = props;
  const { setNews } = useAppStore();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setNews(news);
  }

  return <Link href={"#"} {...rest} onClick={handleClick} />;
}
