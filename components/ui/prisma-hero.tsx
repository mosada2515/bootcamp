"use client";

import { motion, useInView } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useRef } from "react";
import type { CSSProperties } from "react";

const studioEase = [0.16, 1, 0.3, 1] as const;

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
  style,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={word + i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: studioEase,
            }}
            className="relative inline-block"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute -right-[0.3em] top-[0.65em] text-[0.31em]">
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: CSSProperties;
}

export const WordsPullUpMultiStyle = ({
  segments,
  className = "",
  style,
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
      style={style}
    >
      {words.map((w, i) => (
        <motion.span
          key={w.word + i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
            ease: studioEase,
          }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

const navItems = ["Program", "Curriculum", "Pricing", "Apply"];

const PrismaHero = () => {
  return (
    <section className="min-h-screen w-full bg-black p-2">
      <div className="relative min-h-[calc(100vh-1rem)] w-full overflow-hidden rounded-2xl bg-[#050505] md:rounded-[2rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.42),rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.86))]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),transparent_48%,rgba(0,0,0,0.34))]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,#050505)]" />

        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-b-2xl border-x border-b border-[#E1E0CC]/10 bg-black/88 px-4 py-2 backdrop-blur-xl sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] uppercase tracking-[0.18em] text-[#E1E0CC]/70 transition-colors hover:text-[#E1E0CC] sm:text-xs"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <div className="absolute inset-x-0 bottom-0 px-4 pb-6 sm:px-6 md:px-10 md:pb-8">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: studioEase }}
            className="mb-6 inline-flex rounded-full border border-[#E1E0CC]/20 bg-black/45 px-4 py-2 text-xs text-[#E1E0CC]/80 backdrop-blur-md"
          >
            4-week AI Agent Builder Fellowship · Application-based · Founding cohort
          </motion.div>

          <div className="grid grid-cols-12 items-end gap-5">
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="text-7xl font-medium leading-[0.84] text-[#E1E0CC] sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem]"
                style={{ letterSpacing: 0 }}
              >
                <WordsPullUp text="AI Agent Builder" showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-5 pb-1 lg:col-span-4 lg:pb-10">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: studioEase }}
                className="max-w-xl text-sm text-[#E1E0CC]/78 sm:text-base md:text-lg"
                style={{ lineHeight: 1.25 }}
              >
                Learn to build the AI texting agents behind Text Maddie.
                In 4 weeks, you’ll ship real business agents for inbound lead response, appointment booking, follow-up, 
                CRM updates, and human handoff — the same workflows companies pay agencies to automate.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: studioEase }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#apply"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E1E0CC] py-1 pl-5 pr-1 text-sm font-medium text-black transition-all hover:gap-3 sm:justify-start sm:text-base"
                >
                  Apply for the founding cohort
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4 text-[#E1E0CC]" />
                  </span>
                </a>
                <a
                  href="#curriculum"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#E1E0CC]/25 bg-black/35 px-5 py-3 text-sm font-medium text-[#E1E0CC] backdrop-blur-md transition-colors hover:border-[#E1E0CC]/55 sm:text-base"
                >
                  View curriculum
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
