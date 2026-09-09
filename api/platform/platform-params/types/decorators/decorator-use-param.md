---
url: /api/platform/platform-params/types/decorators/decorator-use-param.md
description: api documentation of UseParam from @tsed/platform-params
---

## Usage

```typescript
import { UseParam } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/useParam.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/useParam.ts#L0-L0).

## Overview

```ts
function UseParam(options: Partial<ParamOptions>): ParameterDecorator;
```

## Description

Register a new param. It uses the paramType to extract value and give it to the next pipe.

Given options allow to enable or disable following pipes:

* useType: Add extra type for the json mapper,
* expression: Get property from the returned value by the previous pipe.
* useValidation: Apply validation from the returned value by the previous pipe.
* useMapper: Apply json mapper from the returned value by the previous pipe.
