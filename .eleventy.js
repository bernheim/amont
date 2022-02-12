module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("image", function(src, caption) { 
    return `<figure><img src="/assets/media/${src}" alt="${caption}"><figcaption>${caption}</figcaption></figure>`
  });

  eleventyConfig.addPassthroughCopy({ "src/static": "/assets" });  
  eleventyConfig.addPassthroughCopy({ "src/static/vercel": "/" });  
  eleventyConfig.setTemplateFormats([
      "md",
      "njk", // css is not yet a recognized template extension in Eleventy
      "jpg",
      "png",
      "mp4",
      "css",
      "svg",
      "pdf",
      "ejs",
      "woff2",
      "html"
    ]);
    return {
        dir: { input: 'src', output: '_site', data: '_data' },
      };
  };

