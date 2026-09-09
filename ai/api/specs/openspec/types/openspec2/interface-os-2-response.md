---
title: OS2Response from @tsed/openspec
description: api documentation of OS2Response from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS2Response interface
---
# OS2Response - @tsed/openspec

## Usage

```typescript
import { OS2Response } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec2/OS2Response.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Response.ts#L0-L0).

## Overview

```ts
interface OS2Response {
    description: string;
    schema?: OS2Schema;
    headers?: OpenSpecHash<OS2Header>;
    examples?: OpenSpecHash<{}>;
}
```

<!-- Members -->

## description

```ts
description: string;
```

A short description of the response. GFM syntax can be used for rich text representation.

## schema

```ts
schema?: OS2Schema;
```

A definition of the response structure. It can be a primitive, an array or an object. If this field does not exist, it means no content is returned as part of the response. As an extension to the Schema Object, its root type value may also be "file". This SHOULD be accompanied by a relevant produces mime-type.

## headers

```ts
headers?: OpenSpecHash<OS2Header>;
```

A list of headers that are sent with the response.

## examples

```ts
examples?: OpenSpecHash<{}>;
```

An example of the response message.
