import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  // 纯净模式
  pure: true,
  
  // 当前网站部署到的域名。
  hostname: "https://blog.lbin.top",

  // 文章显示的默认作者
  author: {
    name: "lbin",
    url: "https://blog.lbin.top",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "javadirection",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: '<a target="_blank" href="https://beian.miit.gov.cn">浙ICP备2021004144号</a>|主题:<a href="https://vuepress-theme-hope.github.io/v2/" target="_blank">VuePress Theme Hope</a>',

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个开发者",
    medias: {
      Gitee: "https://gitee.com/liqibi",
      GitHub: "https://github.com/javadirection",
      Zhihu: "https://www.zhihu.com/people/mo-liao-24-73",
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
