---
title: GenerateSpecOptions from @tsed/schema
description: api documentation of GenerateSpecOptions from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation GenerateSpecOptions interface
---
# GenerateSpecOptions - @tsed/schema

## Usage

```typescript
import { GenerateSpecOptions } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/oas/generateSpec.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/oas/generateSpec.ts#L0-L0).

## Overview

```ts
interface GenerateSpecOptions extends Omit<SpecSerializerOptions, "specType"> {
    tokens: JsonTokenOptions;
    version?: string;
    acceptMimes?: string;
    specVersion?: string;
    spec?: any;
    fileSpec?: any;
    sortPaths?: boolean;
}
```

<!-- Members -->

## tokens

```ts
tokens: JsonTokenOptions;
```

## version

```ts
version?: string;
```

## acceptMimes

```ts
acceptMimes?: string;
```

## specVersion

```ts
specVersion?: string;
```

## spec

```ts
spec?: any;
```

## fileSpec

```ts
fileSpec?: any;
```

## sortPaths

```ts
sortPaths?: boolean;
```
