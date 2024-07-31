import React from "react";

function Home() {
  return (
    <div className="font-redditMono p-8 text-sm font-semibold">
      <h1 className="text-3xl">hi, i'm david 👋</h1>
      <p className="pt-3 font-medium">
        i love running and programming.
      </p>
      <p className="pt-1">
        <a
          href="https://x.com/davidwrossiter"
          className="underline text-blue-700"
          target="_blank"
        >
          twitter
        </a>{" "}
        /{" "}
        <a
          href="https://github.com/davidwrossiter?tab=overview&from=2024-06-01&to=2024-06-08"
          className="underline text-blue-700"
          target="_blank"
        >
          github
        </a>{" "}
        /{" "}
        <a
          href="https://www.linkedin.com/in/davidwrossiter/"
          className="underline text-blue-700"
          target="_blank"
        >
          linkedin
        </a>
      </p>
      {/* Projects section */}
      <p className="mt-6 font-[400] text-xl">projects</p>

      <div className="mt-6">
        <div className="flex flex-row items-center">
          <p className="font-bold text-base">wilson</p>
          <a
            href="https://heywilson.dev"
            className="underline text-blue-700 ml-2 text-sm"
            target="_blank"
          >
            join the waitlist
          </a>
        </div>
        <p className="max-w-[500px] mt-1 font-[400]">coming soon...</p>
      </div>

      <div className="mt-6">
        <p href="#" className="font-bold text-base">
          auth messiah
        </p>
        <p className="pt-1">
          <a
            href="https://github.com/codeyarduk/auth-messiah"
            className="underline text-blue-700"
            target="_blank"
          >
            github repo
          </a>{" "}
        </p>
        <p className="max-w-[500px] mt-3 font-[350]">
          this is an open source project that i created with my co-founder joey.
          we were struggling to find a good way to roll out auth in our apps, so
          we decided to create an open source auth system that anyone can fork.
          all you need to do is change the database connections and API keys,
          link the forked repo to a cloudflare worker and its done.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-bold text-base">chapter one</p>
        <p className="pt-1">
          <a
            href="https://chapteroneai.com/"
            className="underline text-blue-700"
            target="_blank"
          >
            live project
          </a>{" "}
          /{" "}
          <a
            href="https://github.com/codeyarduk/chapter-one-client"
            className="underline text-blue-700"
            target="_blank"
          >
            github for client
          </a>
        </p>
        <p className="max-w-[500px] mt-3 font-[350]">
          enter the job that you are trying to get, upload your resume/cv and
          get instant feedback and guidance on how you should optimise your
          resume/cv for the job you are looking to get.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-bold text-base">orin design co.</p>
        <p className="pt-1">
          <a
            href="https://orindesign.co/"
            className="underline text-blue-700"
            target="_blank"
          >
            live project
          </a>{" "}
          /{" "}
          <a
            href="https://github.com/davidwrossiter/orin"
            className="underline text-blue-700"
            target="_blank"
          >
            github for client
          </a>{" "}
        </p>
        <p className="max-w-[500px] mt-3 font-[350]">
          orin design is my dad's company, i created the website for him in
          react, and integrated it with stripe so that he can accept payments.
        </p>
      </div>
    </div>
  );
}

export default Home;
