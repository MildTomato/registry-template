/* eslint-disable */
const fs = require("fs")
const glob = require("glob").sync

const files = glob("public/r/**/*.json")

files.forEach((file) => {
  const content = fs.readFileSync(file, "utf-8")
  const json = JSON.parse(content)

  json.files.forEach((item) => {
    if (item.content) {
      item.content = item.content.replace(
        /@\/app\/framework-files\/nextjs\/app-router\/utils\//g,
        "@/utils/"
      )
    }
  })

  fs.writeFileSync(file, JSON.stringify(json, null, 2))
  console.log(`Updated imports in ${file}`)
})
