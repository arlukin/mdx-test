import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      mdx({
        providerImportSource: "@mdx-js/react",
      }),
    ],
    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },
  };
});
