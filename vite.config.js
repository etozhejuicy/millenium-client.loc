import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "./images/[!.]*",
          dest: "./images",
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: "/index.html",
        about: "/about.html",
        potfolio: "/potfolio.html",
        potfolio_item: "/potfolio-item.html",
        online_platform: "/online-platform.html",
        specials: "/specials.html",
        services: "/services.html",
        prices: "/prices.html",
        russian_soft: "/russian-soft.html",
        socials: "/socials.html",
        integrations: "/integrations.html",
        kz: "/kz.html",
      },
    },
  },
  refresh: true,
});
