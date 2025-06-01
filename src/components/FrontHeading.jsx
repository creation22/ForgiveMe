"use client";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "../lib/utilss";

export function ContainerTextFlipDemo() {
  const words = ["ForgiveMe", " माफ़ करना", "ক্ষমা করো", "மன்னிக்கவும்"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6  text-left text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100"
      )}
      layout>
      <div className="inline-block">
        Because everyone deserves a second chance <ContainerTextFlip words={words} />
        {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}
