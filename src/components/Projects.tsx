import { A } from "@solidjs/router";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, Globe } from "~/svgs/socials";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { scale } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  }
});

const Projects = () => {
  return (
    <section class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Card class="flex flex-col">
        <CardHeader>
          <A href="https://programming.in.th">
            <img
              src={cld.image("nakonkate/prog").quality("auto").format("auto").toURL()}
              alt="programming.in.th"
              width={500}
              height={300}
              class="h-40 w-full object-cover object-top"
            />
          </A>
        </CardHeader>
        <CardContent class="flex flex-col gap-2">
          <CardTitle>
            <A href="https://programming.in.th/">programmin.in.th</A>
          </CardTitle>
          <p class="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            Programming Platform for Thai students to practice in various programming problems
          </p>
        </CardContent>
        <CardFooter class="flex h-full flex-col items-start justify-between gap-4">
          <div class="mt-2 flex flex-wrap gap-1">
            <Badge class="px-1 py-0 text-[10px]" variant="secondary">
              NextJS
            </Badge>
            <Badge class="px-1 py-0 text-[10px]" variant="secondary">
              TailwindCSS
            </Badge>
            <Badge class="px-1 py-0 text-[10px]" variant="secondary">
              Prisma
            </Badge>
          </div>
          <div class="flex flex-row flex-wrap items-start gap-1">
            <A href="https://programming.in.th" target="_blank">
              <Badge class="flex gap-2 px-2 py-1 text-[12px] hover:shadow-xl">
                <Globe class="size-4" />
                Website
              </Badge>
            </A>
          </div>
        </CardFooter>
      </Card>
      <Card class="flex flex-col">
        <CardHeader>
          <A href="https://lawcu-sum.vercel.app">
            <img
              src={cld.image("nakonkate/lawsum").quality("auto").format("auto").toURL()}
              alt="lawcu-sum"
              width={500}
              height={300}
              class="h-40 w-full object-cover object-top"
            />
          </A>
        </CardHeader>
        <CardContent class="flex flex-col gap-2">
          <CardTitle>
            <A href="https://lawcu-sum.vercel.app">Law Chula QA</A>
          </CardTitle>
          <p class="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            Question and Answer platform for Law students in Chulalongkorn University
          </p>
        </CardContent>
        <CardFooter class="flex h-full flex-col items-start justify-between gap-4">
          <div class="mt-2 flex flex-wrap gap-1">
            <Badge class="px-1 py-0 text-[10px]" variant="secondary">
              NextJS
            </Badge>
            <Badge class="px-1 py-0 text-[10px]" variant="secondary">
              TailwindCSS
            </Badge>
            <Badge class="px-1 py-0 text-[10px]" variant="secondary">
              Prisma
            </Badge>
            <Badge class="px-1 py-0 text-[10px]" variant="secondary">
              Uploadthing
            </Badge>
            <Badge class="px-1 py-0 text-[10px]" variant="secondary">
              KY
            </Badge>
          </div>
          <div class="flex flex-row flex-wrap items-start gap-1">
            <A href="https://github.com/NakZaa/lawcu-sum" target="_blank">
              <Badge class="flex gap-2 px-2 py-1 text-[12px] hover:shadow-xl">
                <Github class="size-4" />
                Source
              </Badge>
            </A>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Projects;
