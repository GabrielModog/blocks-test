import { useState } from "react";
import { BannerProps } from "./Banner.types";

export function useBanner(): [boolean, () => void] {
  const [isShowing, setShowing] = useState<boolean>(true);
  const toggle = () => setShowing((prev) => !prev);
  return [isShowing, toggle];
}
