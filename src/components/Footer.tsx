import { A } from "@solidjs/router";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer class="flex flex-col px-8 items-center justify-center pb-12 sm:flex-row-reverse sm:justify-between max-w-3xl mx-auto font-sans antialiased">
      <Socials />
      <section class="mt-8 sm:mt-0">
        <p class="text-center text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()}</span>{" "}
          <A class="link" href="/">
            nakonkate.com
          </A>
          {" | "}
          <A class="link font-bold" href="/privacy">
            privacy policy
          </A>
        </p>
      </section>
    </footer>
  );
}
