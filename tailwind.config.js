export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#f5f7fb",
          surface: "rgba(255, 255, 255, 0.8)",
          foreground: "#0f172a",
          subtle: "#64748b",
          accent: "#6366f1",
        },
        dark: {
          background: "#0b1220",
          surface: "rgba(13, 19, 34, 0.75)",
          foreground: "#f8fafc",
          subtle: "#94a3b8",
          accent: "#8b5cf6",
        },
      },
      boxShadow: {
        glass: "0 20px 45px rgba(15, 23, 42, 0.15)",
      },
      backdropBlur: {
        glass: "20px",
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-glow":
          "radial-gradient(circle at top left, rgba(99, 102, 241, 0.25), transparent 45%), radial-gradient(circle at top right, rgba(236, 72, 153, 0.25), transparent 40%), radial-gradient(circle at bottom, rgba(56, 189, 248, 0.2), transparent 45%)",
      },
    },
  },
  plugins: [],
};
