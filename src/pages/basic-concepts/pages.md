---
title: Pages
description: Pages are React components that handle requests.
---

## How to use

Pages are React Components which

```ts
function HomePage(props) {
  return <div>Hello, World!</div>
}

export default HomePage
```

## URL Routing

URL routing is done automatically by Next.js based on this directory structure.

For example:

- `pages/index.tsx` maps to `http://localhost:3000`
- `pages/blog/index.tsx` maps to `http://localhost:3000/blog`
- `pages/blog/[slug].tsx` maps to `http://localhost:3000/blog/unique-slug`

To read more about how Routing works, view the [Next.js Routing Documentation](https://nextjs.org/docs/routing/introduction#index-routes)

## Special files in /pages

### \_app.tsx

High level application initialization, allows wrapping the top level Next.js view with state management, UI / themes, authentication wrappers, etc.

> NOTE: By default, this file is not present in `pages/`. You will have to add it manually.

```ts
// We can loan high-level wrappers and contexts here.
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
```

### \_document.tsx

Extending the default HTML template is done in the `_document.tsx` file.

> NOTE: By default, this file is not present in `pages/`. You will have to add it manually.

```ts
import React from "react"
import Document, {
  DocumentContext,
  DocumentProps,
  Html,
  Head,
  Main,
  NextScript
} from "next/document"

class MyDocument extends Document<DocumentProps> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="color-scheme" content="light dark" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
```
