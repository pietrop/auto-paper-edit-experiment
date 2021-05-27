## Brief of the project

<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->

Experiment repo, to test out AssemblyAI [Automatic Transcript Highlights feature](https://docs.assemblyai.com/all-guides/auto-detecting-key-phrases-words-in-the-transcription-text) and [IAB Categorization](https://docs.assemblyai.com/enterprise/iab-categorization) to make a "paper-edit" out of audio/video interviews.

Checkout [Problem domain](/docs/guides/problem-domain.md) for more info.

## Setup

<!-- _stack - optional_
_How to build and run the code/app_ -->

```
git clone git@github.com:pietrop/auto-paper-edit-experiment.git
```

```
cd auto-paper-edit-experiment
```

add a `.env` with you assemblyAI credential

```
ASSEMBLYAI_API_KEY=
```

## Usage

_TBC_

## System Architecture

<!-- _High level overview of system architecture_ -->

## Documentation

There's a [docs](./docs) folder in this repository.

[docs/notes](./docs/notes) contains dev draft notes on various aspects of the project. This would generally be converted either into ADRs or guides when ready.

<!--
[docs/adr](./docs/adr) contains [Architecture Decision Record](https://github.com/joelparkerhenderson/architecture_decision_record).

> An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

We are using [this template for ADR](https://gist.github.com/iaincollins/92923cc2c309c2751aea6f1b34b31d95) -->

## Development env

 <!-- _How to run the development environment_ -->

- npm > `6.1.0`
- [Node 12](https://nodejs.org/docs/latest-v12.x/api/)

Node version is set in node version manager [`.nvmrc`](https://github.com/creationix/nvm#nvmrc)

```
nvm use
```

<!-- _Coding style convention ref optional, eg which linter to use_ -->

<!-- _Linting, github pre-push hook - optional_ -->

## Build

<!-- _How to run build_ -->

_NA_

## Tests

<!-- _How to carry out tests_ -->

_NA_

## Deployment

<!-- _How to deploy the code/app into test/staging/production_ -->

_NA_
