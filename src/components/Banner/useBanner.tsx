import { useState } from "react";

export function useBanner() {
  const [isShowing, setShowing] = useState<boolean>(true);
  const toggle = () => setShowing((prev) => !prev);
  return [isShowing, toggle];
}
