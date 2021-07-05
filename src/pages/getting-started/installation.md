---
title: Installation
description:
---

## Installing node

`node` is a Javascript runtime built on Chrome's V8 JS Engine. If this is not installed already, refer to [https://nodejs.org](https://nodejs.org) for installation instructions.

Note: Next.js requires Node.js 12.0 or later.

## Setup

It's easiest to use the `npx create-next-app` script which will automatically setup a blank project for you.

```bash
npx create-next-app --ts
```

Afterwards, make sure to change to the newly created directory.

## TypeScript

Next.js supports Typescript out of the box

### Why should you use TypeScript?

## Scripts

```bash
yarn dev
```

To run a development server, run `yarn dev`. This will start a local server on [http://localhost:3000](http://localhost:3000)

```bash
yarn build
```

To build the project for production deployment, run `yarn build`

```bash
yarn start
```

After the project has been built, to run the production optimized use `yarn start`