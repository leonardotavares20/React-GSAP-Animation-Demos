import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [/\.(woff|woff2|png|jpe?g|gif|svg|eot|ttf|otf)$/i],
});
