import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/antavii-real-estate/",
  optimizeDeps: {
    include: ["react-leaflet", "leaflet"],
  },
  ssr: {
    noExternal: ["react-leaflet", "leaflet"],
  },
});
