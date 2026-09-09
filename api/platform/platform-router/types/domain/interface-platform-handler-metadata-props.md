---
url: >-
  /api/platform/platform-router/types/domain/interface-platform-handler-metadata-props.md
description: api documentation of PlatformHandlerMetadataProps from @tsed/platform-router
---

## Usage

```typescript
import { PlatformHandlerMetadataProps } from "@tsed/platform-router";
```

> See [/packages/platform/platform-router/src/domain/PlatformHandlerMetadata.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-router/src/domain/PlatformHandlerMetadata.ts#L0-L0).

## Overview

```ts
interface PlatformHandlerMetadataProps {
    provider?: Provider;
    handler?: any;
    opts?: PlatformHandlerMetadataOpts;
    propertyKey?: string | symbol;
    type?: PlatformHandlerType;
}
```

## provider

```ts
provider?: Provider;
```

## handler

```ts
handler?: any;
```

## opts

```ts
opts?: PlatformHandlerMetadataOpts;
```

## propertyKey

```ts
propertyKey?: string | symbol;
```

## type

```ts
type?: PlatformHandlerType;
```
