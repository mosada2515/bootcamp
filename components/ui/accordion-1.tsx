import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type SectionProps = { children: React.ReactNode; className?: string; id?: string };
type ContainerProps = { children: React.ReactNode; className?: string; id?: string };

const Section = ({ children, className, id }: SectionProps) => (
  <section className={cn("py-8 md:py-12", className)} id={id}>
    {children}
  </section>
);

const Container = ({ children, className, id }: ContainerProps) => (
  <div className={cn("mx-auto max-w-5xl p-6 sm:p-8", className)} id={id}>
    {children}
  </div>
);

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "Is paid Studio RTF work guaranteed?",
    answer:
      "No. This is a paid, hands-on AI Agent Builder Fellowship. Top performers may be invited to paid Studio RTF projects, but there is no guaranteed job, contract, or employment outcome.",
  },
  {
    question: "Do I need to be an expert coder?",
    answer:
      "No, but you should be technical or semi-technical, fast-learning, and willing to ship real agent projects every week.",
  },
  {
    question: "Is this beginner-friendly?",
    answer:
      "It is not for total beginners. It is for ambitious builders who can learn quickly, work through ambiguity, and produce working systems.",
  },
  {
    question: "What will I leave with?",
    answer:
      "Multiple AI agent projects, a final portfolio capstone, and a practical understanding of how to build agent workflows businesses actually pay for.",
  },
  {
    question: "Why is it paid?",
    answer:
      "Because it is high-touch, live, project-based, and built around mentorship, feedback, accountability, and real implementation reps.",
  },
  {
    question: "How many people are accepted?",
    answer:
      "The founding cohort is intentionally small so builders can get meaningful feedback and Studio RTF can keep the work practical.",
    link: "#apply",
  },
];

export default function FAQ() {
  return (
    <Section className="py-0">
      <Container className="max-w-4xl p-0">
        <div className="not-prose">
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {content.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="px-1"
              >
                <AccordionTrigger className="text-base text-[#F3F1DF] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-[#E1E0CC]/64 md:w-4/5">
                  <p>{item.answer}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-3 inline-flex items-center text-sm text-[#9FD6C2]/75 transition-opacity hover:text-[#9FD6C2]"
                    >
                      Apply to the fellowship <ArrowUpRight className="ml-1" size={16} />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
