---
title: isStream from @tsed/core
description: api documentation of isStream from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isStream function
---
# isStream - @tsed/core

## Usage

```typescript
import { isStream } from "@tsed/core";
```

> See [/packages/core/src/utils/isStream.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isStream.ts#L0-L0).

## Overview

```ts
function isStream(obj: any): boolean;
```

<!-- Description -->

## Description

Checks if an object is a Node.js stream by verifying the pipe method exists.
