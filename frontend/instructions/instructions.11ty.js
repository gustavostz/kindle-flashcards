const fs = require("fs");

class InstructionsMarkdown {
    data() {
        return {
            permalink: "instructions.md"
        };
    }

    render(data) {
        // Fetch your instructions from the collections
        const instructions = data.collections.instructions.map(i => `- ${i.data.title || i.fileSlug}`).join("\n");

        // Return the content as Markdown
        return `# Instructions List\n\n${instructions}`;
    }
}

module.exports = InstructionsMarkdown;