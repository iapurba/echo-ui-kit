
import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: ["style-loader", "css-loader", "postcss-loader"],
          },
        ],
      },
    },
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  webpackFinal: async (config) => {
    // Remove existing css rule to prevent double-processing
    config.module!.rules = config.module!.rules!.filter((rule): rule is { test: RegExp } => {
      return typeof rule === "object" && rule !== null && "test" in rule;
    }).filter(rule => !rule.test.toString().includes("css"));

    // Add your PostCSS + Tailwind loader
    config.module!.rules!.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('@tailwindcss/postcss'), // ✅ REQUIRED for Tailwind v4
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};

export default config;