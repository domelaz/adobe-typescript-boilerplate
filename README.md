# Work In Progress, PR welcome

> paritally covered Extended JS and Adobe Illustrator CS3

## TypeScript definitions for Adobe JavaScript

Why [TypeScript](https://www.typescriptlang.org/) here?

* no more old-school `ExtendScript Toolkit` editor -- use IDE of you choice;
* no more prehistoric ES3 JavaScript -- talk modern language;
* provides contextual autocomplete -- binded with current type;
* provides realtime type checking -- not runtime errors;

## Quick start with Atom edior

* get [Atom](https://atom.io/);
* inside Atom install `atom-typescript` plugin;

### Install definitions from command line

```bash
npm install
npm install -g grunt-cli
grunt ts
grunt watch
```

### I have no git, no node, no npm!

* put `tsconfig.json` and `references.ts` files in your project root folder;
* put `typings` folder in your project root folder;

### ...and finally

* create `src` folder in your project root;
* create `index.ts` in `src` folder;
* have fun!
