---
url: /api/config/core/types/utils/function-get-config-sources.md
description: api documentation of getConfigSources from @tsed/config
---

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

## instance

```ts
instance: ConfigSource<any>;
```

## data

```ts
data: Record<string, any>;
```
