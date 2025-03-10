import { useState, useEffect, useRef } from "react";

export const useScrollAnimation = (threshold = 0.5) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null); // Fix: Ensure a valid ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Fix: Ensures state updates only once
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};
