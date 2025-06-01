"use client";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { motion } from "framer-motion"; // corrected import
import { cn } from "../lib/utilss";

export function ContainerTextFlipDemo() {
const words = ["ForgiveMe", " माफ़ करना", "ক্ষমা করো", "மன்னிக்கவும்"];

return (
<div className="flex justify-center">
<motion.h1
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
className={cn(
"relative mb-6 text-center text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100"
)}
layout
>
<div className="inline-block text-5xl">
Bridge the gap with Words that Heals{" "}
<span className="flex justify-center mt-3">
{" "}
<ContainerTextFlip words={words} />
</span>
</div>
</motion.h1>
</div>
);
}