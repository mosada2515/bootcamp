"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status?: "done" | "in-progress" | "upcoming";
}

export interface RoadmapCardProps {
  title?: string;
  description?: string;
  items: RoadmapItem[];
}

export function RoadmapCard({
  title = "Fellowship Roadmap",
  description = "Four weeks of practical agent builds, reviews, and a final capstone.",
  items,
}: RoadmapCardProps) {
  return (
    <Card className="w-full border-[#E1E0CC]/12 bg-[#E1E0CC]/[0.04] shadow-xl shadow-black/30 transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-[#F3F1DF]">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative overflow-x-auto pb-2">
          <div className="absolute left-0 right-0 top-4 h-px bg-border" />

          <div className="flex min-w-[780px] justify-between">
            {items.map((item, index) => (
              <motion.div
                key={item.quarter}
                className="relative w-1/4 px-3 pt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-1/2 top-2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full ${
                    item.status === "done" || item.status === "in-progress"
                      ? "bg-primary"
                      : "bg-muted"
                  }`}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-background" />
                </motion.div>

                <Badge
                  variant={
                    item.status === "done" || item.status === "in-progress"
                      ? "default"
                      : "outline"
                  }
                  className="mb-2 text-[11px]"
                >
                  {item.quarter}
                </Badge>

                <h4 className="text-sm font-medium text-[#F3F1DF]">{item.title}</h4>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
