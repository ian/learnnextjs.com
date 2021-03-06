import Head from "next/head";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Head>
        <title>Learn Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-md m-auto flex flex-col">
        <h1 className="text-4xl font-bold mb-5">Learn Next.js!</h1>

        <p className="text-xl">This domain has quite the story to tell.</p>

        <p className="text-xl mt-5">
          In another life it was the primary domain for next.js documentation.
        </p>

        <p className="text-xl mt-5">
          Soon, we&apos;ll be opening this up as an open-source documentation
          site.
        </p>

        <p className="text-xl mt-5">
          If you are interested in contributing,{" "}
          <a
            href="mailto:learnnextjs@01.studio"
            className="text-blue-500 underline"
          >
            feel free to drop us a line
          </a>
          .
        </p>
      </main>
    </div>
  );
}
