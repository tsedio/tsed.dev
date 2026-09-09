---
title: getRandomId from @tsed/core
description: api documentation of getRandomId from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation getRandomId function
---
# getRandomId - @tsed/core

## Usage

```typescript
import { getRandomId } from "@tsed/core";
```

> See [/packages/core/src/utils/getRandomId.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/getRandomId.ts#L0-L0).

## Overview

```ts
function getRandomId(): string;
```

<!-- Description -->

## Description

Generates a random identifier string starting with 'e'.

Uses base-36 encoding of a random number to create a unique identifier.
