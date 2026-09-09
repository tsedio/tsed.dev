---
url: >-
  /api/third-parties/formio/types/components/class-alter-template-export-steps.md
description: api documentation of AlterTemplateExportSteps from @tsed/formio
---

## Usage

```typescript
import { AlterTemplateExportSteps } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/components/AlterTemplateExportSteps.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/components/AlterTemplateExportSteps.ts#L0-L0).

## Overview

```ts
class AlterTemplateExportSteps implements AlterHook {
    protected database: FormioDatabase;
    transform(queue: any[], template: FormioTemplate, map: any, options: any): any;
    protected exportSubmissions(template: FormioTemplate, map: any, options: any, next: any): Promise<void>;
    protected mapSubmissions(submissions: MongooseDocument<FormioSubmission>[], mapper: FormioMapper): any;
}
```

## protected database

```ts
protected database: FormioDatabase;
```

## transform

```ts
transform(queue: any[], template: FormioTemplate, map: any, options: any): any;
```

## protected exportSubmissions

```ts
protected exportSubmissions(template: FormioTemplate, map: any, options: any, next: any): Promise<void>;
```

## protected mapSubmissions

```ts
protected mapSubmissions(submissions: MongooseDocument<FormioSubmission>[], mapper: FormioMapper): any;
```
