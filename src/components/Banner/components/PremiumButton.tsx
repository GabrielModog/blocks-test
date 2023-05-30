import { BANNER_BUTTON_TEXT } from "../Banner.constants";
import Button from "@/components/Button";

export function PremiumButton() {
  return (
    <Button type="button" withIcon iconSize={20}>
      {BANNER_BUTTON_TEXT}
    </Button>
  );
}
