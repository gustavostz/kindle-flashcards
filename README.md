# Kindle Flashcards

Create automatic flashcards from your Kindle vocabulary builder using AI and export into Anki.

## Introduction
This repository presents a system that integrates with GPT to generate personalized Anki flashcards. Click here to access the [Kindle Flashcards ChatGPT](https://chat.openai.com/g/g-9wKfpW66j-kindle-flashcards).

⚠️ **Note:*** Currently the project is only integrate with ChatGPT, so it needs the ChatGPT plus to access it. ⚠️

The system extracts words and their contexts from your Kindle's `vocab.db` file and uses a GPT to create personalized flashcards.

## Features
- **Kindle Vocabulary Extraction**: Directly extract words and contexts from your Kindle's `vocab.db`.
- **GPT-Powered Flashcard Generation**: Leverage the capabilities of GPT to generate personalized flashcards.
- **Instruction Repository**: Save custom instructions and deck templates for repeated use.
- **Anki Integration**: Prepare and import generated flashcards directly into Anki or other similar flashcard applications.

## Workflow Overview
1. **Extract Vocabulary**: Connect to the Kindle's `vocab.db` file to extract vocabulary words and contexts.
2. **Instruction Retrieval**: Fetch or receive instructions on how to process the extracted vocabulary.
3. **Flashcard Generation**: Generate personalized flashcards based on the instructions and the extracted data.
4. **Flashcard Export**: Optionally, prepare the flashcards for import into Anki or receive them directly through the chat.

## Detailed Steps
### Step 1: Extraction of Information from `vocab.db`
- Guide users through extracting data from their Kindle.
- Execute SQL queries to retrieve relevant book information, words, and contexts.

### Step 2: Getting Instructions and Generating Flashcards
- Receive user instructions or instruction IDs.
- Call APIs to retrieve full instructions or deck templates.
- Generate personalized feedback or flashcards based on user instructions.

### Step 3: Importing Flashcards into Anki
- Support for direct import into Anki or similar platforms.
- API integration for appending flashcards to specific file formats.
- Provide downloadable links for the generated flashcard files.


## Contribution
Feel free to contribute to this repository by submitting pull requests or suggesting new features or improvements.

## License
This project is open-sourced under the [MIT License](LICENSE).

## Acknowledgements
- Thanks to all contributors and users for improving this project ❤️.

