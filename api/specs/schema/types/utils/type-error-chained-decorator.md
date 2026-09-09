---
url: /api/specs/schema/types/utils/type-error-chained-decorator.md
description: api documentation of ErrorChainedDecorator from @tsed/schema
---

## Usage

```typescript
import { ErrorChainedDecorator } from "@tsed/specs/schema/src/utils/withErrorMsg";
```

> See [/packages/specs/schema/src/utils/withErrorMsg.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/utils/withErrorMsg.ts#L0-L0).

## Overview

```ts
type ErrorChainedDecorator<Decorator extends (...args: any[]) => any> = (...args: Parameters<Decorator>) => ErrorChainedMethods<Decorator>;
```
