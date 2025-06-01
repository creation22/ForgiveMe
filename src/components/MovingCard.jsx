"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I'd like to clarify that while clearing my feed, it appears the algorithm may have mistakenly registered an interaction. There was absolutely no intent behind it. I request that no unnecessary assumptions be made. Thank you for your understanding.",
    name: "Virat Kohli",
    title: "Indian Cricketer",
  },
  {
    quote:
      "My comment wasn't just inappropriate; it wasn't even funny. Comedy is not my forte. I am just here to say sorry.",
    name: "Ranveer Allahbadia",
    title: "YouTuber & Podcaster",
  },
  {
    quote:
      "I sincerely apologize for mistakenly pulling a rug on the project. I never intended to harm anyone, and I deeply regret the losses caused. I take full responsibility and promise to learn from this mistake. Thank you for your understanding.",
    name: "Scammer",
    title: "Blockchain Developer",
  },
  {
    quote:
      "I spoke too soon and without full context. I apologize to those who felt hurt. I’ve taken the feedback seriously and I’m reflecting on it deeply.",
    name: "Apoorva",
    title: "Content Creator",
  },
  {
    quote:
      "Everything that is happening has been too much for me to handle. I have removed all India's Got Latent videos from my channel. My only objective was to make people laugh and have a good time. I will fully cooperate with all agencies to ensure their inquiries are concluded fairly. Thank you.",
    name: "Samay Raina",
    title: "Standup Comedian",
  },
];
