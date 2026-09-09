---
title: DIContextOptions from @tsed/di
description: api documentation of DIContextOptions from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation DIContextOptions interface
---
# DIContextOptions - @tsed/di

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

<!-- Description -->

## Description

Options for creating a DI context instance.

<!-- Members -->

## id

```ts
id: string;
```

## platform

```ts
platform?: string;
```
