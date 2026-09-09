---
url: /api/specs/schema/types/decorators/operations/decorator-location.md
description: api documentation of Location from @tsed/schema
---

## Usage

```typescript
import { Location } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/location.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/location.ts#L0-L0).

## Overview

```ts
function Location(location: string, meta?: JsonHeader): import("./returns.js").ReturnsChainedDecorators;
```

## Description

Sets the response Location HTTP header to the specified path parameter.

```typescript
 @Location('/foo/bar', {description: 'Location to the next step'})
 @Location('http://example.com')
 @Location('back')
 private myMethod() {

 }
```

A path value of “back” has a special meaning, it refers to the URL specified in the `Referer` header of the request. If the `Referer` header was not specified, it refers to “/”.
