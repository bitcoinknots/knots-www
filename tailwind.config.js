/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "478px",
        md: "850px",
        lg: "1020px",
        xl: "1140px",
        "2xl": "1440px",
        "3xl": "2560px",
      },
      fontFamily: {
        martelSansBold: ["MartelSansBold"],
        manjariBold: ["ManjariBold"],
        manjariRegular: ["ManjariRegular"],
      },
      fontSize: {
        sm: ["24px", { lineHeight: "33.6px", letterSpacing: "0.02em" }],
        lg: ["32px", { lineHeight: "44.8px", letterSpacing: "0.02em" }],
        xl: ["36px", { lineHeight: "50.4px", letterSpacing: "0.02em" }],
        "2xl": ["48px", { lineHeight: "67.2px" }],
        "3xl": ["64px", { lineHeight: "89.6px" }],
      },
      borderRadius: {
        sm: "20px",
        md: "36px",
        lg: "46px",
      },
      boxShadow: {
        shadowCustom: "0px 1px 6px 0px #0000001A",
      },
      colors: {
        gray: "#8b8b8b",
        sharpBlack: "#1b1b1b",
        carribeanBlue: "#14bfFF",
        slateGray: "#c0c8cb",
        electricBlue: "#0156ff",
        sunglow: "#bfe623",
        aquamarine: "#74E6A8",
        silverSand: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
