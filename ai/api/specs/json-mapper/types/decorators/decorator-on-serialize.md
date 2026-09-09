---
title: OnSerialize from @tsed/json-mapper
description: api documentation of OnSerialize from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation OnSerialize decorator
---
# OnSerialize - @tsed/json-mapper

## Usage

```typescript
import { OnSerialize } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/decorators/onSerialize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/decorators/onSerialize.ts#L0-L0).

## Overview

```ts
function OnSerialize(cb: OnSerializeCallback): PropertyDecorator;
```

<!-- Description -->

## Description

Call the function before property serialization.

### Example

```typescript
class Model {
   @OnSerialize(v => v + 1)
   property: string;
}
```
