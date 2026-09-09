---
title: AfterDeserialize from @tsed/json-mapper
description: api documentation of AfterDeserialize from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation AfterDeserialize decorator
---
# AfterDeserialize - @tsed/json-mapper

## Usage

```typescript
import { AfterDeserialize } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/decorators/afterDeserialize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/decorators/afterDeserialize.ts#L0-L0).

## Overview

```ts
function AfterDeserialize(cb: AfterDeserializeCallback): ClassDecorator;
```

<!-- Description -->

## Description

Call the function after JsonMapper.

### Example

```typescript
@AfterDeserialize((data: Model) => { // After deserialize get the instance class
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
