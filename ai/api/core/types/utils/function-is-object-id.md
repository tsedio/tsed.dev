---
title: isObjectID from @tsed/core
description: api documentation of isObjectID from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isObjectID function
---
# isObjectID - @tsed/core

## Usage

```typescript
import { isObjectID } from "@tsed/core";
```

> See [/packages/core/src/utils/isMongooseObject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isMongooseObject.ts#L0-L0).

## Overview

```ts
function isObjectID(obj: any): boolean;
```

<!-- Description -->

## Description

Checks if an object is a MongoDB ObjectID by verifying the \_bsontype property.
