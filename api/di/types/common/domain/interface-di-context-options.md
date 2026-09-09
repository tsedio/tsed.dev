---
url: /api/di/types/common/domain/interface-di-context-options.md
description: api documentation of DIContextOptions from @tsed/di
---

## Usage

```typescript
import { DIContextOptions } from "@tsed/di";
```

> See [/packages/di/src/common/domain/DIContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/DIContext.ts#L0-L0).

## Overview

```ts
interface DIContextOptions extends Omit<ContextLoggerOptions, "dateStart"> {
    id: string;
    platform?: string;
}
```

## Description

Options for creating a DI context instance.

## id

```ts
id: string;
```

## platform

```ts
platform?: string;
```
