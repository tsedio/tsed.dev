---
title: OS3SecurityApiKey from @tsed/openspec
description: api documentation of OS3SecurityApiKey from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3SecurityApiKey interface
---
# OS3SecurityApiKey - @tsed/openspec

## Usage

```typescript
import { OS3SecurityApiKey } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Security.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Security.ts#L0-L0).

## Overview

```ts
interface OS3SecurityApiKey extends OS3SecurityBase {
    type: "apiKey";
    name: string;
    in: "query" | "header" | "cookie";
}
```

<!-- Members -->

## type

```ts
type: "apiKey";
```

The type of the security scheme

## name

```ts
name: string;
```

The name of the header, query or cookie parameter to be used.

## in

```ts
in: "query" | "header" | "cookie";
```

The location of the API key. Valid values are `query`, `header` or `cookie`.
