import { scale } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { A } from "@solidjs/router";
import Experience from "~/components/Experience";
import Projects from "~/components/Projects";
import Socials from "~/components/Socials";
import { Button } from "~/components/ui/button";
import Download from "~/svgs/Download";

const NAK_BIRTH_YEAR = 2003;

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  }
});

export default function Home() {
  return (
    <main class="mx-auto mt-8 flex max-w-3xl flex-col gap-16 pb-16 px-8 font-sans antialiased">
      <section class="z-30 flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <img
          class="rounded-full shadow-sm"
          src={cld
            .image("nakonkate/nak")
            .quality("auto")
            .format("auto")
            .resize(scale().width(500).height(500))
            .toURL()}
          alt="Photo of Nak"
          width={250}
          height={250}
        />
        <div class="flex flex-col">
          <h1 class="title flex flex-row text-5xl font-bold">
            hi! Nak here{" "}
            <div class="hidden size-fit px-4 md:flex">
              <img
                src={cld
                  .image("nakonkate/otter")
                  .quality("auto")
                  .format("auto")
                  .resize(scale().width(150).height(150))
                  .toURL()}
                alt="otter"
                width={50}
                height={50}
              />
            </div>
          </h1>
          <p class="mt-4 flex items-center gap-1">
            I&apos;m a {new Date().getFullYear() - NAK_BIRTH_YEAR}
            -year-old law student from Thailand.
          </p>
          <p class="mt-1">I love learning, coding, and drinking coffee.</p>
          <section class="mt-8 flex items-center gap-8">
            <A href="/resume_nakonkate.pdf" target="_blank">
              <Button variant="outline" class="shadow-sm ">
                <span class="font-semibold">Resume</span>
                <Download class="ml-2" />
              </Button>
            </A>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section class="flex flex-col gap-8">
        <div class="flex justify-between">
          <h2 class="title text-2xl sm:text-3xl">featured projects</h2>
        </div>
        <Projects />
      </section>
    </main>
  );
}
