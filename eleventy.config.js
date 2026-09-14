import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import fs from "node:fs/promises";
import path from "node:path";

import tailwindConfig from "./tailwind.config.js";

export default function (eleventyConfig) {
  // Pass through public static files to root
  eleventyConfig.addPassthroughCopy({ public: "/" });

  // Watch CSS and Tailwind config files for changes
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./tailwind.config.js");

  // Compile CSS after Eleventy builds
  eleventyConfig.on("eleventy.after", async () => {
    const inputPath = path.resolve("./src/css/global.css");
    const outputPath = path.resolve("./_site/global.css");
    const css = await fs.readFile(inputPath, "utf8");

    const plugins = [tailwindcss(tailwindConfig), autoprefixer];

    if (process.env.NODE_ENV === "production") {
      plugins.push(cssnano({ preset: "default" }));
    }

    const result = await postcss(plugins).process(css, {
      from: inputPath,
      to: outputPath,
    });

    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, result.css);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
