import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import pluginWebc from "@11ty/eleventy-plugin-webc"
import markdownItAttrs from "markdown-it-attrs"
import markdownItNamedHeadings from "markdown-it-named-headings"

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(pluginWebc);
  eleventyConfig.amendLibrary("md", mdLib => {
    mdLib.set({ typographer: true })
    mdLib.use(markdownItAttrs)
    mdLib.use(markdownItNamedHeadings)
  });

  eleventyConfig.addPassthroughCopy("src/js")
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "output",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "webc"
  }
};