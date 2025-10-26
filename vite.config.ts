import react from "@vitejs/plugin-react-swc"
import { mkdir, readdir, rm } from "node:fs/promises"
import * as path from "node:path"
import { defineConfig } from "vite"
import { comlink } from "vite-plugin-comlink"

export default defineConfig(({ command, mode }) => {

  const ReactCompilerConfig = {
    target: "19"
  }

  return {
    base: "/",
    envPrefix: "APP_",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      react({
        babel: {
          plugins: [
            ["babel-plugin-react-compiler", ReactCompilerConfig]
          ]
        }
      }),
      comlink(),
      {
        name: "cleansing-build",
        buildStart: async function () {
          if (command !== "build") return

          const assetsDir = path.join(__dirname, "public", "build")
          await rm(assetsDir, { recursive: true, force: true })
          await mkdir(assetsDir, { recursive: true })
        }
      },
      {
        name: "cleansing-sentry",
        closeBundle: async function () {
          if (command !== "build" || mode === "test") return

          const assetsDir = path.join(__dirname, "public", "build")
          const assetsFile = await readdir(assetsDir)

          await Promise.all(
            assetsFile
              .filter(file => file.endsWith(".js.map"))
              .map(file => rm(path.join(assetsDir, file), { force: true }))
          )
        }
      }
    ],
    build: {
      assetsDir: "build",
      sourcemap: mode != "test",
      copyPublicDir: false,
      emptyOutDir: false,
      outDir: path.join(__dirname, "public"),
    }
  }
})
