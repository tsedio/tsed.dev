---
url: /api/specs/json-mapper/types/decorators/decorator-json-mapper.md
description: api documentation of JsonMapper from @tsed/json-mapper
---

## Usage

```typescript
import { JsonMapper } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/decorators/jsonMapper.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/decorators/jsonMapper.ts#L0-L0).

## Overview

```ts
function JsonMapper(...types: (any | Type)[]): ClassDecorator;
```

* **types** (`(any` | `Type)[]`): One or more constructors/symbols handled by the mapper.

## Description

Register a class as the mapper responsible for the given primitive/class tokens.
The decorator instantiates the mapper and stores it inside the JSON mapper types container.

### Example

```ts
@JsonMapper(MyCustomType)
export class MyCustomTypeMapper implements JsonMapperMethods {
  serialize() {/* ... */}
  deserialize() {/* ... */}
}
```
