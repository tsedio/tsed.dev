---
url: /api/specs/schema/types/decorators/common/decorator-required-groups.md
description: api documentation of RequiredGroups from @tsed/schema
---

## Usage

```typescript
import { RequiredGroups } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/requiredGroups.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/requiredGroups.ts#L0-L0).

## Overview

```ts
function RequiredGroups(...groups: string[]): PropertyDecorator;
```

## Description

Apply groups validation strategy for required property.
