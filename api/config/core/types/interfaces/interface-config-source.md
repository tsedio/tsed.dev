---
url: /api/config/core/types/interfaces/interface-config-source.md
description: api documentation of ConfigSource from @tsed/config
---

## Usage

```typescript
import { ConfigSource } from "@tsed/config";
```

> See [/packages/config/core/src/interfaces/ConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/interfaces/ConfigSource.ts#L0-L0).

## Overview

```ts
interface ConfigSource<Opts = any> {
    options: Opts;
    $onInit?(): Promise<void> | void;
    $onDestroy?(): Promise<void> | void;
    getAll(): Promise<Record<string, unknown>> | Record<string, unknown>;
    watch?(onChange?: ConfigSourceOnChangeCB): Promise<ConfigSourceWatchCloseCB> | ConfigSourceWatchCloseCB | void | Promise<void>;
}
```

## Description

Interface for a configuration source that can provide configuration values.

## options

```ts
options: Opts;
```

## $onInit

```ts
$onInit?(): Promise<void> | void;
```

## $onDestroy

```ts
$onDestroy?(): Promise<void> | void;
```

## getAll

```ts
getAll(): Promise<Record<string, unknown>> | Record<string, unknown>;
```

Load configuration from the source.

## watch

```ts
watch?(onChange?: ConfigSourceOnChangeCB): Promise<ConfigSourceWatchCloseCB> | ConfigSourceWatchCloseCB | void | Promise<void>;
```
