"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Portfolio() {

  return (
    <>
      <Image src="/me.png" height={240} width={240} alt="My Image" />

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] lg:max-w-5xl">
        <p className="flex w-full justify-center border-b bg-transparent pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30">
          Hello, I am Deepak Suthar, a dedicated software engineer hailing from
          Pune, India. With a solid 3-year track record, I have honed my skills
          across a diverse array of technologies, including Frontend and Backend
          development, DevOps practices, Blockchain, Web3, and the exciting
          realm of Open Source.
          <br /> <br />
          My professional journey has been enriched by my involvement with
          startups, particularly those specializing in Hyperlocal ecommerce
          platforms. The dynamic startup environment has nurtured my ability to
          adapt and thrive, fostering my knack for crafting solutions that cater
          to the unique challenges these platforms present.
          <br />
          <br />
          My expertise extends to the burgeoning world of Web3 applications.
          I have successfully conceptualized, built, and maintained a variety of
          groundbreaking applications, ranging from NFT marketplaces to
          decentralized exchanges (DEXs), blockchain tools, and even
          cutting-edge DeFi protocols.
          <br />
          <br />
          Branch building and product growth are not just facets of my career
          but a true passion. My experience has taught me the nuances of
          nurturing projects from their infancy, watching them flourish into
          impactful products.
          <br />
          <br />
          As a fervent enthusiast of startups, fintech, and emerging
          technologies, I am always at the forefront of innovation. My commitment
          to collaboration has led me to thrive alongside like-minded developers
          and entrepreneurs. I am an open book when it comes to contracts,
          freelancing, and developer advocacy, always eager to share my
          expertise and contribute to meaningful projects.
          <br />
          <br />
          Lets connect and explore the boundless possibilities of tech
          together.
        </p>
      </div>

      <div className="mt-24">
        <h2 className={`mb-3 text-2xl font-semibold`}>Get in Touch</h2>
      </div>

      <div className="mt-12 grid text-center lg:grid-cols-4">
        <a href="mail:codewithdeepak@yahoo.com" target="_blank">
          <Icon icon="carbon:email" className="mx-4" />
        </a>
        <a href="https://twitter.com/0xDsuthar" target="_blank">
          <Icon icon="teenyicons:twitter-outline" className="mx-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/deepak-suthar-7879071ab/"
          target="_blank"
        >
          <Icon icon="ant-design:linkedin-filled" className="mx-4" />
        </a>
        <a href="https://github.com/codewithdpk" target="_blank">
          <Icon icon="ant-design:github-filled" className="mx-4" />
        </a>
      </div>

      {/* <div className="mt-24 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </>
  );
}
