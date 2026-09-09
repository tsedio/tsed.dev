---
url: /api/third-parties/formio/types/services/class-formio-repository.md
description: api documentation of FormioRepository from @tsed/formio
---

## Usage

```typescript
import { FormioRepository } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/services/FormioRepository.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/services/FormioRepository.ts#L0-L0).

## Overview

```ts
abstract class FormioRepository<SubmissionData = any> {
    protected formioDatabase: FormioDatabase;
    protected abstract formName: string;
    getFormId(): Promise<string>;
    saveSubmission(submission: Omit<Partial<FormioSubmission<SubmissionData>>, "form"> & {
        form?: any;
    }): Promise<import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>> & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    getSubmissions(query?: FilterQuery<MongooseModel<FormioSubmission<SubmissionData>>>): Promise<MongooseDocument<FormioSubmission<SubmissionData>>[]>;
    findOneSubmission(query: any): Promise<MongooseDocument<FormioSubmission<SubmissionData>> | undefined>;
}
```

## protected formioDatabase

```ts
protected formioDatabase: FormioDatabase;
```

## protected abstract formName

```ts
protected abstract formName: string;
```

## getFormId

```ts
getFormId(): Promise<string>;
```

## saveSubmission

```ts
saveSubmission(submission: Omit<Partial<FormioSubmission<SubmissionData>>, "form"> & {
     form?: any;
 }): Promise<import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>> & Required<{
     _id: string;
 }> & {
     __v: number;
 }>;
```

## getSubmissions

```ts
getSubmissions(query?: FilterQuery<MongooseModel<FormioSubmission<SubmissionData>>>): Promise<MongooseDocument<FormioSubmission<SubmissionData>>[]>;
```

## findOneSubmission

```ts
findOneSubmission(query: any): Promise<MongooseDocument<FormioSubmission<SubmissionData>> | undefined>;
```
