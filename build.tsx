await Bun.build({
    entrypoints: ["./packages/styled-system/src/index.ts"],
    outdir: "./packages/styled-system/dist/esm",
    target: "browser",
    format: "esm"
})