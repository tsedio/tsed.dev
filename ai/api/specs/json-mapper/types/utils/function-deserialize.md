---
title: deserialize from @tsed/json-mapper
description: api documentation of deserialize from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation deserialize function
---
# deserialize - @tsed/json-mapper

## Usage

```typescript
import { deserialize } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/utils/deserialize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/utils/deserialize.ts#L0-L0).

## Overview

```ts
function deserialize<Model = any>(input: any, options?: JsonDeserializerOptions): Model;
```

<!-- Description -->

## Description

Deserialize arbitrary data into the provided model type using the shared `JsonDeserializer`.

### Example

```ts
import {deserialize} from "@tsed/json-mapper";

const model = deserialize<UserModel>(payload, {type: UserModel, useAlias: true});
```
