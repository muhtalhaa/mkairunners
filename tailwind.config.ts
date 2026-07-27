import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#201F1F",
          card: "#201F1F",
          tertiary: "#2A2929",
          toscaTint: "#FE33031A",
        },
        tosca: {
          DEFAULT: "#FE3303",
          light: "#FF5528",
          dark: "#FE3303",
          muted: "#FE330333",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#E8E8E8",
          muted: "#A3A3A3",
          disabled: "#6B6B6B",
          onTosca: "#FFFFFF",
        },
        semantic: {
          danger: "#E05252",
          warning: "#E5A100",
          success: "#3DCF8A",
          info: "#3B82F6",
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        pixelBody: ['"VT323"', "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "pixel-sm": "2px 2px 0 #C42802",
        "pixel-md": "4px 4px 0 #C42802",
        "pixel-lg": "6px 6px 0 #C42802",
        "pixel-glow": "0 0 12px #FE330350",
        card: "4px 4px 0 #FE330333",
      },
      borderRadius: {
        pixel: "2px",
      },
      keyframes: {
        "period-pulse": {
          "0%, 100%": {
            backgroundColor: "rgba(229, 161, 0, 0.16)",
            borderColor: "#E5A100",
            color: "#FCD34D",
          },
          "50%": {
            backgroundColor: "rgba(229, 161, 0, 0.32)",
            borderColor: "#FBBF24",
            color: "#FDE68A",
          },
        },
      },
      animation: {
        "period-pulse": "period-pulse 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
