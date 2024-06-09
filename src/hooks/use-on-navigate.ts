import { useEffect } from "react";

const useOnNavigate = (onNavigate: (event: PopStateEvent) => void) => {
  useEffect(() => {
    window.addEventListener("popstate", onNavigate);

    return () => {
      window.removeEventListener("popstate", onNavigate);
    };
  }, [onNavigate]);
};

export default useOnNavigate;
