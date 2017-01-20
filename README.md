# Asynchronous Programming Playground

## Setup

```
npm install
```

## Usage

To allow full use of ES6 (and even some ES7) capabilities, we use webpack to build our files.

The working files live in `/src`, and tranpiled files are generated in `/dist`.

To build:

```bash
npm run build
```

To build and run a file:

```bash
npm run file -- dist/callbacks.js
npm run file -- dist/promises.js
npm run file -- dist/await.js
```
