/** @type {import('tailwindcss').Config} */
tailwind.config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blueblue-light-3": "var(--blueblue-light-3)",
        "blueblue-light-5": "var(--blueblue-light-5)",
        darkdark: "var(--darkdark)",
        "darkdark-4": "var(--darkdark-4)",
        "darkdark-5": "var(--darkdark-5)",
        "darkdark-6": "var(--darkdark-6)",
        "graygray-2": "var(--graygray-2)",
        "graygray-3": "var(--graygray-3)",
        "graygray-4": "var(--graygray-4)",
        greengreen: "var(--greengreen)",
        "greengreen-light-3": "var(--greengreen-light-3)",
        "neutral-200": "var(--neutral-200)",
        "neutral-900": "var(--neutral-900)",
        "primary-color": "var(--primary-color)",
        "primary-text-color": "var(--primary-text-color)",
        redred: "var(--redred)",
        "redred-light-3": "var(--redred-light-3)",
        "secondary-color": "var(--secondary-color)",
        stroke: "var(--stroke)",
        "tailgrids-primary-color": "var(--tailgrids-primary-color)",
        whitewhite: "var(--whitewhite)",
      },
      fontFamily: {
        "body-extra-small-medium": "var(--body-extra-small-medium-font-family)",
        "body-extra-small-regular": "var(--body-extra-small-regular-font-family)",
        "body-large-medium": "var(--body-large-medium-font-family)",
        "body-large-semibold": "var(--body-large-semibold-font-family)",
        "body-medium-medium": "var(--body-medium-medium-font-family)",
        "body-medium-regular": "var(--body-medium-regular-font-family)",
        "body-small-medium": "var(--body-small-medium-font-family)",
        "body-small-regular": "var(--body-small-regular-font-family)",
        "heading-5": "var(--heading-5-font-family)",
        "heading-6": "var(--heading-6-font-family)",
      },
      boxShadow: {
        "shadow-1": "var(--shadow-1)",
      },
    },
  },
  plugins: [],
};
