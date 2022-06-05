import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      mdx({
        // See https://mdxjs.com/advanced/plugins
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [],
        rehypePlugins: [],
      }),
    ],
    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },
  };
});
