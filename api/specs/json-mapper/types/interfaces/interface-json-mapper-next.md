---
url: /api/specs/json-mapper/types/interfaces/interface-json-mapper-next.md
description: api documentation of JsonMapperNext from @tsed/json-mapper
---

## Usage

```typescript
import { JsonMapperNext } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/interfaces/JsonMapperMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/interfaces/JsonMapperMethods.ts#L0-L0).

## Overview

```ts
interface JsonMapperNext {
    (obj: any): any;
}
```

## Description

Function used to delegate to the next mapper in the chain (e.g., nested serialization).

##

```ts
(obj: any): any;
```
