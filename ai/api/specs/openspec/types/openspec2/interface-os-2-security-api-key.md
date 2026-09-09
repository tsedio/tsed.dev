---
title: OS2SecurityApiKey from @tsed/openspec
description: api documentation of OS2SecurityApiKey from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS2SecurityApiKey interface
---
# OS2SecurityApiKey - @tsed/openspec

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

<!-- Members -->

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
