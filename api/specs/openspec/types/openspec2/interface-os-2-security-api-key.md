---
url: /api/specs/openspec/types/openspec2/interface-os-2-security-api-key.md
description: api documentation of OS2SecurityApiKey from @tsed/openspec
---

## Usage

```typescript
import { OS2SecurityApiKey } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec2/OS2Security.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Security.ts#L0-L0).

## Overview

```ts
interface OS2SecurityApiKey extends OS2SecurityBase {
    type: "apiKey";
    name: string;
    in: "query" | "header";
}
```

## type

```ts
type: "apiKey";
```

## name

```ts
name: string;
```

## in

```ts
in: "query" | "header";
```
