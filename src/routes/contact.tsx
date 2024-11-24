import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/components/ui/card";
import { Github, Linkedin, Mail } from "~/svgs/socials";

export default function Contact() {
  return (
    <>
      <Title>Nak&apos;s | Contact</Title>
      <main class="mx-auto mt-8 flex max-w-3xl text-center justify-center items-center flex-col gap-16 pb-16 px-8 font-sans antialiased">
        <h1 class="title text-5xl font-black">contact me</h1>
        <section class="grid grid-cols-1 gap-4 overflow-hidden">
          <Card>
            <CardHeader>
              <CardTitle class="text-2xl">Nakonkate Tintapura</CardTitle>
            </CardHeader>
            <CardContent class="grid gap-4 sm:px-24">
              <A
                class="flex flex-row items-center gap-4"
                href="https://www.linkedin.com/in/nakonkate/"
              >
                <Linkedin class="size-10" />
                <Button variant="ghost" class=" flex items-center py-6">
                  <div class="flex-1">
                    <p class="text-sm font-medium leading-none">Nakonkate</p>
                  </div>
                </Button>
              </A>
              <A class="flex flex-row items-center  gap-4" href="https://github.com/NakZaa">
                <Github class="size-10" />
                <Button variant="ghost" class=" flex items-center py-6">
                  <div class="flex-1">
                    <p class="text-sm font-medium leading-none">NakZaa</p>
                  </div>
                </Button>
              </A>
              <a class="flex flex-row items-center gap-4" href="mailto:nakonkate.t@gmail.com">
                <Mail class="size-10" />
                <Button variant="ghost" class=" flex items-center py-6">
                  <div class="flex-1">
                    <p class="text-sm font-medium leading-none">nakonkate.t@gmail.com</p>
                  </div>
                </Button>
              </a>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
