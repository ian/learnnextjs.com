---
title: Project Structure
description: What does a Next.js project look like?
---

## Directories

While the choice of how to organize your project is ultimately up to you, developers tend to follow this project structure in general.

```
./myapp
│
├── .next/
├── components/
├── pages/
│   ├── _app.tsx
│   └── _document.tsx
├── public/
├── package.json
├── next.config.js
├── tsconfig.json
└── yarn.lock
```

## In Detail

```
.next
```

This is where build output goes, as well as development cache.

```
components/
```

This is where you will put reusable view Components, for example `<Header />` or `<Button />`.

```
pages/
```
