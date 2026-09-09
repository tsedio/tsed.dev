---
url: /api/specs/json-mapper/types/utils/function-serialize.md
description: api documentation of serialize from @tsed/json-mapper
---

## Usage

```typescript
import { serialize } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/utils/serialize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/utils/serialize.ts#L0-L0).

## Overview

```ts
function serialize(input: any, options?: JsonSerializerOptions): any;
```

## Description

Serialize any value using the shared `JsonSerializer` instance.
Respects schema metadata, hooks, aliases, and registered custom mappers.

### Example

```ts
import {serialize} from "@tsed/json-mapper";

const payload = serialize(model, {type: UserModel, useAlias: true});
```
