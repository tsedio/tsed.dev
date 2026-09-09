---
title: isCollection from @tsed/core
description: api documentation of isCollection from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isCollection function
---
# isCollection - @tsed/core

## Usage

```typescript
import { isCollection } from "@tsed/core";
```

> See [/packages/core/src/utils/isCollection.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isCollection.ts#L0-L0).

## Overview

```ts
function isCollection(target: any): boolean;
```

<!-- Description -->

## Description

Determines whether a value is a collection type (Array, Map, Set, WeakMap, WeakSet).

Checks both the constructor itself and instances of these collection types.
