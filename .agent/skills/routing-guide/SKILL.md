---
name: vue-routing-guide
description: Comprehensive guide to the file-based routing system used in this project. Use this skill when you need to create new pages, understand URL mapping, or handle navigation logic using unplugin-vue-router.
---

# Vue Routing Guide

## Overview

This project uses **File-Based Routing** powered by [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router). This means the logical structure of your `src/pages` directory directly maps to the application's URL routes. You generally do **not** need to manually configure routes in `src/router/index.js`.

## Creating Routes

To add a new route, simply create a Vue component in the `src/pages` directory.

### Basic Routes

| File Path | URL Path |
|-----------|----------|
| `src/pages/index.vue` | `/` |
| `src/pages/about.vue` | `/about` |
| `src/pages/users/index.vue` | `/users` |
| `src/pages/contact-us.vue` | `/contact-us` |

### Dynamic Routes

Use square brackets `[]` to denote dynamic segments.

| File Path | URL Path | Parameters |
|-----------|----------|------------|
| `src/pages/users/[id].vue` | `/users/123` | `{ id: '123' }` |
| `src/pages/posts/[slug].vue` | `/posts/my-post` | `{ slug: 'my-post' }` |

**Accessing params in script setup:**

```vue
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id) // 123
</script>
```

### Catch-all / 404 Routes

Use the spread syntax `[...]` to match all remaining path segments.

- File: `src/pages/[...slug].vue`
- Matches: `/any/path/that/does/not/exist`

This is typically used for 404 "Not Found" pages.

## Navigation

### Using Components

Use the `<RouterLink>` component for internal links. This ensures client-side navigation without a full page reload.

```vue
<RouterLink to="/about">Go to About</RouterLink>
<RouterLink :to="{ path: '/users/123' }">User 123</RouterLink>
```

### Programmatic Navigation

Use `useRouter` hook for navigating via JavaScript.

```vue
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goHome() {
  router.push('/')
}

function goBack() {
  router.back()
}
</script>
```

## Nested Routes

To create nested routes (children), create a folder with the same name as the parent file.

- Parent: `src/pages/users.vue` (contains `<router-view>`)
- Child: `src/pages/users/profile.vue`

URL `/users/profile` will render `users.vue`, which then renders `profile.vue` inside its `<router-view>`.

## Layouts

This project currently manages layouts manually. `src/App.vue` contains the main `<router-view>`.

Common pattern for layouts inside pages:

```vue
<!-- src/pages/some-page.vue -->
<template>
  <MainLayout>
    <h1>Page Content</h1>
  </MainLayout>
</template>
```

(Ensure you have creating the layout components in `src/components` if creating a new one).

## Troubleshooting

- **Route not found?** Ensure the file extension is `.vue`.
- **404?** Check if you have a `[...slug].vue` or similar catch-all route defined.
- **Server restart?** `unplugin-vue-router` usually detects new files automatically, but if a route isn't appearing, try restarting the dev server.
