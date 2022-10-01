/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#4c7972",
        primary2: "#263D39",
        secondary: "#915a3c",
        tertiary: "#cfb79f",
        text: "#e8e6e7",
      },

      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Archivo Black", "sans-serif"],
      },

      backgroundImage: (theme) => ({
        "slide-one": "url('../images/bg-12.jpg')",
        "slide-two": "url('../images/bg-2.jpg')",
        "slide-three": "url('../images/bg-3.jpg')",
        "slide-four": "url('../images/bg-4.jpg')",
        "slide-v1": "url('../images/bg-v1.jpg')",
        "slide-v2": "url('../images/bg-v2.jpg')",
        "slide-v3": "url('../images/bg-v3.jpg')",
        "slide-v4": "url('../images/bg-v4.jpg')",
        testimonial: "url('../images/bg-2.jpg')",
      }),
    },
  },
  plugins: [],
};
