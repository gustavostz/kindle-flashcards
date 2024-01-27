# Flashcards in the ANKI format to import

## Format Definition

The format is going to be a TSV file with the following columns:
- `stem`: The base form (stem) of the word that was get on the `vocab.db`.
- `flashcard-explanation`: The explanation that was created based on the instructions and the extracted vocabulary (words and contexts).
- `content`: The context in which the word was used (sentences or phrases from the book that was get on the `vocab.db`).

The columns are separated by a tab character (`\t`) and the rows are separated by a new line character (`\n`). The file should be saved with the `.tsv` extension.

### Format Example

```tsv
{stem}	{flashcard-explanation} 	{content}
```


### Example with data

```tsv
tantalizing	Either one is tantalizing, but together they are enough to drive you to madness. 	Direct Explanation: To tantalize means to tease or torment by presenting something desirable to the view but continually keeping it out of reach. In this context, it refers to the allure of two tempting options that, when combined, create an overwhelming desire, almost to the point of mental anguish due to their unattainability.Simple Analogy: Imagine seeing your favorite dessert through a shop window, smelling its delicious aroma, but the shop is closed. That's tantalizing. It's right there, you want it so much, but you just can't have it.
sewers	They came through sewers, wading through the filth and muck, heartbeats erratic and fearful. 	Direct Explanation: A sewer is an underground conduit for carrying off drainage water and waste matter. The context implies a grim and filthy journey, evoking a sense of desperation and fear, likely due to the unpleasant conditions and the inherent dangers of such a place.Simple Analogy: Think of a sewer like a city's dirty secret. It's the underground tunnel where all the unwanted water and waste go. It's dark, smelly, and not a place you'd visit for fun.
skulk	Through the barred window in my cell door, I watched them skulk down the brick-lined hallway with great caution. 	Direct Explanation: To skulk means to move stealthily or furtively or to hide out or move about with a sinister or cowardly motive. In this context, it suggests cautious, secretive movement, likely to avoid detection or danger.Simple Analogy: Picture a cat sneaking up on a mouse, moving quietly and carefully so it doesn't get noticed. That's skulking, moving in a way that's trying not to be seen.
```