---
title: Component from @tsed/schema-formio
description: api documentation of Component from @tsed/schema-formio
meta:
 - name: keywords
   description: api typescript node.js documentation Component decorator
---
# Component - @tsed/schema-formio

## Usage

```typescript
import { Component } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/component.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/component.ts#L0-L0).

## Overview

```ts
function Component(component: Record<string, any>): PropertyDecorator;
```

<!-- Description -->

## Description

Declare a formio Component schema on the decorated propertyKey.
