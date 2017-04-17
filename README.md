# ES.Next Programming Playground

## Setup

```
npm install
```

## Directory Structure

Write your code in the `src` directory.
When it is compiled, it will be placed in the `compiled` directory.

## Usage

This playground uses Babel to ensure that all the newest ES features are supported.

Use the `npm run file` script to run a file.
This will run `gulp` and then execute the file provided as an argument.

__Make sure you execute files in the `compiled` directory, not the `src` directory.__

```bash
# Pattern
npm run file -- compiled/**/[FILENAME]

# Example
npm run file -- compiled/src/demo.js
```
