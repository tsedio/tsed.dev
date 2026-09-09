---
url: /api/third-parties/formio/types/domain/interface-formio-js.md
description: api documentation of FormioJs from @tsed/formio
---

## Usage

```typescript
import { FormioJs } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioJs.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioJs.ts#L0-L0).

## Overview

```ts
interface FormioJs {
    forms: Record<string, any>;
    cache: Record<string, any>;
    Components: {
        components: {
            component: {
                Validator: {
                    db: any | null;
                    token: any | null;
                    form: any | null;
                    submission: any | null;
                };
            };
        };
    };
    getToken(): string;
}
```

## forms

```ts
forms: Record<string, any>;
```

## cache

```ts
cache: Record<string, any>;
```

## Components

```ts
Components: {
     components: {
         component: {
             Validator: {
                 db: any | null;
                 token: any | null;
                 form: any | null;
                 submission: any | null;
             };
         };
     };
 };
```

## getToken

```ts
getToken(): string;
```
