---
url: /api/specs/schema/types/decorators/operations/decorator-content-type.md
description: api documentation of ContentType from @tsed/schema
---

## Usage

```typescript
import { ContentType } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/contentType.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/contentType.ts#L0-L0).

## Overview

```ts
function ContentType(type: string): import("./returns.js").ReturnsChainedDecorators;
```

## Description

Sets the Content-Type HTTP header to the MIME type as determined by mime.lookup() for the specified type.
If type contains the “/” character, then it sets the `Content-Type` to type.

```typescript
 @ContentType('.html');              // => 'text/html'
 @ContentType('html');               // => 'text/html'
 @ContentType('json');               // => 'application/json'
 @ContentType('application/json');   // => 'application/json'
 @ContentType('png');                // => image/png
 private myMethod() {}
```
