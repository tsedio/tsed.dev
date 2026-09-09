---
title: OS3MediaType from @tsed/openspec
description: api documentation of OS3MediaType from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3MediaType interface
---
# OS3MediaType - @tsed/openspec

## Usage

```typescript
import { OS3MediaType } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3MediaType.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3MediaType.ts#L0-L0).

## Overview

```ts
interface OS3MediaType<Schema = OS3Schema> {
    schema?: Schema | OpenSpecRef;
    example?: any;
    examples?: OpenSpecHash<OS3Example | OpenSpecRef>;
    encoding?: OpenSpecHash<OS3Encoding>;
}
```

<!-- Members -->

## schema

```ts
schema?: Schema | OpenSpecRef;
```

The schema defining the type used for the request body.

## example

```ts
example?: any;
```

Example of the media type. The example object SHOULD be in the correct format as specified by the media type. The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema which contains an example, the example value SHALL override the example provided by the schema.

## examples

```ts
examples?: OpenSpecHash<OS3Example | OpenSpecRef>;
```

Examples of the media type. Each example object SHOULD match the media type and specified schema if present. The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema which contains an example, the examples value SHALL override the example provided by the schema.

## encoding

```ts
encoding?: OpenSpecHash<OS3Encoding>;
```

A map between a property name and its encoding information. The key, being the property name, MUST exist in the schema as a property. The encoding object SHALL only apply to requestBody objects when the media type is `multipart` or `application/x-www-form-urlencoded`.
