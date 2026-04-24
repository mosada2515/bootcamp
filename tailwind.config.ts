import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#F3F1DF",
        ink: "#050505",
        cream: "#E1E0CC",
        card: "#0B0B0A",
        "card-foreground": "#F3F1DF",
        primary: "#9FD6C2",
        "primary-foreground": "#050505",
        secondary: "rgba(225, 224, 204, 0.1)",
        "secondary-foreground": "#F3F1DF",
        muted: "rgba(225, 224, 204, 0.08)",
        "muted-foreground": "rgba(225, 224, 204, 0.62)",
        accent: "rgba(159, 214, 194, 0.12)",
        "accent-foreground": "#F3F1DF",
        destructive: "#B05B5B",
        "destructive-foreground": "#FDF7EF",
        border: "rgba(225, 224, 204, 0.14)",
        input: "rgba(225, 224, 204, 0.16)",
        ring: "#9FD6C2",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease 0.35s 1 forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
