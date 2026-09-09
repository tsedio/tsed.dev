---
title: ErrorChainedDecorator from @tsed/schema
description: api documentation of ErrorChainedDecorator from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation ErrorChainedDecorator type
---
# ErrorChainedDecorator - @tsed/schema

## Usage

```typescript
import { ErrorChainedDecorator } from "@tsed/specs/schema/src/utils/withErrorMsg";
```

> See [/packages/specs/schema/src/utils/withErrorMsg.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/utils/withErrorMsg.ts#L0-L0).

## Overview

```ts
type ErrorChainedDecorator<Decorator extends (...args: any[]) => any> = (...args: Parameters<Decorator>) => ErrorChainedMethods<Decorator>;
```
