---
url: /api/specs/ajv/types/interfaces/interface-ajv-settings.md
description: api documentation of AjvSettings from @tsed/ajv
---

## Usage

```typescript
import { AjvSettings } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/interfaces/AjvSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/interfaces/AjvSettings.ts#L0-L0).

## Overview

```ts
interface AjvSettings extends Options {
    Ajv?: any;
    errorFormatter?: ErrorFormatter;
    returnsCoercedValues?: boolean;
}
```

## Ajv

```ts
Ajv?: any;
```

## errorFormatter

```ts
errorFormatter?: ErrorFormatter;
```

## returnsCoercedValues

```ts
returnsCoercedValues?: boolean;
```
