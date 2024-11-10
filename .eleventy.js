module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/script.js");

    // Set directories
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};