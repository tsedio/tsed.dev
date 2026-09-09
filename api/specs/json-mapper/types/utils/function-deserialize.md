---
url: /api/specs/json-mapper/types/utils/function-deserialize.md
description: api documentation of deserialize from @tsed/json-mapper
---

## Usage

```typescript
import { deserialize } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/utils/deserialize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/utils/deserialize.ts#L0-L0).

## Overview

```ts
function deserialize<Model = any>(input: any, options?: JsonDeserializerOptions): Model;
```

## Description

Deserialize arbitrary data into the provided model type using the shared `JsonDeserializer`.

### Example

```ts
import {deserialize} from "@tsed/json-mapper";

const model = deserialize<UserModel>(payload, {type: UserModel, useAlias: true});
```
