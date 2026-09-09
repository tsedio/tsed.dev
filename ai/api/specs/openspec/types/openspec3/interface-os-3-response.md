---
title: OS3Response from @tsed/openspec
description: api documentation of OS3Response from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3Response interface
---
# OS3Response - @tsed/openspec

## Usage

```typescript
import { OS3Response } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Response.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Response.ts#L0-L0).

## Overview

```ts
interface OS3Response<Schema = OS3Schema, Header = OS3Header<Schema>> {
    description: string;
    headers?: OpenSpecHash<Header>;
    content?: OpenSpecHash<OS3MediaType<Schema>>;
    links?: OpenSpecHash<OS3Link | OpenSpecRef>;
}
```

<!-- Members -->

## description

```ts
description: string;
```

A short description of the response. CommonMark syntax MAY be used for rich text representation.

## headers

```ts
headers?: OpenSpecHash<Header>;
```

Maps a header name to its definition. [RFC7230](https://tools.ietf.org/html/rfc7230#page-22) states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored.

## content

```ts
content?: OpenSpecHash<OS3MediaType<Schema>>;
```

A map containing descriptions of potential response payloads. The key is a media type or [media type range](https://tools.ietf.org/html/rfc7231#appendix-D) and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/\*

## links

```ts
links?: OpenSpecHash<OS3Link | OpenSpecRef>;
```

A map of operations links that can be followed from the response. The key of the map is a short name for the link, following the naming constraints of the names for [Component Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#componentsObject).
