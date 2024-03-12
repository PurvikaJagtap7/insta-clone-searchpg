/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#fafafa",
          "200": "#171717",
          "300": "#060606",
          "400": "rgba(0, 0, 0, 0.1)",
          "500": "rgba(0, 0, 0, 0.2)",
        },
        darkgray: {
          "100": "#979797",
          "200": "rgba(170, 170, 170, 0.2)",
          "300": "rgba(170, 170, 170, 0.75)",
        },
        black: "#000",
        cornflowerblue: "#3797ef",
        whitesmoke: "#f2ebeb",
      },
      spacing: {},
      fontFamily: {
        "segoe-ui": "'Segoe UI'",
        "sf-pro-text": "'SF Pro Text'",
      },
      borderRadius: {
        "3xs": "10px",
        "81xl": "100px",
        "8xs": "5px",
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "14px",
      mini: "15px",
      "2xs": "11px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
