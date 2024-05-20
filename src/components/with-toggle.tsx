import React, { useMemo, useState } from "react";

interface WithToggleProps {
  initial?: boolean;
  children: React.ElementType<{
    state: boolean;
    toggle(newState?: boolean): void;
  }>;
}

export default function WithToggle(props: WithToggleProps) {
  const { initial = false, children: ChildElement } = props;
  const [state, set] = useState(initial);

  function toggle(newState?: boolean) {
    set((prev) => (newState ? newState : !prev));
  }

  const children = useMemo(
    () => <ChildElement state={state} toggle={toggle} />,
    [state]
  );

  return children;
}
