---
title: getJsonMapperTypes from @tsed/json-mapper
description: api documentation of getJsonMapperTypes from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation getJsonMapperTypes function
---
# getJsonMapperTypes - @tsed/json-mapper

## Usage

```typescript
import { getJsonMapperTypes } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/domain/JsonMapperTypesContainer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonMapperTypesContainer.ts#L0-L0).

## Overview

```ts
function getJsonMapperTypes(): Map<Type<any> | Symbol | string, JsonMapperMethods>;
```

<!-- Description -->

## Description

Retrieve the registry of custom JSON mapper instances keyed by the types they support.
