import React from "react";

function Home() {
  return (
    <div className="font-redditMono p-8 text-sm font-semibold">
      <h1 className="text-3xl">Hi, I'm David 👋</h1>
      <p className="pt-3 font-medium">I love running and programming.</p>
      <p className="pt-1">
        <a
          href="https://x.com/davidwrossiter"
          className="underline text-blue-700"
          target="_blank"
        >
          Twitter
        </a>{" "}
        /{" "}
        <a
          href="https://github.com/davidwrossiter?tab=overview&from=2024-06-01&to=2024-06-08"
          className="underline text-blue-700"
          target="_blank"
        >
          GitHub
        </a>{" "}
        /{" "}
        <a
          href="https://www.linkedin.com/in/davidwrossiter/"
          className="underline text-blue-700"
          target="_blank"
        >
          LinkedIn
        </a>
      </p>
      {/* Projects section */}
      <p className="mt-6 font-[400] font-medium text-2xl">What I'm working on</p>

      <div className="mt-3">

        <p className="max-w-[500px] my-1 pb-2 font-[400]">
          <a>
            <br />
            <p href="https://mordecaiapp.com" target="_blank" className="text-xl underline font-medium">Mordecai</p><br /></a>
          <p>When we started developing Mordecai a few months ago, we knew that there was one problem we were intent on being a part of solving: programming with LLMs. We had used products such as GitHub Copilot, Codeium, and Cursor and weren't totally happy with their design philosophy. These apps take the approach of LLM integrations directly inside of your text editor, and none of us liked this. I use Neovim, and one of my co-founders uses Helix; neither of us were prepared to switch to a different way of editing code just so we could get an LLM integration, so we decided to build Mordecai, a browser-based programming tool — not just another VS Code fork.
          </p>

          <br />
          <p className="text-xl font-medium">Why should I use Mordecai?</p>
          <br />
          <p>If you use Neovim, Helix, Emacs, or any unconventional text editor, Mordecai is one of the easiest ways to program with LLMs. You certainly don't need to use one of these editors to use Mordecai; many of our users don't use them. The beauty of Mordecai is that you can use it irrespective of your text editor.
          </p>

          <br />
          <p className="text-xl font-medium">Linking a live repository</p>
          <br />
          <p>There have previously been attempts made to integrate coding with LLM apps in the browser, but they all lacked one key ingredient: live code sync. We have created a <span className="underline font-medium"><a href="https://github.com/codeyarduk/mordecai" target="_blank">CLI tool</a></span> that can be run in a local code repo; this will give Mordecai context of your code repo and update as you change/write files. We have found this to be one of the most elegant approaches to this complex problem. You can see how to do that <span><a href="/docs/" className="underline font-medium">here</a></span>.
          </p>

          <br />
          <p className="text-xl font-medium">The interface</p>
          <br />
          <p>Let me paint you a picture: you're using ChatGPT, Cursor, or Claude; you've asked a question and got a great answer; you have a whole lot of different questions you want to ask about the response, but at the same time you don't want to muddy the chat with a bunch of questions because the original context will eventually be lost. Well, we all had the same problem.
          </p>

          <br />
          <p>Surely there has to be a better way to do this? After a few different attempts, we have come up with a solution that we love: threads. The core of the Mordecai interface is the concept of threads. Within each chat, you can open up multiple different threads. Each new thread that you open will have the context of the previous one, so if you want to quickly ask a question about a response you were given, you can open a new thread, ask a question about it, then delete it.</p>
          <br />
          <img src="https://media.mordecaiapp.com/blog-blogpost1-image-1.png" draggable="false" className="rounded-lg select-none" />

          <p className="text-sm text-gray-600 pt-2">An example of our multi-thread interface.</p>

          <br />
          <p>We didn't stop there... By using threads, a whole new world of interactions opens up, including the generation of what we call internal links. Within a thread, you will see certain headings and words underlined; this means that you can click them. If you click on one, it will open up a new thread explaining the topic in greater detail.</p>
          <br />
          <video width="100%" className="rounded-lg" controls>
            <source src="https://media.mordecaiapp.com/blog-blogpost1-video-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-sm text-gray-600 pt-2">An example of how internal-links work.</p>
          <br />
          <p className="text-xl font-medium">Organisation</p>
          <br />
          <p>Trying to navigate through previous chats has always been a pain for us, so we created spaces, a way for you to organise your chats. Each space can have different context too, so if you want to keep the code context for the back-end, and the front-end, of a new app you're working on separate from all your other chats, you can simply create a new space and sync your code to that new space.
          </p>

          <br />
          <p className="text-xl font-medium">Different types of context</p>
          <br />
          <p>If you navigate to the context menu, you will notice that you can also upload files directly; this allows all the same file types as we allow with our CLI tool, as well as PDFs. You can see the full list of file types that we support <span><a href="docs?doc=supportedLanguages" className="font-medium underline">here</a></span>. If there are file types you don't see on that list that you would like to see us support, please don't hesitate to get in touch.
          </p>


          <br />


          <p className="text-xl font-medium">Using Mordecai</p>
          <br />
          <p>
            If you encounter any issues with Mordecai, you can let us know <span><a className="font-medium underline" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc8r8jVdY0YkdQvoHaEWj-h7B3oCz4eX0vmB44C0LS_yBKtCQ/viewform">here</a></span>. If you would like to know more about how Mordecai can best fit your use case, you can also <span><a className="font-medium underline" target="_blank" href="https://cal.com/rossiter/15min?user=rossiter">book a call with me on Cal</a></span>
          </p>

          <br />


        </p>
      </div>
    </div>
  );
}

export default Home;
