---
title: OS2BaseParameter from @tsed/openspec
description: api documentation of OS2BaseParameter from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS2BaseParameter type
---
# OS2BaseParameter - @tsed/openspec

## Usage

```typescript
import { OS2BaseParameter } from "@tsed/specs/openspec/src/openspec2/OS2Parameter";
```

> See [/packages/specs/openspec/src/openspec2/OS2Parameter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Parameter.ts#L0-L0).

## Overview

```ts
type OS2BaseParameter = {
    name: string;
    in: "body" | "query" | "path" | "header" | "formData";
    required?: boolean;
    description?: string;
};
```

<!-- Members -->

## name

```ts
name: string;
```

## in

```ts
in: "body" | "query" | "path" | "header" | "formData";
```

## required

```ts
required?: boolean;
```

## description

```ts
description?: string;
```
