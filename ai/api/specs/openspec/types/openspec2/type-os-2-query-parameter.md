---
title: OS2QueryParameter from @tsed/openspec
description: api documentation of OS2QueryParameter from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS2QueryParameter type
---
# OS2QueryParameter - @tsed/openspec

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

<!-- Members -->

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
