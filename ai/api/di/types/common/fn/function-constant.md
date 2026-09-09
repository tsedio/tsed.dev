---
title: constant from @tsed/di
description: api documentation of constant from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation constant function
---
# constant - @tsed/di

## Usage

```typescript
import { constant } from "@tsed/di";
```

> See [/packages/di/src/common/fn/constant.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/constant.ts#L0-L0).

## Overview

```ts
function constant<Type>(expression: string): Type | undefined;
export function constant<Type>(expression: string, defaultValue: Type | undefined): Type;
```

-   **expression** (`string`): Dot-notation path to the configuration value (e.g., "logger.level")

-   **defaultValue** (\`\`): default value if the expression is not found

<!-- Description -->

## Description

Get a constant value from the injector configuration settings.

Retrieves a configuration value using dot notation path syntax.
Useful for accessing environment variables, configuration constants, or settings.

### Usage

```typescript
import {constant} from "@tsed/di";

const apiKey = constant<string>("api.key");
const port = constant<number>("server.port", 3000);
const debug = constant<boolean>("logger.debug", false);
```
