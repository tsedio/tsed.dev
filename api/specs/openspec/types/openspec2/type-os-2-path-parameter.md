---
url: /api/specs/openspec/types/openspec2/type-os-2-path-parameter.md
description: api documentation of OS2PathParameter from @tsed/openspec
---

## Usage

```typescript
import { OS2PathParameter } from "@tsed/specs/openspec/src/openspec2/OS2Parameter";
```

> See [/packages/specs/openspec/src/openspec2/OS2Parameter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Parameter.ts#L0-L0).

## Overview

```ts
type OS2PathParameter = OS2BaseFormatContrainedParameter & OS2BaseSchema & {
    in: "path";
    required: true;
};
```

## in

```ts
in: "path";
```

## required

```ts
required: true;
```
