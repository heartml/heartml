const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItNamedHeadings = require("markdown-it-named-headings")
const { exec } = require("child_process");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(pluginWebc);
  eleventyConfig.amendLibrary("md", mdLib => {
    mdLib.set({ typographer: true })
    mdLib.use(markdownItAttrs)
    mdLib.use(markdownItNamedHeadings)
  });

  eleventyConfig.addPassthroughCopy("src/js")
  eleventyConfig.addPassthroughCopy("src/images");

  // workaround for WebC layout dependent components not triggering a rebuild
  eleventyConfig.on('eleventy.beforeWatch', (changedFiles) => {
    if (!changedFiles.some((filePath) => filePath.includes('./src/_layouts'))) {
      console.log('[11ty] 🤠 Component files updated -- coercing layout reload.')
      exec('find src/_layouts/*.webc -type f -exec touch {} +');
    }
  });

  return {
    dir: {
      input: "src",
      output: "output",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "webc"
  }
};