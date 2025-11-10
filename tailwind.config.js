/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        versebox: {
          primary: "#4F46E5",
          secondary: "#8B5CF6",
          accent: "#F472B6",
          surface: "#F9FAFB",
          text: "#1F2937",
          "text-secondary": "#6B7280",
        },
        // Dark mode colors
        "versebox-dark": {
          primary: "#6366F1",
          secondary: "#A78BFA",
          accent: "#FB7185",
          surface: "#1E293B",
          bg: "#0F172A",
          text: "#F1F5F9",
          "text-secondary": "#94A3B8",
        },
      },
      backgroundImage: {
        "versebox-gradient":
          "linear-gradient(135deg, #4F46E5 0%, #8B5CF6 100%)",
        "versebox-gradient-dark":
          "linear-gradient(135deg, #6366F1 0%, #A78BFA 100%)",
        "versebox-accent": "linear-gradient(135deg, #8B5CF6 0%, #F472B6 100%)",
        "versebox-hero":
          "linear-gradient(135deg, #4F46E5 0%, #8B5CF6 50%, #F472B6 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
