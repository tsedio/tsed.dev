---
title: withErrorMsg from @tsed/schema
description: api documentation of withErrorMsg from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation withErrorMsg function
---
# withErrorMsg - @tsed/schema

## Usage

```typescript
import { withErrorMsg } from "@tsed/schema";
```

> See [/packages/specs/schema/src/utils/withErrorMsg.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/utils/withErrorMsg.ts#L0-L0).

## Overview

```ts
function withErrorMsg<Decorator extends (...args: any[]) => any>(errorKey: string, originalDecorator: Decorator): ErrorChainedDecorator<Decorator>;
```
