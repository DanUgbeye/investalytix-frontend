import { useEffect } from "react";

const usePreventNavigation = (onNavigate: (event: PopStateEvent) => void) => {
  useEffect(() => {
    window.addEventListener("popstate", onNavigate);

    return () => {
      window.removeEventListener("popstate", onNavigate);
    };
  }, [onNavigate]);
};

export default usePreventNavigation;
