# Kindle Flashcards 📚

Create automatic flashcards from your Kindle vocabulary builder using AI and export into Anki.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Workflow Overview](#workflow-overview)
- [Detailed Steps](#detailed-steps)
- [Instructions Categories](#instructions-categories) 
  - [Direct Explanations](#direct-explanations)
    - [English](#english-)
    - [Japanese](#japanese-)
    - [Spanish](#spanish-)
  - [Funny Explanations](#funny-explanations)
    - [English](#english-)
- [Deck Templates Categories](#deck-templates-categories)
  - [ANKI Default Templates](#anki-default-templates)
  - [ANKI Custom Templates](#anki-custom-templates)
- [Guidelines Categories](#guidelines-categories)
  - [ChatGPT](#chatgpt)
- [Video Tutorial](#video-tutorial-)
- [Community Contributions](#community-contributions)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [FAQ](#faq-)


## Introduction
This repository is dedicated to integrating the capabilities of GPT for generating personalized Anki flashcards, aiming to subtly improve your learning experience. It's a place where technology meets practicality, providing a simple yet effective way to utilize your Kindle's vocabulary for flashcard creation. To start interacting with Kindle Flashcards via ChatGPT, visit [Kindle Flashcards GPT](https://chat.openai.com/g/g-9wKfpW66j-kindle-flashcards).

> [!NOTE]  
> ⚠️ Project integration is currently exclusive to ChatGPT, requiring ChatGPT Plus for access. ⚠️

Words and contexts are extracted from your Kindle's `vocab.db` file, allowing GPT to create targeted, effective flashcards.

## Features
- **Kindle Vocabulary Extraction**: Seamlessly pull words and contexts from your Kindle's `vocab.db`.
- **GPT-Powered Flashcard Generation**: Utilize GPT's advanced capabilities for personalized flashcard creation.
- **Community-Powered Instruction Repository**: Access and contribute to a rich library of instructions, guidelines, and deck templates.
- **Anki Integration**: Directly prepare and import generated flashcards into Anki or other flashcard applications.

## Workflow Overview
1. **Extract Vocabulary**: Interface with the Kindle's `vocab.db` to pull vocabulary words and contexts.
2. **Instruction Retrieval**: Access community-contributed instructions for flashcard creation.
3. **DeckTemplate Retrieval**: Access community-contributed DeckTemplates for preparing flashcards to import into Anki.
4. **Flashcard Generation**: Craft personalized flashcards leveraging user instructions and extracted data.
5. **Flashcard Export**: Prepare flashcards for Anki import or receive them directly through chat.

## Detailed Steps
### Step 1: Extraction of Information from `vocab.db`
- Provide guidance for data extraction from Kindle.
- Execute SQL queries for detailed book information, words, and contexts.

### Step 2: Getting Instructions and Generating Flashcards
- Input user instructions or reference IDs.
- Access APIs for complete instructions or deck templates.
- Generate targeted feedback or flashcards based on user-guided instructions.

### Step 3: Importing Flashcards into Anki
- Support for Anki direct import or other platforms.
- API integration for appending flashcards to specific formats.
- Offer download links for generated flashcard files.

## [Instructions](frontend/instructions) Categories

### Direct Explanations:

#### English 🍔
- [0001 - Direct and analogy explanations](frontend/instructions/0001-Direct-and-analogy-explanations-in-English)
- [0002 - Direct explanations](frontend/instructions/0002-Direct-explanations-in-English.md)

#### Japanese 🍣

- [0003 - Direct explanations](frontend/instructions/0003-Direct-explanations-in-Japanese.md)

#### Spanish 💃

- [0005 - Direct explanations](frontend/instructions/0005-Direct-explanations-in-Spanish.md)

### Funny Explanations:

#### English 🍔

- [0004 - Humorous explanations](frontend/instructions/0004-Humorous-Explanations-English.md)

## [Deck Templates](frontend/deckTemplates) Categories

### ANKI Default Templates:

- [0002 - Anki Basic TSV](frontend/deckTemplate/0002-Anki-basic-template.md)
- [0003 - Cloze Anki TSV](frontend/deckTemplate/0003-Cloze-Anki-template.md)

### ANKI Custom Templates:

- [0001 - Word + Definition + Context - TSV](frontend/deckTemplate/0001-Word-Definition-Context-template.md)

## [Guidelines](frontend/deckTemplates) Categories

### ChatGPT

- [0001 - Get Vocab, Book, Words, Instructions, DeckTemplate, then generate flashcards as the user wants](AI/GPT/0001-Guidelines.md)

## Video Tutorial 🎥
Watch our tutorial to engage with the system more effectively:

[![Kindle Flashcards Video Tutorial](https://i.ytimg.com/vi/rKEa5SfOOuU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsXD633-wVLr_wS4ESf2sdPLzKuQ)](https://youtu.be/rKEa5SfOOuU)

## Community Contributions
Kindle Flashcards thrives on community involvement. Contributions extend beyond code to include:
- **Instructions**
- **Deck Templates**
- **Guidelines**

Contribute or utilize these resources to enrich your learning and the collective knowledge base.

Your insights and improvements are always welcome! Just ensure that you follow the naming convention and [contribution guidelines](CONTRIBUTING.md).


## License
This project is proudly open-sourced under the [MIT License](LICENSE).

## Acknowledgements
Heartfelt thanks to all contributors and users for their invaluable support and feedback. Your contributions continuously enrich this project ❤️.

## FAQ 🤔

<details>
  <summary>Can I use this project without ChatGPT Plus?</summary>
  Currently, the project integration is exclusive to ChatGPT, and it requires ChatGPT Plus for access. But if another AI company comes to the market with a free GPT/plugin store, we would be eager to integrate with them.
</details>

<details>
  <summary>Can I use this app to import in other flashcard app?</summary>
  YES! Thinking on this we designed the deckTemplates, you can create your own deckTemplate and import the flashcards in any flashcard app that you want.
</details>

<details>
  <summary>How do I contribute to the project?</summary>
  You can contribute by submitting pull requests, suggesting new features, or enriching our repository of instructions, deck templates, and guidelines. Please ensure you follow our contribution guidelines.
</details>

<details>
  <summary>I couldn't find an appropriate category for my Instructions/Guidelines/Deck Template. What should I do?</summary>
  Be creative! If you have a new idea, feel free to create a new category. Just ensure that you follow the naming convention and contribution guidelines.
</details>