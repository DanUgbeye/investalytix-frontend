import { useState, useCallback, useEffect, useRef } from "react";

export default function useScroll<
  ElementType extends HTMLElement = HTMLElement,
>() {
  const ref = useRef<ElementType>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = useCallback(() => {
    if (ref.current) {
      setIsScrolled(ref.current.scrollLeft > 0);
    }
  }, [ref]);

  useEffect(() => {
    ref.current?.addEventListener("scroll", onScroll);

    return () => {
      ref.current?.removeEventListener("scroll", onScroll);
    };
  }, [ref, onScroll]);

  return { ref, isScrolled, onScroll };
}
