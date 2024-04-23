"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";

export default function Home() {

  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(/main-bg.jpg)" }}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[800px]">
          {/* slogan */}
          <h1 className="text-[30px] text-white font-semibold">
            {`Breathe life into your app, `}
            <div className="text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-blue-800 from-20% to-yellow-300">
              one pixel at a time.
            </div>
          </h1>
          <p className="text-gray-200 hidden md:block max-w-[600px]">
            Hello! I'm Loris, a frontend developer. I specialize in creating
            responsive and user-friendly web interfaces. Passionate about crafting elegant solutions to complex problems, I thrive in collaborative
            environments where I can contribute to innovative projects and continue to grow as a developer.
          </p>
          {/* nav */}
          <div className="flex-col md:flex-row hidden md:flex gap-2">
            <Link
              href="/pages/about-me"
              className="rounded-[20px] group relative bg-blue-900 opacity-70 hover:opacity-100 transition-opacity duration-300 hover:bg-blue-800 px-5 py-2 text-lg text-white max-w-[200px]"
            >
              {/* <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300" /> */}
              About me
            </Link>
            <Link
              href="/pages/my-projects"
              className="rounded-[20px] group relative bg-blue-900 opacity-70 hover:opacity-100 transition-opacity duration-300 hover:bg-blue-800 px-5 py-2 text-lg text-white max-w-[200px]"
            >
              {/* <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300" /> */}
              My projects
            </Link>
            <Link
              href="/pages/contact-me"
              className="rounded-[20px] group relative bg-blue-900 opacity-70 hover:opacity-100 transition-opacity duration-300 hover:bg-blue-800 px-5 py-2 text-lg text-white max-w-[200px]"
            >
              {/* <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 hover:opacity-20 transition-opacity duration-500" /> */}
              Contact me
            </Link>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/pages/about-me"
          className="rounded-[20px] group relative bg-blue-900 hover:bg-gradient-to-r from-blue-900 from-20% to-[#5d78ae] px-5 py-2 text-lg text-white max-w-[200px]"
        >
          About me
        </Link>
        <Link
          href="/pages/my-projects"
          className="rounded-[20px] group relative bg-blue-900 hover:bg-gradient-to-r from-blue-900 from-20% to-[#a0a382] px-5 py-2 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/pages/contact-me"
          className="rounded-[20px] group relative bg-blue-900 hover:bg-gradient-to-r from-blue-900 from-20% to-[#f8dc4a] px-5 py-2 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      {/* bg images */}
      <div className="absolute bottom-0 right-0 z-[10]">
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <AnimatedBackground />

      <Image src="/stars.png" alt="stars" width={300} height={300} className="absolute top-10 left-0 z-[10]" />

    </main>
  );
}
