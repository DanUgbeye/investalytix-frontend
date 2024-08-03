"use client";

import { useAppStore } from "@/store";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { News } from "../types";

interface NewsLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  news: News;
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
