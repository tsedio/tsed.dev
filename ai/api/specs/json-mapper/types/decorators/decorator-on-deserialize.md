---
title: OnDeserialize from @tsed/json-mapper
description: api documentation of OnDeserialize from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation OnDeserialize decorator
---
# OnDeserialize - @tsed/json-mapper

## Usage

```typescript
import { OnDeserialize } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/decorators/onDeserialize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/decorators/onDeserialize.ts#L0-L0).

## Overview

```ts
function OnDeserialize(cb: OnDeserializeCallback): PropertyDecorator;
```

<!-- Description -->

## Description

Call the function before property deserialization.

### Example

```typescript
class Model {
   @OnDeserialize(v => v + 1)
   property: string;
}
```
