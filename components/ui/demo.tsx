"use client";

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  return (
    <div className="relative h-[620px] w-full overflow-hidden rounded-3xl bg-transparent p-0">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_70%_52%,transparent_0%,transparent_38%,#050505_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-24 bg-gradient-to-b from-transparent to-[#050505]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-24 bg-gradient-to-r from-[#050505] to-transparent" />

      <div className="relative z-10 grid h-full lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative z-10 flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="mb-4 inline-flex w-fit rounded-full border border-[#E1E0CC]/14 bg-[#E1E0CC]/5 px-3 py-1.5 text-xs uppercase text-[#E1E0CC]/60">
            Agent lab preview
          </div>
          <h1 className="max-w-xl bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold leading-none text-transparent md:text-5xl">
            Learn to make agent work feel tangible.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-300 sm:text-base">
            The fellowship is not only about wiring automations together. It is about
            turning invisible workflows into usable agent interfaces, demos, and
            systems businesses can understand quickly.
          </p>
        </div>

        <div className="relative min-h-[300px] opacity-85 mix-blend-screen">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
