---
title: OS2SecurityBase from @tsed/openspec
description: api documentation of OS2SecurityBase from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS2SecurityBase interface
---
# OS2SecurityBase - @tsed/openspec

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

<!-- Members -->

## type

```ts
type: "basic" | "apiKey" | "oauth2";
```

The type of the security scheme

## description

```ts
description?: string;
```
