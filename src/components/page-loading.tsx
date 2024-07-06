import React from "react";
import Spinner from "./spinner";

export default function PageLoading() {
  return (
    <section className="py-10">
      <center>
        <Spinner className="text-primary-base" />
      </center>
    </section>
  );
}
