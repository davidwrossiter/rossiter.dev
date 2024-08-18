import React from "react";

function LearnHowToCode() {
  return (
    <div className="font-redditMono px-6 h-screen overflow-hidden">
      <header className="py-3 font-bold">
        <p>Rossiter</p>
      </header>
      <div className="h-full flex justify-between flex-col flex-grow">
        <div className="flex h-full flex-col flex-grow">
          <div className="mt-6 text-4xl">Learn how to code in 2024.</div>
          <p className="mt-6 font-bold text-sm">Links</p>
          <div className="flex flex-col text-sm mt-3 gap-1">
            <a
              href="https://youtu.be/qz0aGYrrlhU?si=wrN_LT1ReA7_k0Uur"
              target="_blank"
              className="underline"
            >
              Learn HTML and CSS
            </a>
            <a
              href="https://youtu.be/W6NZfCO5SIk?si=mWmQSctFc1pJxHqX"
              target="_blank"
              className="underline"
            >
              Learn JavaScript
            </a>
            <a
              href="https://youtu.be/8JJ101D3knE?si=vUy_Co933JZcs9Qq"
              target="_blank"
              className="underline"
            >
              Learn Git and GitHub
            </a>
            <a
              href="https://youtu.be/SqcY0GlETPk?si=UV_0V0hX7gr_jasL"
              target="_blank"
              className="underline"
            >
              Learn React
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnHowToCode;
