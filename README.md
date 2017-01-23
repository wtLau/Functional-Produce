# Asynchronous Programming Playground

## Setup

```
npm install
```

## Usage

Both `src/callbacks.js` and `src/promises.js` can be run with vanilla Node.

```bash
node src/callbacks.js
node src/promises.js
```

`/src/await.js` will use some ES2017 capabilities, so we need to run it with a compatibility flag.

To run, use:
```bash
node --harmony-async-await src/await.js
```
