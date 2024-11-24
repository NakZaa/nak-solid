import { A } from "@solidjs/router";
import { Card, CardContent } from "~/components/ui/card";
import { Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Badge } from "./ui/badge";
import { Github, Globe } from "~/svgs/socials";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { scale } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  }
});

const Experience = () => {
  return (
    <Tabs defaultValue="experience" class="shadow-sm z-30">
      <TabsList>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent value="experience">
        <Card class="shadow-sm">
          <CardContent class="p-0">
            <ul class="ml-10 border-l">
              <li class="relative ml-10 py-4">
                <A
                  href="https://thailand.chevron.com/en"
                  target="_blank"
                  class="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                >
                  <div class="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                    <img
                      src={cld
                        .image("nakonkate/chevron")
                        .quality("auto")
                        .format("auto")
                        .resize(scale().width(92).height(92))
                        .toURL()}
                      alt="Chevron"
                      class="aspect-square h-full w-full object-contain bg-background dark:bg-white"
                    />
                  </div>
                </A>
                <div class="flex flex-1 flex-col justify-start gap-1">
                  <time class="text-xs text-muted-foreground">
                    <span>Jun 2024</span>
                    <span>{" - "}</span>
                    <span>Jul 2024</span>
                  </time>

                  <h2 class="font-semibold leading-none">
                    Chevron (Thailand) Exploration and Production
                  </h2>
                  <p class="text-sm text-muted-foreground">Summer Legal Intern</p>

                  <ul class="ml-4 list-outside list-disc">
                    <li class="prose pr-8 text-sm dark:prose-invert">
                      Conducted in-depth legal research and analysis on technology and energy sector
                      contracts, delivering insights on ongoing and future projects
                    </li>
                    <li class="prose pr-8 text-sm dark:prose-invert">
                      Analysed technical contracts related to technology and energy sectors to
                      ensure compliance with legal standards and organisational policies,
                      contributing to the mitigation of potential risks
                    </li>
                    <li class="prose pr-8 text-sm dark:prose-invert">
                      Utilised programming skills to automate repetitive tasks within the legal
                      department, including mid-year conclusions and work reviews, using generative
                      AI, reducing manual effort
                    </li>
                    <li class="prose pr-8 text-sm dark:prose-invert">
                      Led and organised an intern panel discussion for Chevron Thailand and
                      Asia-South management, successfully engaging over 100 participants
                    </li>
                  </ul>
                </div>
              </li>
              <li class="relative ml-10 py-4">
                <A
                  href="https://programming.in.th/"
                  target="_blank"
                  class="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                >
                  <div class="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full size-12 border">
                    <img
                      src={cld
                        .image("nakonkate/proglogo")
                        .quality("auto")
                        .format("auto")
                        .resize(scale().width(92).height(92))
                        .toURL()}
                      alt="Chevron"
                      class="aspect-square h-full w-full object-contain bg-background dark:bg-white"
                    />
                  </div>
                </A>
                <div class="flex flex-1 flex-col justify-start gap-1">
                  <time class="text-xs text-muted-foreground">
                    <span>2022</span>
                    <span>{" - "}</span>
                    <span>2024</span>
                  </time>
                  <h2 class="font-semibold leading-none">programming.in.th</h2>
                  <p class="text-sm text-muted-foreground">Frontend Developer</p>
                  <ul class="ml-4 list-outside list-disc">
                    <li class="prose pr-8 text-sm dark:prose-invert">
                      Website of The Institute of the Promotion of Teaching Science and Technology
                      (IPST)
                    </li>
                  </ul>
                </div>
                <div class="mt-2 flex flex-row flex-wrap items-start gap-2">
                  <A href="https://programming.in.th/">
                    <Badge title="Website" class="flex gap-2 px-2 py-1 text-[12px]">
                      <Globe aria-hidden="true" class="size-4" />
                      Website
                    </Badge>
                  </A>
                  <A href="https://www.ipst.ac.th/ipsten">
                    <Badge title="IPST" class="flex gap-2 px-2 py-1 text-[12px]">
                      <Globe aria-hidden="true" class="size-4" />
                      IPST
                    </Badge>
                  </A>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="education">
        <Card class="shadow-sm">
          <CardContent class="p-0">
            <ul class="ml-10 border-l">
              <li class="relative ml-10 py-4">
                <A
                  href="https://www.law.chula.ac.th/en/"
                  target="_blank"
                  class="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                >
                  <div class="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                    <img
                      src={cld
                        .image("nakonkate/CU")
                        .quality("auto")
                        .format("auto")
                        .resize(scale().width(92).height(92))
                        .toURL()}
                      alt="Chevron"
                      class="aspect-square h-full w-full object-contain bg-background dark:bg-white"
                    />
                  </div>
                </A>
                <div class="flex flex-1 flex-col justify-start gap-1">
                  <time class="text-xs text-muted-foreground">
                    <span>Aug 2022</span>
                    <span>{" - "}</span>
                    <span>Present</span>
                  </time>
                  <h2 class="font-semibold leading-none">Chulalongkorn University</h2>
                  <p class="text-sm text-muted-foreground">Bachelor of Laws</p>

                  <ul class="ml-4 list-outside list-disc">
                    <li class="prose pr-8 text-sm dark:prose-invert">
                      Frontend Developer of Information System Design at Student Government
                      Chulalongkorn University (2022-2023)
                    </li>
                  </ul>
                </div>
                <div class="mt-2 flex flex-row flex-wrap items-start gap-2">
                  <A href="https://github.com/isd-sgcu/rpkm66-frontend">
                    <Badge title="Website" class="flex gap-2 px-2 py-1 text-[12px]">
                      <Github aria-hidden="true" class="size-4" />
                      Rub Puen Kao Mai Website
                    </Badge>
                  </A>
                </div>
              </li>
              <li class="relative ml-10 py-4">
                <A
                  href="https://triamudom.ac.th/"
                  target="_blank"
                  class="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                >
                  <div class="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full size-12 border">
                    <img
                      src={cld
                        .image("nakonkate/triam")
                        .quality("auto")
                        .format("auto")
                        .resize(scale().width(99).height(121))
                        .toURL()}
                      alt="Chevron"
                      class="aspect-square h-full w-full object-contain bg-background dark:bg-white"
                    />
                  </div>
                </A>
                <div class="flex flex-1 flex-col justify-start gap-1">
                  <time class="text-xs text-muted-foreground">
                    <span>May 2018</span>
                    <span>{" - "}</span>
                    <span>Apr 2022</span>
                  </time>
                  <h2 class="font-semibold leading-none">Triam Udom Suksa School</h2>
                  <p class="text-sm text-muted-foreground">High School</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Experience;

// {
//   links && links.length > 0 && (
//     <div class="mt-2 flex flex-row flex-wrap items-start gap-2">
//       {links?.map(link => (
//         <A href={link.href}>
//           <Badge title={link.name} class="flex gap-2">
//             <img aria-hidden="true" class="size-3" />
//             {link.name}
//           </Badge>
//         </A>
//       ))}
//     </div>
//   );
// }
