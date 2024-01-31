{% raw %}
# Flashcards in the ANKI Cloze Format to Import

## Format Definition

The format will be a TSV (Tab-Separated Values) file consisting of the following columns:
- `cloze-context`: The context in which the word was used, with the key term replaced by a cloze deletion. The term to be tested (the stem) is enclosed in double curly braces with a cloze identifier (e.g., `{{c1::stem}}`). This format allows for the creation of fill-in-the-blank style flashcards.
- `stem`: The base form (stem) of the word that was retrieved from the `vocab.db`.
- `flashcard-explanation`: The explanation or description that relates to the word in the context, intended for the flashcard content.

The columns are separated by a tab character (`\t`) and the rows are separated by a new line character (`\n`). The file should be saved with the `.tsv` extension.

### Format Example

```tsv
{cloze-context}	{stem}	{flashcard-explanation}
```

### Example with Data

```tsv
Either one is {{c1::tantalizing}}, but together they are enough to drive you to madness. 	tantalizing	Explanation1
They came through {{c1::sewers}}, wading through the filth and muck, heartbeats erratic and fearful. 	sewers	Explanation two
Through the barred window in my cell door, I watched them {{c1::skulk}} down the brick-lined hallway with great caution. 	skulk	Explanation 3
```

This format is specifically designed for the ANKI Cloze format, facilitating the creation of cloze deletion cards where the learner is prompted to recall the missing information (the stem) within a given context. The `cloze-context` provides the sentence or phrase with the missing word, promoting active recall and engagement with the content.
{% endraw %}