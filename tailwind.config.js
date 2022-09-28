module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#ffffff",
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
    },
    extend: {
      backgroundImage: {
        "home-bg": "url('/backgrounds/home.png')",
        "learn-bg": "url('/backgrounds/learn.png')",
        "learn-bg-small": "url('/backgrounds/learn_mobile.png')",
      },
      colors: {
        "303D87": "#303D87",
        "421FC2": "#421FC2",
      },
      spacing: {
        "learn-more": "202px",
        "learn-more-md": "32px",
        "learn-more-sm": "16px",
      },
      maxWidth: {
        content: "707px",
      },
      minHeight: {
        content: "256px",
      },
      fontSize: {
        xxs: "8px",
      },
    },
  },
  plugins: [],
};
