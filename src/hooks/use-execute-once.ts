"use client";

import React from "react";

export default function useExecuteOnce() {
  const executed = React.useRef(false);

  function executeOnce(fn: () => void) {
    if (executed.current) {
      return;
    }
    executed.current = true;
    fn();
  }

  function reset() {
    executed.current = false;
  }

  return { executeOnce, reset };
}
