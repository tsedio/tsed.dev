---
url: /api/specs/openspec/types/openspec3/interface-os-3-request-body.md
description: api documentation of OS3RequestBody from @tsed/openspec
---

## Usage

```typescript
import { OS3RequestBody } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3RequestBody.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3RequestBody.ts#L0-L0).

## Overview

```ts
interface OS3RequestBody<Schema = OS3Schema> {
    description?: string;
    content?: OpenSpecHash<OS3MediaType<Schema>>;
    required?: boolean;
    examples?: OpenSpecHash<OS3Example | OpenSpecRef>;
}
```

## description

```ts
description?: string;
```

A brief description of the request body. This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

## content

```ts
content?: OpenSpecHash<OS3MediaType<Schema>>;
```

A map containing descriptions of potential request body. The key is a media type or [media type range](https://tools.ietf.org/html/rfc7231#appendix-D) and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/\*

## required

```ts
required?: boolean;
```

Determines if the request body is required in the request. Defaults to false.

## examples

```ts
examples?: OpenSpecHash<OS3Example | OpenSpecRef>;
```
