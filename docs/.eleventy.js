const pluginWebc = require("@11ty/eleventy-plugin-webc");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc);
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownItAttrs));

  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      output: "output",
      layouts: "_layouts"
    }
  }
};