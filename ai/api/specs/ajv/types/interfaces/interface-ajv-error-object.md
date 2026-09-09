---
title: AjvErrorObject from @tsed/ajv
description: api documentation of AjvErrorObject from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation AjvErrorObject interface
---
# AjvErrorObject - @tsed/ajv

## Usage

```typescript
import { AjvErrorObject } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/interfaces/AjvSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/interfaces/AjvSettings.ts#L0-L0).

## Overview

```ts
interface AjvErrorObject extends ErrorObject {
    modelName: string;
    collectionName?: string;
}
```

<!-- Members -->

## modelName

```ts
modelName: string;
```

## collectionName

```ts
collectionName?: string;
```
