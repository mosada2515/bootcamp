"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import {
  CameraIcon,
  FrameIcon,
  GlobeIcon,
  LinkIcon,
  PlayCircleIcon,
} from "lucide-react";
import { Button } from "./button";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterLinkGroup {
  label: string;
  links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<"footer">;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  return (
    <footer
      className={cn("relative h-[720px] w-full", className)}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      {...props}
    >
      <div className="fixed bottom-0 h-[720px] w-full">
        <div className="sticky top-[calc(100vh-720px)] h-full overflow-y-auto">
          <div className="relative flex size-full flex-col justify-between gap-5 border-t border-[#E1E0CC]/12 bg-[#050505] px-4 py-8 md:px-12">
            <div aria-hidden className="absolute inset-0 isolate z-0 overflow-hidden">
              <div className="absolute left-0 top-0 h-[80rem] w-[35rem] -translate-y-[22rem] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(225,224,204,0.06)_0,rgba(140,140,140,0.02)_50%,rgba(225,224,204,0.01)_80%)]" />
              <div className="absolute left-0 top-0 h-[80rem] w-[15rem] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(159,214,194,0.055)_0,rgba(225,224,204,0.01)_80%,transparent_100%)] [translate:5%_-50%]" />
              <div className="absolute left-0 top-0 h-[80rem] w-[15rem] -translate-y-[22rem] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(225,224,204,0.04)_0,rgba(225,224,204,0.01)_80%,transparent_100%)]" />
            </div>

            <div className="relative z-10 mt-10 flex flex-col gap-8 md:flex-row xl:mt-0">
              <AnimatedContainer className="w-full min-w-64 max-w-sm space-y-4">
                <FrameIcon className="size-8 text-[#9FD6C2]" />
                <p className="mt-8 text-sm leading-6 text-[#E1E0CC]/62 md:mt-0">
                  Studio RTF builds AI agents for real business workflows. The
                  Fellowship turns those patterns into a hands-on builder
                  program for people who want practical projects, sharper systems
                  thinking, and a portfolio they can explain.
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.title}
                      asChild
                      size="icon"
                      variant="outline"
                      className="size-8 border-[#E1E0CC]/16 bg-black/20 text-[#E1E0CC]/70 hover:bg-[#E1E0CC]/10 hover:text-[#F3F1DF]"
                    >
                      <a href={link.href} aria-label={link.title}>
                        <link.icon className="size-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </AnimatedContainer>

              {footerLinkGroups.map((group, index) => (
                <AnimatedContainer
                  key={group.label}
                  delay={0.1 + index * 0.1}
                  className="w-full"
                >
                  <div className="mb-10 md:mb-0">
                    <h3 className="text-sm uppercase text-[#F3F1DF]">{group.label}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-[#E1E0CC]/58 md:text-xs lg:text-sm">
                      {group.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="inline-flex items-center transition-all duration-300 hover:text-[#F3F1DF]"
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

            <div className="relative z-10 flex flex-col items-center justify-between gap-2 border-t border-[#E1E0CC]/12 pt-2 text-sm text-[#E1E0CC]/52 md:flex-row">
              <p>© {new Date().getFullYear()} Studio RTF. All rights reserved.</p>
              <p>Agent Builder Fellowship</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  { title: "Website", href: "#", icon: GlobeIcon },
  { title: "Instagram", href: "#", icon: CameraIcon },
  { title: "YouTube", href: "#", icon: PlayCircleIcon },
  { title: "LinkedIn", href: "#", icon: LinkIcon },
];

const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: "Fellowship",
    links: [
      { title: "Program", href: "#program" },
      { title: "Who It Is For", href: "#who" },
      { title: "What You Build", href: "#builds" },
      { title: "Curriculum", href: "#curriculum" },
      { title: "Pricing", href: "#pricing" },
      { title: "Apply", href: "#apply" },
    ],
  },
  {
    label: "Build Tracks",
    links: [
      { title: "Lead Response Agent", href: "#builds" },
      { title: "Appointment Booking", href: "#builds" },
      { title: "Follow-Up Agent", href: "#builds" },
      { title: "CRM Workflow", href: "#builds" },
      { title: "Human Handoff", href: "#builds" },
      { title: "Final Capstone", href: "#curriculum" },
    ],
  },
  {
    label: "Selection",
    links: [
      { title: "Application-Based", href: "#apply" },
      { title: "Project Reviews", href: "#curriculum" },
      { title: "Final Demo Day", href: "#curriculum" },
      { title: "Evaluation Criteria", href: "#opportunity" },
      { title: "Optional Project Invitations", href: "#opportunity" },
      { title: "FAQ", href: "#faq" },
    ],
  },
  {
    label: "Studio RTF",
    links: [
      { title: "Hands-On Builder Program", href: "#program" },
      { title: "Real Business Workflows", href: "#builds" },
      { title: "Studio Frameworks", href: "#pricing" },
      { title: "Opportunity", href: "#opportunity" },
      { title: "Founding Cohort", href: "#apply" },
    ],
  },
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({ delay = 0.1, children, ...props }: AnimatedContainerProps) {
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
      {...props}
    >
      {children}
    </motion.div>
  );
}
