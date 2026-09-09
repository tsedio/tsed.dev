---
title: OS2FormDataParameter from @tsed/openspec
description: api documentation of OS2FormDataParameter from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS2FormDataParameter type
---
# OS2FormDataParameter - @tsed/openspec

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

<!-- Members -->

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
