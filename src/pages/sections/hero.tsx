import Dart from "@/components/icons/dart";
import Flutter from "@/components/icons/flutter";
import Laravel from "@/components/icons/laravel";
import PHP from "@/components/icons/php";
import Python from "@/components/icons/python";
import React from "@/components/icons/react";
import Tailwind from "@/components/icons/tailwind";
import TypeScript from "@/components/icons/typescript";
import Vue from "@/components/icons/vue";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const languagesAndFrameworks: { icon: React.ReactNode, tooltip: string }[] = [
    { icon: <PHP />, tooltip: "PHP" },
    { icon: <Python />, tooltip: "Python" },
    { icon: <TypeScript />, tooltip: "TypeScript" },
    { icon: <Dart />, tooltip: "Dart" },
    { icon: <Laravel />, tooltip: "Laravel" },
    { icon: <Flutter />, tooltip: "Flutter" },
    { icon: <React />, tooltip: "React.js" },
    { icon: <Vue />, tooltip: "Vue.js" },
    { icon: <Tailwind />, tooltip: "Tailwind CSS" },
]

export default function Hero() {
  return (
    <section className="w-full h-[calc(100vh-10rem)] flex flex-col justify-end items-start">
      <div className="p-8">
        <h1 className="text-4xl font-semibold">Chikondi Kamwendo</h1>
        <p className="text-3xl mt-2 text-muted-foreground">
          27 years old - he/him | Malawian
        </p>
      </div>
      <div className="mt-4 border-l-8 border-primary px-4">
        <h1 className="text-8xl font-semibold text-primary">
          Full Stack
          <p className="text-9xl">Developer</p>
        </h1>
      </div>
      <div className="mt-10 flex items-center gap-6 px-8">
        {languagesAndFrameworks.map((language, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>
              <p className="text-4xl text-secondary-foreground/75">{language.icon}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{language.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}
