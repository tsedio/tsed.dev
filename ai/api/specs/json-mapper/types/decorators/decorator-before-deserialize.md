---
title: BeforeDeserialize from @tsed/json-mapper
description: api documentation of BeforeDeserialize from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation BeforeDeserialize decorator
---
# BeforeDeserialize - @tsed/json-mapper

## Usage

```typescript
import { BeforeDeserialize } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/decorators/beforeDeserialize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/decorators/beforeDeserialize.ts#L0-L0).

## Overview

```ts
function BeforeDeserialize(cb: BeforeDeserializeCallback): ClassDecorator;
```

<!-- Description -->

## Description

Call the function before JsonMapper.

### Example

```typescript
@BeforeDeserialize((data: Record<string, unknown>) => { // Before deserialize get the data
   if (data.prop1 === 'VALUE' && data.prop2 !== 'VALUE2') {
     throw BadRequest('MyMessage'); // or throw a ValidationError
   } else {
     data.prop2 = 'VALUE2';
     return data;
   }
})
class Model {
   @Property()
   prop1: string;
   @Property()
   prop2: string;
}
```
