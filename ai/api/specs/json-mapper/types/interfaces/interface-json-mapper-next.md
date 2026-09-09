---
title: JsonMapperNext from @tsed/json-mapper
description: api documentation of JsonMapperNext from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation JsonMapperNext interface
---
# JsonMapperNext - @tsed/json-mapper

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

<!-- Description -->

## Description

Function used to delegate to the next mapper in the chain (e.g., nested serialization).

<!-- Members -->

##

```ts
(obj: any): any;
```
