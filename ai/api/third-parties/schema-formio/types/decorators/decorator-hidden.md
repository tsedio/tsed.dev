---
title: Hidden from @tsed/schema-formio
description: api documentation of Hidden from @tsed/schema-formio
meta:
 - name: keywords
   description: api typescript node.js documentation Hidden decorator
---
# Hidden - @tsed/schema-formio

## Usage

```typescript
import { Hidden } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/hidden.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/hidden.ts#L0-L0).

## Overview

```ts
function Hidden(bool?: boolean): PropertyDecorator;
```

<!-- Description -->

## Description

Set hidden field.

A hidden field is still a part of the form, but is hidden from view.
