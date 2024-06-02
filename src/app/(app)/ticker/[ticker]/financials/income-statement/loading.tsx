import Spinner from "@/components/spinner";
import React from "react";

export default function Loading() {
  return (
    <section className=" py-10 ">
      <center>
        <Spinner className=" text-primary-base " />
      </center>
    </section>
  );
}
