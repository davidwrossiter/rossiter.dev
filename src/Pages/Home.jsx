import React from "react";

function Home() {
  return (
    <div className="font-redditMono p-8 text-sm font-semibold">
      <h1 className="text-3xl">hi, i'm david 👋</h1>
      <p className="pt-3 font-medium">i love running and programming.</p>
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
        <div className="">
          <p className="font-bold text-base">Wilson CLI</p>
          <div className="flex flex-row mt-1">
            <a
              href="https://github.com/codeyarduk/wilson-cli"
              className="underline text-blue-700 text-sm mr-2"
              target="_blank"
            >
              GitHub for CLI
            </a>{" "}
            /
            <a
              href="https://www.npmjs.com/package/@wilsonai/cli"
              className="underline text-blue-700 ml-2 text-sm"
              target="_blank"
            >
              NPM Package
            </a>
          </div>
        </div>
        <p className="max-w-[500px] mt-1 font-[400]">
          Wilson CLI is the central point of how Wilson functions. It allows you
          to run a command inside of your JavaScript or TypeScript repository,
          semantically chunking it into small pieces of data to be processed by
          an embedding model for use in a RAG system.
        </p>
      </div>

      <div className="mt-6">
        <div className="flex flex-row items-center">
          <p className="font-bold text-base">Wilson</p>
          <a
            href="https://heywilson.dev"
            className="underline text-blue-700 ml-2 text-sm"
            target="_blank"
          >
            join the waitlist
          </a>
        </div>
        <p className="max-w-[500px] mt-1 font-[400]">
          Wilson is a JavaScript programming assistant that allows you to have
          contextual conversations with your codebase. Wilson integrates into
          your codebase and lets you chat in the browser with an LLM interface
          like ChatGPT, with the knowledge of all your code, allowing for
          in-depth problem solving, bug fixing, and feature roll outs.
        </p>
      </div>

      <div className="mt-6">
        <p href="#" className="font-bold text-base">
          Auth Messiah
        </p>
        <p className="pt-1">
          <a
            href="https://github.com/codeyarduk/auth-messiah"
            className="underline text-blue-700"
            target="_blank"
          >
            GitHub repo
          </a>{" "}
        </p>
        <p className="max-w-[500px] mt-3 font-[350]">
          This is an open source project that I created with{" "}
          <a
            className="underline text-blue-700"
            href="https://joeyjooste.com"
            target="_blank"
          >
            Joey Jooste
          </a>
          . We were struggling to find a good way to roll out auth in our apps,
          so we decided to create an open source auth system that anyone can
          fork. All you need to do is change the database connections and API
          keys, link the forked repo to a cloudflare worker and you have full
          custom auth rolled out for your application.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-bold text-base">Chapter One</p>
        <p className="pt-1">
          <a
            href="https://github.com/codeyarduk/chapter-one-client"
            className="underline text-blue-700"
            target="_blank"
          >
            GitHub repo for front-end
          </a>{" "}
          /{" "}
          <a
            href="https://github.com/codeyarduk/chapter-one-server"
            className="underline text-blue-700"
            target="_blank"
          >
            GitHub repo for back-end
          </a>{" "}
        </p>
        <p className="max-w-[500px] mt-3 font-[350]">
          Chapter one is a SaaS app that helps you optimise your Resume / CV. To
          use it you upload your CV and the job you want to get. That
          information is processed by our servers using a machine learning
          model. It returns an in detail analysis of your resume and outlines
          the sections that should be optimised for the job you are trying to
          get.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-bold text-base">Orin Design Co.</p>
        <p className="pt-1">
          <a
            href="https://orindesign.co/"
            className="underline text-blue-700"
            target="_blank"
          >
            Live Project
          </a>{" "}
          /{" "}
          <a
            href="https://github.com/davidwrossiter/orin"
            className="underline text-blue-700"
            target="_blank"
          >
            GitHub repo for front-end
          </a>{" "}
        </p>
        <p className="max-w-[500px] mt-3 font-[350]">
          Orin Design Co is my Dad's company, I created the website for him in
          React, and integrated it with stripe so that he can accept payments.
        </p>
      </div>
    </div>
  );
}

export default Home;
