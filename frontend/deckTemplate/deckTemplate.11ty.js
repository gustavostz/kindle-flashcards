const fs = require("fs");

class DeckTemplateMarkdown {
    data() {
        return {
            permalink: "deckTemplate.md"
        };
    }

    render(data) {
        // Fetch your instructions from the collections
        const deckTemplate = data.collections.deckTemplate.map(i => `- ${i.data.title || i.fileSlug}`).join("\n");

        // Return the content as Markdown
        return `# Deck Template List\n\n${deckTemplate}`;
    }
}

module.exports = DeckTemplateMarkdown;