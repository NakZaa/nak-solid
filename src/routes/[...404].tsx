import { A } from "@solidjs/router";
import ArrowLeft from "~/svgs/Arrow";

export default function NotFound() {
  return (
    <main class="mt-8 flex flex-col gap-8 pb-16">
      <div class="min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div class="mx-auto max-w-max">
          <section class="sm:flex">
            <p class="title text-muted-foreground">404</p>
            <div class="sm:ml-6">
              <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 class="title sm:text-5xl">cannot find the page you&apos;re looking for</h1>
                <p class="mt-4 text-base text-muted-foreground">
                  Maybe I renamed or deleted the page. Please try again.
                </p>
              </div>
              <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <A href="/" class="link flex items-center gap-2 font-light">
                  <ArrowLeft />
                  <span>back to home</span>
                </A>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
