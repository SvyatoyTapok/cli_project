import { useRef } from "react";

export function useThrottle(callback: (...args: any) => void, timeout: number) {
  const timeoutId = useRef<NodeJS.Timeout>();
    const throttledCallback = (...args: any) => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      timeoutId.current = setTimeout(() => callback(args), timeout);
    }
    return throttledCallback;
}
