import {defineConfig, splitVendorChunkPlugin} from "vite"
import preact from "@preact/preset-vite"

export default defineConfig({
    plugins: [
        preact(),
        splitVendorChunkPlugin(),
    ],
    publicDir: "src/public",
    resolve: {
        alias: {
            "react": "preact/compat",
            "react-dom": "preact/compat"
        }
    },
    build: {
        chunkSizeWarningLimit: 1024,

        rollupOptions: {
            output: {
                inlineDynamicImports: false
            },
        },
    },
    manualChunks: {
        lodash: ["lodash"]
    },
    css: {
        modules: {
            generateScopedName: "[hash:base64:12]",
        }
    },
    json: {
        namedExports: false,
    },
    esbuild: {
        logOverride: {
            "this-is-undefined-in-esm": "silent"
        }
    }
})
