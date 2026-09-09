---
title: getObjectProperties from @tsed/json-mapper
description: api documentation of getObjectProperties from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation getObjectProperties function
---
# getObjectProperties - @tsed/json-mapper

## Usage

```typescript
import { getObjectProperties } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/utils/getObjectProperties.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/utils/getObjectProperties.ts#L0-L0).

## Overview

```ts
function getObjectProperties(obj: any): [string, any][];
```

<!-- Description -->

## Description

Return enumerable entries of an object while skipping function values (methods/getters).
