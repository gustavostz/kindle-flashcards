module.exports = function(eleventyConfig) {
    // Add a collection named "instructions"
    eleventyConfig.addCollection("instructions", function(collectionApi) {
        // Get only the files in the instructions directory
        return collectionApi.getFilteredByGlob("./instructions/*.md");
    });

    eleventyConfig.addPassthroughCopy("instructions/*.md");
    eleventyConfig.addPassthroughCopy("CNAME" );

    return {
        // Other configurations...
    };
};