---
url: /api/third-parties/formio/types/builder/class-formio-mapper.md
description: api documentation of FormioMapper from @tsed/formio
---

## Usage

```typescript
import { FormioMapper } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/builder/FormioMapper.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/builder/FormioMapper.ts#L0-L0).

## Overview

```ts
class FormioMapper {
    readonly ctxData: FormioCtxMapper;
    constructor(ctxData: FormioCtxMapper);
    find(key: string): any;
    findId(data: string): any;
    findMachineName(data: any): string | undefined;
    mapToExport(data: any): any;
    mapToImport(data: any): any;
    mapData(data: any, resolver: any): any;
}
```

## readonly ctxData

```ts
readonly ctxData: FormioCtxMapper;
```

## find

```ts
find(key: string): any;
```

## findId

```ts
findId(data: string): any;
```

## findMachineName

```ts
findMachineName(data: any): string | undefined;
```

## mapToExport

```ts
mapToExport(data: any): any;
```

## mapToImport

```ts
mapToImport(data: any): any;
```

## mapData

```ts
mapData(data: any, resolver: any): any;
```
