---
title: ConfigSourceOptions from @tsed/config
description: api documentation of ConfigSourceOptions from @tsed/config
meta:
 - name: keywords
   description: api typescript node.js documentation ConfigSourceOptions interface
---
# ConfigSourceOptions - @tsed/config

## Usage

```typescript
import { ConfigSourceOptions } from "@tsed/config";
```

> See [/packages/config/core/src/interfaces/ConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/interfaces/ConfigSource.ts#L0-L0).

## Overview

```ts
interface ConfigSourceOptions<Opts = any> {
    name?: string;
    priority?: number;
    enabled?: boolean;
    use: Type<ConfigSource<Opts>>;
    options: Opts;
    validationSchema?: {
        toJSON(opts: Record<string, unknown>): Record<string, unknown> & {
            required?: string[];
        };
    };
    watch?: boolean;
    refreshOn?: "request" | "response";
}
```

<!-- Members -->

## name

```ts
name?: string;
```

The name of the configuration provider.

## priority

```ts
priority?: number;
```

The priority of the configuration provider. Higher priority providers will override values from lower priority providers.

## enabled

```ts
enabled?: boolean;
```

Whether to enable the configuration provider.

## use

```ts
use: Type<ConfigSource<Opts>>;
```

The ConfigSource to use for loading configuration values.

## options

```ts
options: Opts;
```

Options for the configuration provider.

## validationSchema

```ts
validationSchema?: {
     toJSON(opts: Record<string, unknown>): Record<string, unknown> & {
         required?: string[];
     };
 };
```

A JsonSchema instance to validate the configuration values against.

## watch

```ts
watch?: boolean;
```

Enable FileSystem Watch mode. ConfigSource must implement the `watch()` method.

## refreshOn

```ts
refreshOn?: "request" | "response";
```

Refresh strategy. Ts.ED can refresh ConfigSource during the "$onRequest" or "$onResponse" hook.

Note: refresh data during `$onRequest` can degrade performance depending on the ConfigSource type.
We recommend to refresh data during the $onResponse hook (action are asynchronous).
