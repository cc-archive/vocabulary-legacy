import "@/styles/vocabulary/_index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Hello",
        [
          "WIP",
          "Introduction",
          "Getting Started",
          "Overview",
          "Structure",
          "Usage",
          "Contribution",
        ],
        "Fonts",
        [
          "CC Accidenz Commons",
          "Roboto Condensed",
          "Source Sans Pro",
          "JetBrains Mono",
          "Vocabulary Icons",
        ],
      ],
    },
  },
};
