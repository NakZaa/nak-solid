import { A } from "@solidjs/router";

const lastUpdated = "Nov 2024";

export default function page() {
  return (
    <article class="prose mt-8 pb-16 dark:prose-invert flex flex-col w-full mx-auto">
      <div class="space-y-4">
        <h1 class="title text-5xl">privacy policy</h1>
        <p>Last Updated: {lastUpdated}</p>
      </div>
      <div class="space-y-4">
        <h2 class="title text-3xl">Welcome!</h2>
        <p>
          Thanks for stopping by. This <b>Privacy Policy</b> is here to let you know how your data
          is managed around here. My website is main purpose is to showcase my work, and as a law
          student, I&apos;m all about respecting your privacy.
        </p>
        <h2 class="title">What Information I Collect</h2>
        <p>
          I don&apos;t actively collect any personal information. There is no account creation, no
          tracking cookies, and definitely no data gathering.
        </p>
        <h3>Contact Info</h3>
        <p>
          If you reach out via email, the info you provide is entirely up to you. I will only use it
          to reply and have a conversation with you.
        </p>
        <h2 class="title">How I Use the Information</h2>
        <p>Here&apos;s what I might do with any information I collect:</p>
        <ul>
          <li>Make sure the site is running smoothly</li>
          <li>Improve the website</li>
          <li>Respond to your questions</li>
        </ul>
        <h2 class="title">Sharing Your Information</h2>
        <p>
          I <b>do not</b> sell, trade, or rent your personal info. If you shared something sensitive
          by accident, feel free to reach out, and I&apos;ll help you remove it.
        </p>
        <h2 class="title">Security</h2>
        <p>
          I will do my best to keep any info you share safe. While I&apos;ll take reasonable steps
          to protect your info, I can&apos;t promise 100% security due to the nature of the
          internet.
        </p>
        <h2 class="title">Policy Updates</h2>
        <p>
          This policy is current as of <b>{lastUpdated}</b>. If I make any changes, it&apos;ll
          update it here.
        </p>
        <h2 class="title">Got Questions?</h2>
        <p>
          If you have any questions, concerns, or just want to say hi, drop me an email at{" "}
          <A href="mailto:nakonkate.t@gmail.com">nakonkate.t@gmail.com</A>. I&apos;d love to hear
          from you!
        </p>
      </div>
    </article>
  );
}
