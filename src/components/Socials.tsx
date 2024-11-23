import { A } from "@solidjs/router";
import { Github, Linkedin, Mail } from "~/svgs/socials";

export default function Socials() {
  return (
    <section class="flex gap-6 z-30">
      <A
        href="https://www.linkedin.com/in/nakonkate/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-muted-foreground hover:text-foreground"
      >
        <Linkedin class="size-6" />
      </A>
      <A
        href="https://github.com/NakZaa"
        target="_blank"
        rel="noopener noreferrer"
        class="text-muted-foreground hover:text-foreground"
      >
        <Github class="size-6" />
      </A>
      <A
        href="mailto:nakonkate.t@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-muted-foreground hover:text-foreground"
      >
        <Mail class="size-6" />
      </A>
    </section>
  );
}
