---
title: withOptions from @tsed/config
description: api documentation of withOptions from @tsed/config
meta:
 - name: keywords
   description: api typescript node.js documentation withOptions function
---
# withOptions - @tsed/config

## Usage

```typescript
import { withOptions } from "@tsed/config";
```

> See [/packages/config/core/src/utils/withOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/utils/withOptions.ts#L0-L0).

## Overview

```ts
function withOptions<Opts>(use: Type<ConfigSource<Opts>>, { name, priority, validationSchema, enabled, refreshOn, watch, ...opts }: InitialConfigSourceOptions & Opts): {
    name: string | undefined;
    priority: number | undefined;
    validationSchema: {
        toJSON(opts: Record<string, unknown>): Record<string, unknown> & {
            required?: string[];
        };
    } | undefined;
    use: Type<ConfigSource<Opts>>;
    watch: boolean | undefined;
    refreshOn: "request" | "response" | undefined;
    enabled: boolean;
    options: Omit<InitialConfigSourceOptions & Opts, "name" | "priority" | "enabled" | "validationSchema" | "watch" | "refreshOn">;
};
```

<!-- Members -->

## name

```ts
name: string | undefined;
```

## priority

```ts
priority: number | undefined;
```

## validationSchema

```ts
validationSchema: {
     toJSON(opts: Record<string, unknown>): Record<string, unknown> & {
         required?: string[];
     };
 } | undefined;
```

## use

```ts
use: Type<ConfigSource<Opts>>;
```

## watch

```ts
watch: boolean | undefined;
```

## refreshOn

```ts
refreshOn: "request" | "response" | undefined;
```

## enabled

```ts
enabled: boolean;
```

## options

```ts
options: Omit<InitialConfigSourceOptions & Opts, "name" | "priority" | "enabled" | "validationSchema" | "watch" | "refreshOn">;
```
