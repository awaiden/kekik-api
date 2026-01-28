import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "src/index.ts",
  outDir: "dist",
  tsconfig: "tsconfig.json",
  minify: true,
  sourcemap: true,
});
