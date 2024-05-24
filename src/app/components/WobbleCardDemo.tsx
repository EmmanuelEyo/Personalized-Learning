"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { Highlight } from "./Highlight";
import { CardStack } from "./ui/card-stack";
import Carousel from "./Carousel";
import GoalCardForm from "./GoalCardForm";

export function WobbleCardDemo() {

    const CARDS = [
        {
          id: 0,
          name: "Manu Arora",
          designation: "Senior Software Engineer",
          content: (
            <p>
              These cards are amazing, <Highlight>I want to use them</Highlight> in my
              project. Framer motion is a godsend ngl tbh fam 🙏
            </p>
          ),
        },
        {
          id: 1,
          name: "Elon Musk",
          designation: "Senior Shitposter",
          content: (
            <p>
              I dont like this Twitter thing,{" "}
              <Highlight>deleting it right away</Highlight> because yolo. Instead, I
              would like to call it <Highlight>X.com</Highlight> so that it can easily
              be confused with adult sites.
            </p>
          ),
        },
        {
          id: 2,
          name: "Tyler Durden",
          designation: "Manager Project Mayhem",
          content: (
            <p>
              The first rule of
              <Highlight>Fight Club</Highlight> is that you do not talk about fight
              club. The second rule of
              <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
              club.
            </p>
          ),
        },
      ];
  return (
    <div className="grid z-0 grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-32 w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="flex flex-col">
          <h2 className="text-center text-balance text-base md:text-xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
            <span className="text-purple-800 font-bold">Your</span> Achievements: Celebrate Every <span className="text-purple-800 font-bold text-6xl">Milestone!</span>
          </h2>
          <p className="mt-4 text-left  text-2xl text-purple-300">
            Track Your Progress, Unleash Your Potential
          </p>
          <div className="mt-3 flex justify-center">
              <Image src='/Level=Basic, Type=Colored.png' width={200} height={200} alt="bage1" />
              <Image src='/Level=Advance, Type=Colored.png' width={200} height={200} alt="bage2" />
          </div>
        </div>
        {/* <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        /> */}
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-blue-950 min-h-[300px]">
        <div className="flex flex-col-reverse items-center -ml-5 justify-center">
            <span className="text-4xl mt-3 font-bold">Personalized <span className="text-blue-600">FlashCards</span></span>
            <CardStack items={CARDS} />
        </div>
        {/* <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p> */}
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="flex">
          <div className="flex flex-col max-w-2xl">
            {/* <Carousel /> */}
            <h2 className="text-left text-balance text-base md:text-xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
              <span className="text-purple-800 font-bold">Achieve <span className="text-white">More with Clear</span> Goals!</span>
            </h2>
            <p className="mt-4 text-left  text-2xl text-purple-300">
              Unleash your potential by setting and tracking your personalized learning goals. Start now and see your progress soar!
            </p>
            <GoalCardForm />
          </div>
          <div className="w-full ml-4">
            <video className="rounded-xl shadow-lg" src="/mockup_video.mp4" controls>
              Your browser does not support the video tag
            </video>
          </div>
        </div>
        {/* <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        /> */}
      </WobbleCard>
    </div>
  );
}
