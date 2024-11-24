import { useLocation } from "@solidjs/router";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-primary" : "border-transparent hover:border-primary";
  return (
    <nav class="sticky top-0 z-50 bg-background/75 border-b border-gray-100 bg-opacity-10 bg-clip-padding py-4 backdrop-blur-sm backdrop-filter font-sans antialiased px-6 sm:px-0 dark:border-slate-900">
      <div class="flex flex-row max-w-3xl mx-auto items-center justify-between">
        <ul class="container flex items-center p-3 text-black max-w-3xl gap-2 sm:gap-0 dark:text-white">
          <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6 transition-all`}>
            <a href="/">Nak</a>
          </li>
          <li class={`border-b-2 ${active("/contact")} mx-1.5 sm:mx-6 transition-all`}>
            <a href="/contact">Contact</a>
          </li>
          <li class={`border-b-2 ${active("/privacy")} mx-1.5 sm:mx-6 transition-all`}>
            <a href="/privacy">Privacy</a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
