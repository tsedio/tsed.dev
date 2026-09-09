---
title: OS3Example from @tsed/openspec
description: api documentation of OS3Example from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3Example interface
---
# OS3Example - @tsed/openspec

## Usage

```typescript
import { OS3Example } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Example.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Example.ts#L0-L0).

## Overview

```ts
interface OS3Example {
    summary?: string;
    description?: string;
    value?: any;
    externalValue?: string;
}
```

<!-- Members -->

## summary

```ts
summary?: string;
```

Short description for the example.

## description

```ts
description?: string;
```

Long description for the example. CommonMark syntax MAY be used for rich text representation.

## value

```ts
value?: any;
```

Embedded literal example. The `value` field and `externalValue` field are mutually exclusive. To represent examples of media types that cannot naturally represented in JSON or YAML, use a string value to contain the example, escaping where necessary.

## externalValue

```ts
externalValue?: string;
```

A URL that points to the literal example. This provides the capability to reference examples that cannot easily be included in JSON or YAML documents.
The `value` field and `externalValue` field are mutually exclusive.
