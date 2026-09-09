---
url: /api/third-parties/formio/types/domain/interface-formio-decoded-token.md
description: api documentation of FormioDecodedToken from @tsed/formio
---

## Usage

```typescript
import { FormioDecodedToken } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioDecodedToken.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioDecodedToken.ts#L0-L0).

## Overview

```ts
interface FormioDecodedToken extends Record<string, unknown> {
    user: {
        _id: string;
    };
    form: {
        _id: string;
    };
}
```

## user

```ts
user: {
     _id: string;
 };
```

## form

```ts
form: {
     _id: string;
 };
```
