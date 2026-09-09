---
title: PlatformFastifyPluginLoadingOptions from @tsed/platform-fastify
description: api documentation of PlatformFastifyPluginLoadingOptions from @tsed/platform-fastify
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformFastifyPluginLoadingOptions type
---
# PlatformFastifyPluginLoadingOptions - @tsed/platform-fastify

## Usage

```typescript
import { PlatformFastifyPluginLoadingOptions } from "@tsed/platform/platform-fastify/src/interfaces/interfaces";
```

> See [/packages/platform/platform-fastify/src/interfaces/interfaces.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-fastify/src/interfaces/interfaces.ts#L0-L0).

## Overview

```ts
type PlatformFastifyPluginLoadingOptions = {
    env?: Env;
    use: PlatformFastifyPluginTypes;
    options?: FastifyRegisterOptions<FastifyPluginOptions>;
};
```

<!-- Members -->

## env

```ts
env?: Env;
```

## use

```ts
use: PlatformFastifyPluginTypes;
```

## options

```ts
options?: FastifyRegisterOptions<FastifyPluginOptions>;
```
