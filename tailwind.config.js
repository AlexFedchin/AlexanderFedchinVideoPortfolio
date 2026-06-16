/**
 * Tailwind theme = the project's design language.
 *
 * Direction: modern, minimal, near black-and-white. Bold sans-serif typography
 * (Inter Tight for display, Inter for text). The only colour is a faint
 * blue/cyan "frost" used exclusively in glows — never as fills or text.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Rich blacks — pushed close to true black, faintly cool.
        ink: {
          950: "#060607",
          900: "#0a0a0b",
          850: "#0e0e10",
          800: "#131316",
          700: "#1b1b1f",
          600: "#26262b",
          500: "#34343a",
        },
        // Neutral greyscale text (no warmth).
        bone: {
          DEFAULT: "#ECECEC",
          muted: "#9C9CA3",
          dim: "#5C5C63",
        },
        // Frost = the slightest light-blue/cyan tint, for glows only.
        frost: {
          DEFAULT: "#A9DCEC",
          soft: "#CFEDF6",
          deep: "#6FB8D4",
        },
      },
      fontFamily: {
        display: [
          '"Inter Tight"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tight2: "-0.02em",
        cinematic: "0.24em",
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 24px 70px -28px rgba(0,0,0,0.8)",
        glow: "0 0 90px -20px rgba(150,210,235,0.40)",
        "glow-soft": "0 0 60px -22px rgba(150,210,235,0.26)",
        lift: "0 40px 90px -34px rgba(0,0,0,0.92)",
      },
      backdropBlur: {
        xs: "2px",
        "2xl": "28px",
        "3xl": "44px",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-soft": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(26px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "glow-pulse": {
          "0%,100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
        kenburns: {
          "0%": { transform: "scale(1.04)" },
          "100%": { transform: "scale(1.16)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "page-in": {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.995)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 1s ease both",
        "scale-in": "scale-in 0.6s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 7s ease-in-out infinite",
        kenburns: "kenburns 22s ease-out forwards",
        "slide-down": "slide-down 0.45s cubic-bezier(0.16,1,0.3,1) both",
        "page-in": "page-in 0.6s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 34s linear infinite",
      },
      backgroundImage: {
        // Frost-tinted radial glow.
        "radial-frost":
          "radial-gradient(closest-side, rgba(150,210,235,0.20), transparent)",
        "ink-fade":
          "linear-gradient(180deg, rgba(6,6,7,0) 0%, rgba(6,6,7,0.55) 55%, #060607 100%)",
        "ink-fade-up":
          "linear-gradient(0deg, rgba(6,6,7,0) 0%, rgba(6,6,7,0.65) 60%, #060607 100%)",
      },
    },
  },
  plugins: [],
};
