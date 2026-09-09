---
url: /api/specs/schema/types/components/stores/interface-json-redirect-options.md
description: api documentation of JsonRedirectOptions from @tsed/schema
---

## Usage

```typescript
import { JsonRedirectOptions } from "@tsed/schema";
```

> See [/packages/specs/schema/src/components/stores/JsonMethodStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/components/stores/JsonMethodStore.ts#L0-L0).

## Overview

```ts
interface JsonRedirectOptions {
    status: number | undefined;
    url: string;
}
```

## Description

Configuration options for HTTP redirects.

## status

```ts
status: number | undefined;
```

## url

```ts
url: string;
```
