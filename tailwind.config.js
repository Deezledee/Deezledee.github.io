const theme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  safelist: ["pagination", "page-item"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        darkest: theme(`colors.slate.900`),
        darker: theme(`colors.slate.800`),
        dark: theme(`colors.slate.700`),
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "code::before": false,
            "code::after": false,
            color: "#e5e7eb",
            a: {
              color: theme(`colors.yellow.300`),
              textDecoration: "none",
              "&:hover": {
                color: theme(`colors.yellow.500`),
                textDecoration: "underline",
              },
            },
            pre: {
              backgroundColor: theme(`colors.slate.800`),
              color: "#e5e7eb",
            },
            code: { color: "#e5e7eb" },
            h1: { color: "#f1f5f9" },
            h2: { color: "#f1f5f9" },
            h3: { color: "#f1f5f9" },
            h4: { color: "#f1f5f9" },
            h5: { color: "#f1f5f9" },
            h6: { color: "#f1f5f9" },
            strong: { color: "#f1f5f9" },
            td: { color: "#e5e7eb" },
            blockquote: { color: "#cbd5e1" },
          },
        },
      }),
    },
  },
  variants: { extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
