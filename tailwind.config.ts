import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06101f",
        midnight: "#081225",
        panel: "rgba(12, 24, 46, 0.64)",
        cyanGlow: "#56d9ff",
        violetGlow: "#a78bfa"
      },
      boxShadow: {
        glow: "0 0 36px rgba(86, 217, 255, 0.24)",
        violet: "0 0 42px rgba(167, 139, 250, 0.22)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(86, 217, 255, 0.18), transparent 28rem), radial-gradient(circle at 80% 10%, rgba(167, 139, 250, 0.16), transparent 24rem)"
      }
    }
  },
  plugins: []
};

export default config;
