---
title: FormioDatabase from @tsed/formio
description: api documentation of FormioDatabase from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioDatabase class
---
# FormioDatabase - @tsed/formio

## Usage

```typescript
import { FormioDatabase } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/services/FormioDatabase.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/services/FormioDatabase.ts#L0-L0).

## Overview

```ts
class FormioDatabase {
    protected formio: FormioService;
    get models(): import("mongoose").Models;
    get roleModel(): MongooseModel<FormioRole>;
    get formModel(): MongooseModel<FormioForm>;
    get actionModel(): MongooseModel<FormioAction>;
    get submissionModel(): MongooseModel<FormioSubmission>;
    get tokenModel(): MongooseModel<FormioToken>;
    get actionItemModel(): MongooseModel<FormioActionItem>;
    getFormioMapper(): Promise<FormioMapper>;
    hasForms(): Promise<boolean>;
    hasForm(name: string): Promise<boolean>;
    getForm(nameOrId: string): Promise<(import("mongoose").FlattenMaps<import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>>> & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null>;
    importFormIfNotExists(form: FormioForm, onCreate?: (form: FormioForm) => any): Promise<(import("mongoose").FlattenMaps<import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>>> & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null>;
    importForm(form: FormioForm): Promise<import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>> & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    saveForm(form: FormioForm): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>> & Required<{
        _id: string;
    }> & {
        __v: number;
    }, import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>> & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>>, "findOneAndUpdate", {}>;
    getSubmissions<Data>(query?: FilterQuery<MongooseModel<FormioSubmission<Data>>>): Promise<MongooseDocument<FormioSubmission<Data>>[]>;
    importSubmission<Data = any>(submission: Omit<Partial<FormioSubmission<Data>>, "form"> & {
        form?: any;
    }): Promise<import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>> & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    saveSubmission<Data = any>(submission: Partial<FormioSubmission<Data>>): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>> & Required<{
        _id: string;
    }> & {
        __v: number;
    }, import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>> & Required<{
        _id: string;
    }> & {
        __v: number;
    }, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>>, "findOneAndUpdate", {}>;
    idToBson(form?: any): any;
}
```

<!-- Members -->

## protected formio

```ts
protected formio: FormioService;
```

## get models

```ts
get models(): import("mongoose").Models;
```

## get roleModel

```ts
get roleModel(): MongooseModel<FormioRole>;
```

## get formModel

```ts
get formModel(): MongooseModel<FormioForm>;
```

## get actionModel

```ts
get actionModel(): MongooseModel<FormioAction>;
```

## get submissionModel

```ts
get submissionModel(): MongooseModel<FormioSubmission>;
```

## get tokenModel

```ts
get tokenModel(): MongooseModel<FormioToken>;
```

## get actionItemModel

```ts
get actionItemModel(): MongooseModel<FormioActionItem>;
```

## getFormioMapper

```ts
getFormioMapper(): Promise<FormioMapper>;
```

## hasForms

```ts
hasForms(): Promise<boolean>;
```

## hasForm

```ts
hasForm(name: string): Promise<boolean>;
```

## getForm

```ts
getForm(nameOrId: string): Promise<(import("mongoose").FlattenMaps<import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>>> & Required<{
     _id: string;
 }> & {
     __v: number;
 }) | null>;
```

## importFormIfNotExists

```ts
importFormIfNotExists(form: FormioForm, onCreate?: (form: FormioForm) => any): Promise<(import("mongoose").FlattenMaps<import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>>> & Required<{
     _id: string;
 }> & {
     __v: number;
 }) | null>;
```

Import form previously exported by export tool.
This method transform alias to a real mongoose \_id

## importForm

```ts
importForm(form: FormioForm): Promise<import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>> & Required<{
     _id: string;
 }> & {
     __v: number;
 }>;
```

Import form previously exported by export tool.
This method transform alias to a real mongoose \_id

## saveForm

```ts
saveForm(form: FormioForm): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>> & Required<{
     _id: string;
 }> & {
     __v: number;
 }, import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>> & Required<{
     _id: string;
 }> & {
     __v: number;
 }, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioForm & import("@tsed/mongoose").MongooseDocumentMethods<FormioForm>>, "findOneAndUpdate", {}>;
```

## getSubmissions

```ts
getSubmissions<Data>(query?: FilterQuery<MongooseModel<FormioSubmission<Data>>>): Promise<MongooseDocument<FormioSubmission<Data>>[]>;
```

## importSubmission

```ts
importSubmission<Data = any>(submission: Omit<Partial<FormioSubmission<Data>>, "form"> & {
     form?: any;
 }): Promise<import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>> & Required<{
     _id: string;
 }> & {
     __v: number;
 }>;
```

Import submission previously exported by export tool.
This method transform alias to a real mongoose \_id

## saveSubmission

```ts
saveSubmission<Data = any>(submission: Partial<FormioSubmission<Data>>): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>> & Required<{
     _id: string;
 }> & {
     __v: number;
 }, import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>> & Required<{
     _id: string;
 }> & {
     __v: number;
 }, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>>, "findOneAndUpdate", {}>;
```

## idToBson

```ts
idToBson(form?: any): any;
```
