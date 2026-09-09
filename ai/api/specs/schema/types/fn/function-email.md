---
title: email from @tsed/schema
description: api documentation of email from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation email function
---
# email - @tsed/schema

## Usage

```typescript
import { email } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/email.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/email.ts#L0-L0).

## Overview

```ts
function email(): import("@tsed/schema").JsonSchema<string>;
```

<!-- Description -->

## Description

Declare a new string model with `format: email`.

See [JsonSchema](/ai/api/specs/schema/types/domain/class-json-schema.md) to discover available methods.

### Example

```typescript
const schema = email();
// Results in: { type: "string", format: "email" }
```
