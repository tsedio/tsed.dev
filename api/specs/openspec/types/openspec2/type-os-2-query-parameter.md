---
url: /api/specs/openspec/types/openspec2/type-os-2-query-parameter.md
description: api documentation of OS2QueryParameter from @tsed/openspec
---

## Usage

```typescript
import { OS2QueryParameter } from "@tsed/specs/openspec/src/openspec2/OS2Parameter";
```

> See [/packages/specs/openspec/src/openspec2/OS2Parameter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Parameter.ts#L0-L0).

## Overview

```ts
type OS2QueryParameter = OS2BaseFormatContrainedParameter & OS2BaseSchema & {
    in: "query";
    allowEmptyValue?: boolean;
    collectionFormat?: ParameterCollectionFormat;
};
```

## in

```ts
in: "query";
```

## allowEmptyValue

```ts
allowEmptyValue?: boolean;
```

## collectionFormat

```ts
collectionFormat?: ParameterCollectionFormat;
```
