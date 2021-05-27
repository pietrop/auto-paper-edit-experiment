**Overview**: "Paper-editing" workflow to edit video/audio interviews could be helped by ML to generate a first draft (rough cut) of a story.

Similar to [autoEdit.io](http://autoedit.io/) but further automated.

- [Idea and approach](https://source.opennews.org/articles/video-editing-made-better-introducing-autoedit/)
- [Paper-editing workflow](https://github.com/pietrop/book-how-to-tell-compelling-stories-out-of-video-interviews/blob/master/story-concepts/paper-editing-and-story-concepts.md)

**Input**: A certain number of audio or video Interviews

**Output**: A 'story' rough cut (audio or video) sequence made from parts of the interviews. e.g. for documentary, factual, news, radio or podcast productions.

**Example Steps**

1. Convert video/audio of (several) interviews to transcription

2. Use ML to identify key sentence highlights

3. Use ML to identify overarching topics/themes on the transcriptions

4. Select top topics/ themes (in some way TBC)

5. Select top highlights and group those by previously identified topics/themes  (in some way TBC,([but might probl similar to the approach in this project](https://textav.gitbook.io/textav-event-2018/unconference-projects/sean))

6. Once you have the hilights grouped by an ordered selection of topics, this is equivalent to having an outline of a "story"/"paper-edit" draft  ish~

7. As you know transcripts have word level timings, so reconnecting the text transcript data from the hilights in the outline from point 6, would allow to create a video / audio sequence rough cut of the "story"

Explore how we could incorporate a solution to help with B-Roll/cut away videos

---

TODO:

- [ ] Modify AssemblyAI Node SDK to return Topics and highliths
- [ ] [Auto-detecting key phrases/words in the transcription text](https://docs.assemblyai.com/all-guides/auto-detecting-key-phrases-words-in-the-transcription-text)

```js
"auto_highlights": true
```

- [Topics - IAB Categorization](https://docs.assemblyai.com/enterprise/iab-categorization)

```js
"iab_categories": true
```

- [ ] Download 3 or more PBS Frontline interview to use as part of this - or can use S3 URL to send for transcription directly?
