---
url: /api/specs/openspec/types/openspec2/interface-os-2-security-base.md
description: api documentation of OS2SecurityBase from @tsed/openspec
---

## Usage

```typescript
import { OS2SecurityBase } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec2/OS2Security.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Security.ts#L0-L0).

## Overview

```ts
interface OS2SecurityBase {
    type: "basic" | "apiKey" | "oauth2";
    description?: string;
}
```

## type

```ts
type: "basic" | "apiKey" | "oauth2";
```

The type of the security scheme

## description

```ts
description?: string;
```
