---
title: TextCase from @tsed/schema-formio
description: api documentation of TextCase from @tsed/schema-formio
meta:
 - name: keywords
   description: api typescript node.js documentation TextCase decorator
---
# TextCase - @tsed/schema-formio

## Usage

```typescript
import { TextCase } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/textCase.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/textCase.ts#L0-L0).

## Overview

```ts
function TextCase(textCase: "uppercase" | "lowercase"): PropertyDecorator;
```

<!-- Description -->

## Description

Force the output of this field to be sanitized in a specific format.
