---
url: /api/core/types/utils/function-decorator-args.md
description: api documentation of decoratorArgs from @tsed/core
---

## Usage

```typescript
import { decoratorArgs } from "@tsed/core";
```

> See [/packages/core/src/utils/decoratorArgs.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/decoratorArgs.ts#L0-L0).

## Overview

```ts
function decoratorArgs(target: any, propertyKey: string): DecoratorParameters;
```

## Description

Constructs decorator parameters (target, propertyKey, descriptor) for a given class member.

Retrieves the property descriptor and returns a tuple compatible with decorator signatures.
