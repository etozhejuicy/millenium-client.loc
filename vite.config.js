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
        potfolio: "/potfolio.html",
        potfolio_item: "/potfolio-item.html",
      },
    },
  },
  refresh: true,
});
