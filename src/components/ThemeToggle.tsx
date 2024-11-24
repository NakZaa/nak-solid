import { useColorMode } from "@kobalte/core";
import { Moon, Sun } from "~/svgs/ColorMode";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Button
      onClick={() => setColorMode(colorMode() === "light" ? "dark" : "light")}
      class="p-2 rounded-full shrink-0"
      variant="ghost"
    >
      {colorMode() === "light" ? (
        <Moon class="size-4 fill-indigo-500" />
      ) : (
        <Sun class="size-5 fill-orange-300" />
      )}
      <span class="sr-only">Theme Toggle</span>
    </Button>
  );
}
