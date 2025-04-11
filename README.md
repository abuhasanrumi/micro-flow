[![npm](https://img.shields.io/npm/v/@abuhasanrumi/micro-flow)](https://www.npmjs.com/package/@abuhasanrumi/micro-flow)
[![CI](https://github.com/abuhasanrumi/micro-flow/actions/workflows/ci.yml/badge.svg)](https://github.com/abuhasanrumi/micro-flow/actions)

A tiny (364b) JavaScript utility for debouncing, throttling, and dynamic rate-limiting. Built for performance and simplicity, `micro-flow` helps developers optimize event-driven applications with minimal overhead.

## Introduction

`micro-flow` is a lightweight library designed to handle rate-limiting tasks in JavaScript with ease. Whether you're optimizing scroll events, search inputs, or API calls, this package provides three core functions—`debounce`, `throttle`, and `dynamic`—to ensure your code runs efficiently. With a focus on modern JavaScript, TypeScript support, and a tiny footprint, `micro-flow` is perfect for projects where performance and bundle size matter.

## Why I Built This Package

As a developer, I noticed that many rate-limiting libraries were either bloated with dependencies or lacked flexibility for modern workflows. I wanted to create a solution that was:

- **Ultra-lightweight**: At under 500 bytes, it adds negligible weight to your bundle.
- **Modern**: Built with ES Modules and TypeScript for seamless integration in contemporary projects.
- **Unique**: The `dynamic` function adapts wait times based on call frequency, a feature not commonly found in other libraries.
- **Simple**: Clear APIs and zero dependencies make it easy to adopt and maintain.

This package was also a way for me to deepen my understanding of JavaScript performance patterns while contributing a practical tool to the open-source community. It’s a showcase of clean code, rigorous testing, and developer-friendly design.

## How It Differs from Other Packages

While there are other debounce and throttle libraries like `lodash.debounce`, `throttle-debounce`, or `just-debounce-it`, `@abuhasanrumi/micro-flow` stands out in several ways:

- **Smaller Size**: Most alternatives range from 1-70KB (e.g., Lodash is ~70KB). `micro-flow` is under 364b minified, ideal for performance-critical apps.
- **Dynamic Mode**: Unlike traditional debounce or throttle, the `dynamic` function adjusts wait times based on how frequently it’s called, offering smarter rate-limiting for variable workloads (e.g., search inputs with bursts of typing).
- **TypeScript-First**: Built with TypeScript definitions included, ensuring a great developer experience without extra setup.
- **No Dependencies**: Unlike some libraries that pull in large utilities, `micro-flow` is standalone, reducing bloat and security risks.
- **Modern JavaScript**: Uses ES Modules and is tree-shakable, unlike older libraries with CommonJS or UMD formats.
- **Focused Scope**: Instead of being a kitchen-sink utility, it does three things well, keeping your project lean.

If you need a minimal, flexible, and forward-thinking rate-limiting solution, `micro-flow` is designed for you.

## Installation

Install via npm:

```bash
npm install @abuhasanrumi/micro-flow
```

## Usage

### Debounce
Prevents a function from running until a specified delay has passed since its last call. Great for search inputs or resize events.

```javascript
import { debounce } from '@abuhasanrumi/micro-flow';

const log = debounce(() => console.log('Debounced!'), 200);
window.addEventListener('resize', log);
// Rapid resizes trigger only one console.log after 200ms
```

### Throttle
Limits a function to run at most once every specified interval. Perfect for scroll or mouse-move events.

```javascript
import { throttle } from '@abuhasanrumi/micro-flow';

const update = throttle(() => console.log('Throttled!'), 100);
window.addEventListener('scroll', update);
// Logs at most once every 100ms during scrolling
```

### Dynamic
Adapts the wait time based on call frequency, using a base wait and scaling up to a maximum. Ideal for dynamic inputs like typing or IoT events.

```javascript
import { dynamic } from '@abuhasanrumi/micro-flow';

const search = dynamic(() => console.log('Searching...'), { baseWait: 200, maxWait: 1000 });
document.getElementById('search').addEventListener('input', search);
// Frequent typing uses ~200ms wait; sparse typing extends up to 1000ms
```

## Features

- **Ultra-Tiny**: 364 bytes minified, ensuring minimal impact on bundle size.
- **TypeScript Support**: Full type definitions for better IDE integration.
- **Dynamic Rate-Limiting**: Unique `dynamic` function adjusts wait times for smarter performance.
- **Zero Dependencies**: No external libraries, reducing complexity and risks.
- **Tree-Shakable**: ES Modules ensure only used functions are bundled.
- **100% Test Coverage**: Rigorous tests with Vitest for reliability.
- **Modern Workflow**: Built for Node.js 18+ and compatible with frameworks like React, Vue, or Svelte.

## Live Demo

Try `@abuhasanrumi/micro-flow` in action:

[Live Demo on CodeSandbox](https://codesandbox.io/p/sandbox/demo-micro-flow-y24tlk)

See `debounce` on a search input, `throttle` on scroll events, and `dynamic` with adaptive typing—all in a simple, interactive example.

## API Reference

### `debounce(fn, wait)`
- **fn**: Function to debounce.
- **wait**: Delay in milliseconds.
- **Returns**: Debounced function that runs `fn` after `wait` ms of inactivity.

### `throttle(fn, wait)`
- **fn**: Function to throttle.
- **wait**: Minimum interval in milliseconds.
- **Returns**: Throttled function that runs `fn` at most once per `wait` ms.

### `dynamic(fn, options)`
- **fn**: Function to rate-limit.
- **options**:
  - `baseWait`: Minimum wait time in milliseconds (e.g., 200).
  - `maxWait`: Maximum wait time in milliseconds (e.g., 1000).
- **Returns**: Function that schedules `fn` with a wait time that adapts based on call frequency.

## Development

To contribute or run locally:

1. Clone the repo:
   ```bash
   git clone https://github.com/abuhasanrumi/micro-flow.git
   cd micro-flow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run tests:
   ```bash
   npm test
   ```

4. Build the package:
   ```bash
   npm run build
   ```

## License

Copyright (c) 2025 Abu Hasan Rumi

## Acknowledgments

Built as a learning project to explore JavaScript performance patterns and contribute to the open-source community. Feedback and contributions are welcome!