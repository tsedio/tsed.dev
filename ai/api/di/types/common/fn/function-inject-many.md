---
title: injectMany from @tsed/di
description: api documentation of injectMany from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation injectMany function
---
# injectMany - @tsed/di

## Usage

```typescript
import { injectMany } from "@tsed/di";
```

> See [/packages/di/src/common/fn/injectMany.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/injectMany.ts#L0-L0).

## Overview

```ts
function injectMany<T>(token: string | symbol, opts?: Partial<Pick<InvokeOptions, "useOpts" | "rebuild" | "locals">>): T[];
```

-   **token** (`string` | `symbol`): The injection token or type to resolve

-   **opts** (`Partial<Pick<InvokeOptions`): Optional. invocation options

-   **opts.useOpts** (\`\`): Options passed to instance creation

-   **opts.rebuild** (\`\`): Whether to rebuild instances

-   **opts.locals** (\`\`): Local container overrides

<!-- Description -->

## Description

Inject all providers matching a given token type.

Resolves multiple provider instances that share the same type or group token.
Useful for getting all providers of a specific category (e.g., all controllers, all middleware).

### Usage

```typescript
import {injectMany, ProviderType} from "@tsed/di";

// Get all controllers
const controllers = injectMany(ProviderType.CONTROLLER);

// Get all providers of a custom type
const plugins = injectMany(Symbol.for("PLUGIN"));
```
