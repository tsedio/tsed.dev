---
title: OpenSpecExternalDocs from @tsed/openspec
description: api documentation of OpenSpecExternalDocs from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OpenSpecExternalDocs interface
---
# OpenSpecExternalDocs - @tsed/openspec

## Usage

```typescript
import { OpenSpecExternalDocs } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/common/OpenSpecExternalDocs.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/common/OpenSpecExternalDocs.ts#L0-L0).

## Overview

```ts
interface OpenSpecExternalDocs {
    url: string;
    description?: string;
}
```

<!-- Members -->

## url

```ts
url: string;
```

The URL for the target documentation. Value MUST be in the format of a URL.

## description

```ts
description?: string;
```

A short description of the target documentation. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
