"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Bot,
  CalendarCheck,
  Check,
  ClipboardCheck,
  Handshake,
  MailCheck,
  MessageSquareText,
  Send,
  ShieldCheck,
} from "lucide-react";
import FAQ from "@/components/ui/accordion-1";
import { BlogPostCard } from "@/components/ui/card-18";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { RoadmapCard } from "@/components/ui/roadmap-card";
import { GlowCard } from "@/components/ui/spotlight-card";
import { StickyFooter } from "@/components/ui/sticky-footer";
import { SplineSceneBasic } from "@/components/ui/demo";

const studioEase = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { y: 22, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: studioEase },
};

const credibility = [
  "Built by Studio RTF - builders of Text Maddie",
  "Real business-agent projects",
  "4 weeks",
  "Portfolio-ready agent systems",
  "Mentor-reviewed builds",
  "Founding cohort",
];

const featuredAudience = {
  tag: "Builder Program",
  date: "APPLICATION-BASED",
  title: "Ambitious builders who want practical AI agent experience",
  description:
    "This fellowship is for students, operators, and technical builders who want to ship real agent projects, build a sharper portfolio, and learn the systems Studio RTF uses in client work.",
  href: "#apply",
  readMoreText: "Apply for the fellowship",
  imageUrl:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
};

const audienceCards = [
  {
    tag: "Technical",
    date: "CS STUDENTS",
    title: "CS students who want real-world AI agent experience",
    description:
      "You know the fundamentals and want to apply them to production-style agent workflows, integrations, and business constraints.",
    href: "#apply",
  },
  {
    tag: "Business",
    date: "OPERATORS",
    title: "Technical business students",
    description:
      "You understand markets and workflows, and want the build fluency to prototype agents that solve real operational problems.",
    href: "#apply",
  },
  {
    tag: "Automation",
    date: "NO-CODE BUILDERS",
    title: "No-code and automation builders",
    description:
      "You move quickly with tools, APIs, and systems, and want stronger patterns for reliable AI-driven business workflows.",
    href: "#apply",
  },
  {
    tag: "Product",
    date: "DESIGNERS",
    title: "Designers and product thinkers who can ship",
    description:
      "You bring taste, UX instincts, and product judgment, then prove it by shipping working agent experiences every week.",
    href: "#apply",
  },
];

const buildFeatures = [
  {
    icon: MessageSquareText,
    title: "Lead response agent",
    description:
      "Qualify inbound inquiries, answer first questions, and route serious prospects while response speed still matters.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment booking agent",
    description:
      "Turn conversations into scheduled meetings with clean availability logic, confirmations, and follow-up context.",
  },
  {
    icon: MailCheck,
    title: "Follow-up and nurture agent",
    description:
      "Design persistent, useful follow-up flows that keep leads warm without sounding robotic or careless.",
  },
  {
    icon: Blocks,
    title: "CRM update workflow",
    description:
      "Move conversation outcomes into structured systems so businesses can trust the data behind the agent.",
  },
  {
    icon: Handshake,
    title: "Human handoff system",
    description:
      "Build escalation paths that know when a person should take over, with enough context to act fast.",
  },
  {
    icon: Bot,
    title: "Final vertical-specific capstone",
    description:
      "Ship a focused business agent for one vertical and demo the strategy behind every workflow decision.",
  },
];

const roadmapItems = [
  {
    quarter: "Week 1",
    title: "Agent fundamentals",
    description:
      "LLMs, tools, memory, workflows, prompting as system design, and a working lead qualification agent.",
    status: "done" as const,
  },
  {
    quarter: "Week 2",
    title: "Business agents",
    description:
      "Inbound lead response, appointment booking, conversation design, and Text Maddie-style workflows.",
    status: "in-progress" as const,
  },
  {
    quarter: "Week 3",
    title: "Production workflows",
    description:
      "APIs, webhooks, Gmail, Calendar, CRM, SMS-style integrations, logging, and escalation.",
    status: "upcoming" as const,
  },
  {
    quarter: "Week 4",
    title: "Capstone and selection",
    description:
      "Build a final business agent, demo it live, and get reviewed on execution, communication, reliability, and product judgment.",
    status: "upcoming" as const,
  },
];

const pricingIncludes = [
  "4-week live cohort",
  "Weekly build assignments",
  "Mentor project reviews",
  "Final demo day",
  "Access to Studio RTF-style agent frameworks and examples",
  "A portfolio of practical AI agent projects",
  "Optional consideration for paid Studio RTF projects for standout work",
];

const criteria = [
  "Technical ability",
  "Speed of execution",
  "Communication",
  "Reliability",
  "Product judgment",
  "Client-readiness",
  "Project quality",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E1E0CC]/14 bg-[#E1E0CC]/5 px-3 py-1.5 text-xs uppercase text-[#E1E0CC]/68">
      <span className="h-1.5 w-1.5 rounded-full bg-[#9FD6C2]" />
      {children}
    </div>
  );
}

function SectionHeader({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy?: string;
}) {
  return (
    <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-4xl font-medium leading-[0.98] text-[#F3F1DF] sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-7 text-[#E1E0CC]/68 sm:text-lg">{copy}</p>
      ) : null}
    </motion.div>
  );
}

function Field({
  label,
  name,
  textarea = false,
}: {
  label: string;
  name: string;
  textarea?: boolean;
}) {
  const className =
    "mt-2 w-full rounded-2xl border border-[#E1E0CC]/14 bg-black/35 px-4 py-3 text-sm text-[#F3F1DF] outline-none transition-colors placeholder:text-[#E1E0CC]/35 focus:border-[#9FD6C2]/70";

  return (
    <label className="block text-sm text-[#E1E0CC]/78">
      {label}
      {textarea ? (
        <textarea name={name} required rows={4} className={className} />
      ) : (
        <input name={name} required className={className} />
      )}
    </label>
  );
}

export default function Home() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus("submitting");
    setSubmitMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(
          result?.error ?? "Something went wrong while sending your application."
        );
      }

      setSubmitStatus("success");
      setSubmitMessage(
        "Application received. We'll review your application and follow up with next steps."
      );
      form.reset();
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your application."
      );
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-[#E1E0CC]">
      <PrismaHero />

      <section className="overflow-hidden border-y border-[#E1E0CC]/10 bg-[#0A0A09] py-4">
        <div className="flex w-max animate-marquee items-center gap-10">
          {[...credibility, ...credibility, ...credibility, ...credibility].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-2 text-xs uppercase text-[#E1E0CC]/58"
            >
              <BadgeCheck className="h-4 w-4 text-[#9FD6C2]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="program" className="px-4 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div {...fadeUp}>
            <SectionLabel>Program</SectionLabel>
            <h2 className="max-w-2xl text-4xl font-medium leading-none text-[#F3F1DF] sm:text-5xl md:text-6xl">
              A hands-on builder program for real business agents.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-[#E1E0CC]/72 sm:text-xl">
              This is a selective 4-week AI Agent Builder Fellowship where builders
              ship production-style AI agents for real business workflows: inbound
              lead response, booking, follow-up, CRM updates, and human handoff.
              You will be learning the stacks that provide real value to businesses, 
              with the same frameworks and patterns used in Studio RTF projects.
              Every week, you build something portfolio-worthy.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                ["4", "weeks"],
                ["6+", "agent builds"],
                ["1", "final demo"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="bg-transparent pb-4 shadow-none"
                >
                  <div className="text-3xl font-medium text-[#F3F1DF]">{value}</div>
                  <div className="mt-1 border-b border-[#E1E0CC]/30 pb-3 text-xs uppercase text-[#E1E0CC]/50">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="who" className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Who It Is For"
            title="For ambitious builders who want practical AI agent reps."
          />
          <div className="mt-12 space-y-6">
            <motion.div {...fadeUp}>
              <BlogPostCard
                variant="featured"
                className="min-h-[420px] rounded-3xl border-[#E1E0CC]/12 bg-[#E1E0CC]/[0.045]"
                {...featuredAudience}
              />
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {audienceCards.map((post, index) => (
                <motion.div
                  key={post.title}
                  {...fadeUp}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.05,
                    ease: studioEase,
                  }}
                >
                  <BlogPostCard
                    {...post}
                    className="h-full min-h-[310px] rounded-2xl border-[#E1E0CC]/12 bg-[#E1E0CC]/[0.04]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="builds" className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="What You Build"
            title="Build AI agents businesses actually pay for."
            copy="The fellowship is centered on business workflows companies already need: fast response, clean handoffs, reliable updates, automated follow-up, and agents that know when to escalate."
          />
          <motion.div {...fadeUp} className="mt-12">
            <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-[#E1E0CC]/[0.035] sm:grid-cols-2 md:grid-cols-3">
              {buildFeatures.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp}>
            <SplineSceneBasic />
          </motion.div>
        </div>
      </section>

      <section id="curriculum" className="px-4 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Curriculum"
            title="Four weeks from fundamentals to portfolio-ready systems."
          />
          <motion.div {...fadeUp} className="mt-14 flex justify-center">
            <RoadmapCard
              title="Fellowship Roadmap"
              description="The four-week sequence from agent fundamentals to a final business-agent capstone."
              items={roadmapItems}
            />
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div {...fadeUp}>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-4xl font-medium leading-none text-[#F3F1DF] sm:text-5xl md:text-6xl">
              Founding cohort access.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#E1E0CC]/68">
              A small, high-touch cohort for serious builders who want mentorship,
              fast reps, and a portfolio of real AI agent systems for business use cases.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <GlowCard
              customSize
              glowColor="green"
              className="rounded-3xl bg-[#E1E0CC]/[0.055] p-6 shadow-2xl shadow-black/40 sm:p-8"
            >
              <div className="relative z-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-sm uppercase text-[#E1E0CC]/52">
                      Founding cohort price
                    </div>
                    <div className="mt-2 flex flex-wrap items-end gap-4">
                      <span className="text-6xl font-medium text-[#F3F1DF]">$750</span>
                      <span className="pb-2 text-2xl text-[#E1E0CC]/38 line-through">
                        $1500
                      </span>
                    </div>
                  </div>
                  <a
                    href="#apply"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E1E0CC] px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                  >
                    Apply now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {pricingIncludes.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-[#E1E0CC]/72">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#9FD6C2]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 rounded-2xl bg-black/28 p-4 text-sm text-[#E1E0CC]/58">
                  Future cohorts may be priced higher after the founding cohort.
                </p>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      <section id="apply" className="px-4 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div {...fadeUp}>
            <SectionLabel>Apply</SectionLabel>
            <h2 className="text-4xl font-medium leading-none text-[#F3F1DF] sm:text-5xl md:text-6xl">
              Apply for the founding cohort.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#E1E0CC]/68">
              We are looking for builders with taste, urgency, and the ability to
              learn in public. The application is intentionally direct.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-[#E1E0CC]/60">
              <ShieldCheck className="h-5 w-5 text-[#9FD6C2]" />
              Application-based. Small cohort. Serious feedback.
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <GlowCard
              customSize
              glowColor="green"
              className="rounded-3xl bg-[#E1E0CC]/[0.045] p-5 sm:p-7"
            >
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="fullName" />
                  <Field label="Email" name="email" />
                  <Field label="School/company" name="schoolCompany" />
                  <Field label="Technical background" name="technicalBackground" />
                  <div className="sm:col-span-2">
                    <Field label="What have you built before?" name="builtBefore" textarea />
                  </div>
                  <div className="sm:col-span-2">
                    <Field label="Why do you want to join?" name="whyJoin" textarea />
                  </div>
                  <label className="block text-sm text-[#E1E0CC]/78 sm:col-span-2">
                    Optional: would you like to be considered for future paid Studio RTF projects if your work stands out?
                    <select
                      name="futureWork"
                      className="mt-2 w-full rounded-2xl border border-[#E1E0CC]/14 bg-black/35 px-4 py-3 text-sm text-[#F3F1DF] outline-none transition-colors focus:border-[#9FD6C2]/70"
                    >
                      <option value="">No answer</option>
                      <option>Yes</option>
                      <option>Maybe</option>
                      <option>No</option>
                    </select>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === "submitting"}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E1E0CC] px-5 py-4 text-sm font-medium text-black transition-transform hover:scale-[1.01] sm:w-auto"
                >
                  {submitStatus === "submitting" ? "Sending..." : "Apply now"}
                  <Send className="h-4 w-4" />
                </button>

                {submitMessage ? (
                  <div
                    className={`mt-5 rounded-2xl p-4 text-sm leading-6 ${
                      submitStatus === "error"
                        ? "bg-[#B05B5B]/12 text-[#F6D6D6]"
                        : "bg-[#9FD6C2]/10 text-[#DFF7EC]"
                    }`}
                  >
                    {submitMessage}
                  </div>
                ) : null}
              </form>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      <section id="opportunity" className="px-4 py-24">
        <GlowCard
          customSize
          glowColor="green"
          className="mx-auto max-w-7xl rounded-3xl bg-[#E1E0CC]/[0.045] p-6 sm:p-8 lg:p-10"
        >
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <motion.div {...fadeUp}>
              <SectionLabel>Opportunity</SectionLabel>
              <h2 className="text-4xl font-medium leading-none text-[#F3F1DF] sm:text-5xl">
                Build well first. Opportunities are a bonus.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#E1E0CC]/68">
                Studio RTF builds real AI agents for businesses, and this fellowship
                teaches the systems behind that work. We also use it to notice strong
                builders. Top performers may be invited to paid Studio RTF projects
                when there is a fit. This is not a job placement program or employment
                promise.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="grid gap-3 sm:grid-cols-2">
              {criteria.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-black/24 p-4 text-sm text-[#E1E0CC]/74"
                >
                  <ClipboardCheck className="h-4 w-4 text-[#9FD6C2]" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </GlowCard>
      </section>

      <section id="faq" className="px-4 py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-7xl">
          <SectionHeader label="FAQ" title="For serious applicants." />
          <div className="mx-auto mt-12 max-w-5xl">
            <FAQ />
          </div>
        </motion.div>
      </section>

      <StickyFooter />
    </main>
  );
}
