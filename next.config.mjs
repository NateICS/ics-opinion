import analyzer from "@next/bundle-analyzer"

const config = analyzer({
  enabled: process.env.ANALYZE === "true",
})

export default config({})
