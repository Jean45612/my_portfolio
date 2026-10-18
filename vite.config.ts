import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// El sitio se publica en https://jean45612.github.io/my_portfolio/
export default defineConfig({
  base: "/my_portfolio/",
  plugins: [react()],
});
