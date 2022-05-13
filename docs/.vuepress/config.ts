import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "lbin",
  description: "lbin的个人博客",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  theme,
});
