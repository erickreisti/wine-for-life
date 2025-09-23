/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef2f4",
          100: "#fbe0e5",
          200: "#f5c2ce",
          300: "#ee9fb9",
          400: "#e67a9f",
          500: "#c496a5",
          600: "#a15050",
          700: "#601313",
          800: "#2b1922",
          900: "#1a0f14",
        },
        accent: {
          500: "#f5a818",
        },
      },
      fontFamily: {
        title: ["Cormorant Garamond", "serif"],
        body: ["Raleway", "sans-serif"],
      },
      fontSize: {
        xs: ["0.8rem", { lineHeight: "1.2" }],
        sm: ["1rem", { lineHeight: "1.4" }],
        base: ["1.25rem", { lineHeight: "1.6" }],
        lg: ["1.56rem", { lineHeight: "1.4" }],
        xl: ["1.95rem", { lineHeight: "1.3" }],
        "2xl": ["2.44rem", { lineHeight: "1.2" }],
        "3xl": ["3.05rem", { lineHeight: "1.1" }],
        "4xl": ["3.81rem", { lineHeight: "1" }],
        "5xl": ["4.77rem", { lineHeight: "1" }],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
