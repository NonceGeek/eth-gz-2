"use client";

import Link from "next/link";
import type { NextPage } from "next";
// import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Address } from "~~/components/scaffold-eth";
import { useState } from "react";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();

  const [showContact, setShowContact] = useState(false);

  const youtubeVideos = [
    {
      url: "https://www.youtube.com/watch?v=30pa790tIIA&list=PLJz1HruEnenCXH7KW7wBCEBnBLOVkiqIi&index=2",
      title: "WTF is ETH.BUILD?",
    },
    {
      url: "https://www.youtube.com/watch?v=QJ010l-pBpE&list=PLJz1HruEnenCXH7KW7wBCEBnBLOVkiqIi&index=3",
      title: "Hash Function - ETH.BUILD",
    },
    {
      url: "https://www.youtube.com/watch?v=9LtBDy67Tho&list=PLJz1HruEnenCXH7KW7wBCEBnBLOVkiqIi&index=4",
      title: "Key Pair - ETH.BUILD",
    },
    {
      url: "https://www.youtube.com/watch?v=mhwSGYRmkEU&list=PLJz1HruEnenCXH7KW7wBCEBnBLOVkiqIi&index=4&pp=iAQB",
      title: "Sending and Receiving Value",
    },
    {
      url: "https://www.youtube.com/watch?v=-6aYBdnJ-nM&list=PLJz1HruEnenCXH7KW7wBCEBnBLOVkiqIi&index=12",
      title: "Smart Contracts - ETH.BUILD",
    },
  ];

  return (
    <>

      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            {/* TODO: add the LOGO here. */}
            {/* TODO: randome emoji here. */}
            <span className="block text-2xl mb-2">😎 We1c0me to 😎</span>
            <span className="block text-4xl font-bold">&lt;% ETH GuangZhou %&gt;</span>
          </h1>
          {/* <div className="flex justify-center items-center space-x-2 flex-col">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div> */}
          <p className="text-center text-lg">
            – Let&apos;s buidl c00l dApps that people actually use.
            <br></br><br></br>
            — 共同构建有真实用户的酷应用。
            <br></br><br></br>
            — 一齐 buidl 真係有人用嘅「型 dApps」。
          </p>
          <div className="flex justify-center mt-8">
            {/* Use DaisyUI modal-toggle pattern for the contact modal */}
            <label htmlFor="contact-modal" className="btn btn-ghost bg-white text-black hover:bg-gray-100 btn-lg cursor-pointer">
              Contact Us
            </label>
            <input type="checkbox" id="contact-modal" className="modal-toggle" />
            <label htmlFor="contact-modal" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <label htmlFor="contact-modal" className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3">✕</label>
                <h3 className="text-xl font-bold mb-4 text-center">Contact Info</h3>
                <div className="space-y-4 text-center">
                  <div>
                    Telegram:<a href="https://t.me/leeduckgo" target="_blank" rel="noopener noreferrer" className="text-white-500 underline">https://t.me/leeduckgo</a>
                  </div>
                  <div>
                    Twitter: <a href="https://x.com/0xleeduckgo" target="_blank" rel="noopener noreferrer" className="text-white-500 underline">https://x.com/0xleeduckgo</a>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="mb-1">WeChat</span>
                    <img src="https://arweave.net/GAawdzc5Fn8BKaqqfJQDCeeYuhAe2ZMBMeG14sN_bq4" alt="WeChat QR" className="h-36 w-36 rounded-lg border" />
                  </div>
                </div>
              </label>
            </label>
          </div>
        </div>
        <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
        <h2 className="text-4xl font-bold mb-6 text-center">TimeL1n3</h2>
        <div className="max-w-4xl mx-auto">
 
              <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto">
                <code className="language-solidity">
{`
                              Registration Starts       2025-08-21
        ----------------------------- ◉ -------------------- ◉ -----------=>
   Online/Offline Workshops!      2025-07-01           ETH GuangZhou
`}
                </code>
              </pre>
          </div>
        </div>
        <div className="px-5">
          <br></br>
          <h2 className="text-center">
            <span className="block text-4xl font-bold">Whitepaper</span>
          </h2>
          <br></br>
          <p>0x0000000000000000000000000000000000000000</p>
          {/* TODO: impl a whitepaper here.*/}
        </div>

        <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
          <h2 className="text-center">
            <span className="block text-4xl font-bold">Worksh0ps</span>
          </h2>
          <br></br>
          <VideoSlideshow videos={youtubeVideos} />
        </div>

        <div className="px-5">
          <br></br>
          <h2 className="text-center">
            <span className="block text-4xl font-bold">Enterta1nm3nt</span>
          </h2>
          <br></br>
          <p>0x0000000000000000000000000000000000000000</p>
          {/* TODO: impl the entertainments.*/}
        </div>

        <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
          <h2 className="text-center">
            <span className="block text-4xl font-bold">Sponsors</span>
          </h2>
          <div className="flex justify-center items-center gap-8 my-8">
            <a href="https://noncegeek.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://arweave.net/P1WVXIQB8Q6jlAAI5yejI40ujdn5_bzJoA-M5hpyCb8"
                alt="NonceGeekDAO"
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
            </a>
            {/* TODO: get more sponsors.*/}
          </div>
          
          <h2 className="text-center">
            <span className="block text-4xl font-bold">Partners</span>
          </h2>

          <div className="flex justify-center items-center gap-8 my-8">
            <a href="https://noncegeek.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://arweave.net/P1WVXIQB8Q6jlAAI5yejI40ujdn5_bzJoA-M5hpyCb8"
                alt="NonceGeekDAO"
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
            </a>
            {/* TODO: get more partners.*/}
          </div>

        </div>

      </div>
    </>
  );
};

const VideoSlideshow = ({ videos }: { videos: { url: string; title: string }[] }) => {
  const [current, setCurrent] = useState(0);
  const videosPerPage = 3;
  const totalPages = Math.ceil(videos.length / videosPerPage);
  const currentPage = Math.floor(current / videosPerPage);

  const prev = () => {
    setCurrent(() => {
      const newPage = (currentPage - 1 + totalPages) % totalPages;
      return newPage * videosPerPage;
    });
  };
  const next = () => {
    setCurrent(() => {
      const newPage = (currentPage + 1) % totalPages;
      return newPage * videosPerPage;
    });
  };

  // Get the videos to display on the current page
  const visibleVideos = videos.slice(currentPage * videosPerPage, currentPage * videosPerPage + videosPerPage);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4">
        <button onClick={prev} className="btn btn-circle btn-outline">‹</button>
        <div className="flex gap-6">
          {visibleVideos.map((video, idx) => (
            <a
              key={idx}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-80 bg-base-100 rounded-xl shadow-lg p-4 hover:shadow-2xl transition"
            >
              <div className="aspect-video bg-black rounded-lg mb-2 flex items-center justify-center">
                <img
                  src={`https://img.youtube.com/vi/${video.url.split("v=")[1].split("&")[0]}/hqdefault.jpg`}
                  alt={video.title}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="text-lg font-semibold text-center">{video.title}</div>
            </a>
          ))}
        </div>
        <button onClick={next} className="btn btn-circle btn-outline">›</button>
      </div>
      <div className="flex gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === currentPage ? "bg-gray-300" : "bg-gray-500"}`}
            onClick={() => setCurrent(idx * videosPerPage)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
