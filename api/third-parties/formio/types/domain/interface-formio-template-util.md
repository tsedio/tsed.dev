---
url: /api/third-parties/formio/types/domain/interface-formio-template-util.md
description: api documentation of FormioTemplateUtil from @tsed/formio
---

## Usage

```typescript
import { FormioTemplateUtil } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioTemplateUtil.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioTemplateUtil.ts#L0-L0).

## Overview

```ts
interface FormioTemplateUtil {
    import: {
        template(template: FormioTemplate, cb: (er: unknown, data: FormioTemplate) => void): void;
    };
    export(options: Partial<FormioExportOptions>, cb: (er: unknown, data: FormioTemplate) => void): void;
}
```

## import

```ts
import: {
     template(template: FormioTemplate, cb: (er: unknown, data: FormioTemplate) => void): void;
 };
```

## export

```ts
export(options: Partial<FormioExportOptions>, cb: (er: unknown, data: FormioTemplate) => void): void;
```
