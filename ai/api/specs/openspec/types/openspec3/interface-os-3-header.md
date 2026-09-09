---
title: OS3Header from @tsed/openspec
description: api documentation of OS3Header from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3Header interface
---
# OS3Header - @tsed/openspec

## Usage

```typescript
import { OS3Header } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Header.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Header.ts#L0-L0).

## Overview

```ts
interface OS3Header<Schema = OS3Schema> {
    description?: string;
    schema?: Schema | OpenSpecRef;
    externalDocs?: OpenSpecExternalDocs;
}
```

<!-- Members -->

## description

```ts
description?: string;
```

A description of the header. CommonMark syntax MAY be used for rich text representation.

## schema

```ts
schema?: Schema | OpenSpecRef;
```

The schema defining the type used for the header.

## externalDocs

```ts
externalDocs?: OpenSpecExternalDocs;
```

Additional external documentation for this tag.
