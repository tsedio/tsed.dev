---
url: >-
  /api/third-parties/formio/types/components/class-alter-template-import-steps.md
description: api documentation of AlterTemplateImportSteps from @tsed/formio
---

## Usage

```typescript
import { AlterTemplateImportSteps } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/components/AlterTemplateImportSteps.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/components/AlterTemplateImportSteps.ts#L0-L0).

## Overview

```ts
class AlterTemplateImportSteps implements AlterHook {
    protected database: FormioDatabase;
    transform(queue: any[], install: Function, template: Partial<FormioTemplate>): any;
    protected importSubmissions(template: Partial<FormioTemplate>, done: any): Promise<void>;
    protected importSubmission(submission: Partial<FormioSubmission>, mapper: FormioMapper): Promise<any>;
}
```

## protected database

```ts
protected database: FormioDatabase;
```

## transform

```ts
transform(queue: any[], install: Function, template: Partial<FormioTemplate>): any;
```

## protected importSubmissions

```ts
protected importSubmissions(template: Partial<FormioTemplate>, done: any): Promise<void>;
```

## protected importSubmission

```ts
protected importSubmission(submission: Partial<FormioSubmission>, mapper: FormioMapper): Promise<any>;
```
