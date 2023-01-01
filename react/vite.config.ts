import {defineConfig, UserConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from "path";


export default defineConfig(({ command, mode }) => {
  const config: UserConfig = {
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/main.tsx'),
        name: 'cs-wasm-sample',
        formats: ['es'],
        fileName: (format) => `cs-wasm-sample.${format}.js`,
      },
      target: 'esnext',
    },
    plugins: [react(), tsconfigPaths()],
  };

  if (mode === 'docs') {
    delete config.build!.lib;
    delete config.build!.rollupOptions?.external;
    config.build!.outDir = 'docs';
    config.base = './';
  }

  return config;
});

