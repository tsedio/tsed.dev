---
url: /api/specs/openspec/types/openspec2/type-os-2-form-data-parameter.md
description: api documentation of OS2FormDataParameter from @tsed/openspec
---

## Usage

```typescript
import { OS2FormDataParameter } from "@tsed/specs/openspec/src/openspec2/OS2Parameter";
```

> See [/packages/specs/openspec/src/openspec2/OS2Parameter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Parameter.ts#L0-L0).

## Overview

```ts
type OS2FormDataParameter = OS2BaseFormatContrainedParameter & OS2BaseSchema & {
    in: "formData";
    type: OpenSpecTypes;
    allowEmptyValue?: boolean;
    collectionFormat?: ParameterCollectionFormat;
};
```

## in

```ts
in: "formData";
```

## type

```ts
type: OpenSpecTypes;
```

## allowEmptyValue

```ts
allowEmptyValue?: boolean;
```

## collectionFormat

```ts
collectionFormat?: ParameterCollectionFormat;
```
