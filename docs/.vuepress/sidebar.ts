import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  {
    text: "文章",
    icon: "note",
    prefix: "/posts/",
    children: [
      {
        text: "文章 1-4",
        icon: "note",
        collapsable: true,
        prefix: "article/",
        children: ["第一篇文章"],
      },
    ],
  },
]);
