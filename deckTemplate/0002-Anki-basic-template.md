# Flashcards in the ANKI Basic Template Format to Import

## Format Definition

The format will be a TSV (Tab-Separated Values) file consisting of the following columns:
- `stem-context-highlighted`: A combination of the stem of the word and the context in which the word was used. The word (stem) will be placed at the beginning, followed by the context formatted as HTML with the word highlighted in bold. The context is encapsulated within a `<p class="context">` HTML tag.
- `flashcard-explanation`: The explanation or description that relates to the word in the context, intended for the flashcard content.

The columns are separated by a tab character (`\t`) and the rows are separated by a new line character (`\n`). The file should be saved with the `.tsv` extension.

### Format Example

```tsv
{stem-context-highlighted}	{flashcard-explanation}
```

### Example with Data

```
tantalizing<p class="context">Either one is <b>tantalizing</b>, but together they are enough to drive you to madness. </p>	Explanation1
sewers<p class="context">They came through <b>sewers</b>, wading through the filth and muck, heartbeats erratic and fearful. </p>	Explanation two
skulk<p class="context">Through the barred window in my cell door, I watched them <b>skulk</b> down the brick-lined hallway with great caution. </p>	Explanation 3
```

