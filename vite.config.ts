import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { hydrate } from "react-dom";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic"
    })
  ]
});
