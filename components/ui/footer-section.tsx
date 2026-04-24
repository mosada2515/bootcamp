"use client";

import React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  CameraIcon,
  FrameIcon,
  GlobeIcon,
  LinkIcon,
  PlayCircleIcon,
} from "lucide-react";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Fellowship",
    links: [
      { title: "Program", href: "#program" },
      { title: "Curriculum", href: "#curriculum" },
      { title: "Pricing", href: "#pricing" },
      { title: "Apply", href: "#apply" },
    ],
  },
  {
    label: "Studio RTF",
    links: [
      { title: "Why Studio RTF", href: "#program" },
      { title: "Opportunity", href: "#opportunity" },
      { title: "Final demo", href: "#curriculum" },
      { title: "FAQ", href: "#faq" },
    ],
  },
  {
    label: "Build Tracks",
    links: [
      { title: "Lead response", href: "#builds" },
      { title: "Booking agents", href: "#builds" },
      { title: "CRM workflows", href: "#builds" },
      { title: "Human handoff", href: "#builds" },
    ],
  },
  {
    label: "Social Links",
    links: [
      { title: "Website", href: "#", icon: GlobeIcon },
      { title: "Instagram", href: "#", icon: CameraIcon },
      { title: "Youtube", href: "#", icon: PlayCircleIcon },
      { title: "LinkedIn", href: "#", icon: LinkIcon },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center rounded-t-3xl border-t border-[#E1E0CC]/12 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(225,224,204,0.08),transparent)] px-6 py-12 lg:py-16">
      <div className="absolute left-1/2 right-1/2 top-0 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E1E0CC]/20 blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <FrameIcon className="size-8 text-[#9FD6C2]" />
          <div>
            <p className="text-sm font-medium text-[#F3F1DF]">
              Studio RTF Agent Builder Fellowship
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#E1E0CC]/58">
              A selective, application-based fellowship for serious builders learning
              to ship AI agents businesses actually pay for.
            </p>
          </div>
          <p className="text-sm text-[#E1E0CC]/48">
            © {new Date().getFullYear()} Studio RTF. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs uppercase text-[#F3F1DF]">{section.label}</h3>
                <ul className="mt-4 space-y-2 text-sm text-[#E1E0CC]/56">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="inline-flex items-center transition-colors duration-300 hover:text-[#F3F1DF]"
                      >
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
