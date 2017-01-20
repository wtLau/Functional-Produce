# Asynchronous Programming Playground

## Setup

```
npm install
npm install gulp-cli -g
```

## Usage

Both `src/callbacks.js` and `src/promises.js` can be run with vanilla Node.

```bash
node src/callbacks.js
node src/promises.js
```

`/src/await.js` uses some ES7 capabilities, so we need to transpile it with Babel/Gulp.

To run, use:
```bash
npm run await
```
