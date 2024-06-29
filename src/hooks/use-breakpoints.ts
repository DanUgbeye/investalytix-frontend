import { useState, useEffect } from "react";

const BREAKPOINTS = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
} as const;

type Breakpoint = keyof typeof BREAKPOINTS;

function useBreakpoint(breakpoint: Breakpoint) {
  const [isBreakpointActive, setIsBreakpointActive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(BREAKPOINTS[breakpoint]);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsBreakpointActive(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Set the initial state
    setIsBreakpointActive(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [breakpoint]);

  return isBreakpointActive;
}

export default useBreakpoint;
