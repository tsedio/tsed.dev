---
url: /api/specs/openspec/types/common/interface-open-spec-tag.md
description: api documentation of OpenSpecTag from @tsed/openspec
---

## Usage

```typescript
import { OpenSpecTag } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/common/OpenSpecTag.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/common/OpenSpecTag.ts#L0-L0).

## Overview

```ts
interface OpenSpecTag {
    name: string;
    description?: string;
    externalDocs?: OpenSpecExternalDocs;
}
```

## name

```ts
name: string;
```

## description

```ts
description?: string;
```

## externalDocs

```ts
externalDocs?: OpenSpecExternalDocs;
```
