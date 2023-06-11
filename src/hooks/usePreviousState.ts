import { useEffect, useRef } from "react";

export function usePreviousState<T>(value: T) {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current || "";
}
