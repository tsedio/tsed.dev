---
title: getConfigSources from @tsed/config
description: api documentation of getConfigSources from @tsed/config
meta:
 - name: keywords
   description: api typescript node.js documentation getConfigSources function
---
# getConfigSources - @tsed/config

## Usage

```typescript
import { getConfigSources } from "@tsed/config";
```

> See [/packages/config/core/src/utils/getConfigSources.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/utils/getConfigSources.ts#L0-L0).

## Overview

```ts
function getConfigSources(configSources: (Type<ConfigSource<any>> | ConfigSourceOptions)[]): Map<string, ConfigSourceOptions<any> & {
    instance: ConfigSource<any>;
    data: Record<string, any>;
}>;
```

<!-- Members -->

## instance

```ts
instance: ConfigSource<any>;
```

## data

```ts
data: Record<string, any>;
```
