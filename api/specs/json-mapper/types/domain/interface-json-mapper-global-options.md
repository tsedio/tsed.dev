---
url: /api/specs/json-mapper/types/domain/interface-json-mapper-global-options.md
description: api documentation of JsonMapperGlobalOptions from @tsed/json-mapper
---

## Usage

```typescript
import { JsonMapperGlobalOptions } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/domain/JsonMapperGlobalOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonMapperGlobalOptions.ts#L0-L0).

## Overview

```ts
interface JsonMapperGlobalOptions {
    additionalProperties?: boolean;
    disableUnsecureConstructor?: boolean;
    strictGroups?: boolean;
}
```

## Description

Shared configuration flags used by both serialization and deserialization flows.

## additionalProperties

```ts
additionalProperties?: boolean;
```

JsonMapper additional property policy. (see [JsonMapper](/docs/json-mapper.md))

## disableUnsecureConstructor

```ts
disableUnsecureConstructor?: boolean;
```

Disable the unsecure constructor injection when the deserialize function is used (by default: false)

## strictGroups

```ts
strictGroups?: boolean;
```

Enable strict Groups configuration when the `options.groups` is undefined. (by default: false)
