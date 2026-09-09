---
title: FormioHooks from @tsed/formio
description: api documentation of FormioHooks from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioHooks interface
---
# FormioHooks - @tsed/formio

## Usage

```typescript
import { FormioHooks } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioHooks.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioHooks.ts#L0-L0).

## Overview

```ts
interface FormioHooks {
    settings?: (settings: FormioSettings, req: Request, cb: Function) => FormioSettings;
    alter?: {
        alias?: (alias: string, req: Request, res: Response) => string;
        configFormio?: (formIo: {
            Formio: FormioJs;
        }) => void;
        updateConfig?: (config: FormioConfig) => FormioConfig;
        audit?: (info: any[], event: string, req: Request) => void;
        log?: (event: string, req: Request, ...info: string[]) => void;
        actions?: (actions: FormioActions) => FormioActions;
        skip?: (value: boolean, req: Request) => boolean;
        host?: (baseUrl: string, req: Request) => string;
        path?: (path: string, req: Request) => any;
        methods?: (methods: string[]) => string[];
        cors?: () => Record<string, any>;
        currentUser?: (user: any) => any;
        currentForm?: (form: FormioForm) => FormioForm;
        formio?: (formio: Formio) => Formio;
        models?: (models: FormioModelsModels) => FormioModelsModels;
        resources?: (resources: {
            form: any;
            submission: any;
            role: any;
        }) => any;
        resourceAccessFilter?: (search: any, req: Request, done: (err: unknown, newSearch: any) => void) => void;
        actionMachineName?: (name: string, document: MongooseDocument<any>, done: Function) => void;
        formMachineName?: (name: string, document: MongooseDocument<any>, done: Function) => void;
        roleMachineName?: (name: string, document: MongooseDocument<any>, done: Function) => void;
        actionSchema?: (schema: Schema) => Schema;
        actionItemSchema?: (schema: Schema) => Schema;
        formSchema?: (schema: Schema) => Schema;
        roleSchema?: (schema: Schema) => Schema;
        schemaSchema?: (schema: Schema) => Schema;
        submissionSchema?: (schema: Schema | SchemaDefinition) => Schema;
        tokenSchema?: (schema: Schema) => Schema;
        permissionSchema?: (schema: SchemaDefinition) => SchemaDefinition;
        fieldMatchAccessPermissionSchema?: (schemaOptions: SchemaDefinition) => SchemaDefinition;
        actionsQuery?: <DocType = any>(query: FilterQuery<DocType>, req: Request) => FilterQuery<DocType>;
        submissionQuery?: <DocType = any>(query: FilterQuery<DocType>, req: Request) => FilterQuery<DocType>;
        roleQuery?: <DocType = any>(query: FilterQuery<DocType>, req: Request) => FilterQuery<DocType>;
        formQuery?: <DocType = any>(query: FilterQuery<DocType>, req: Request) => FilterQuery<DocType>;
        actionItem?: (actionItem: FormioActionItem, req: Request) => FormioActionItem;
        actionContext?: (actionContext: any, req: Request) => any;
        actionInfo?: (action: any, req: Request) => any;
        submission?: (req: Request, res: Response, done: Function) => void;
        submissionRequest?: (submission: FormioSubmission) => FormioSubmission;
        validateSubmissionForm?: (form: FormioForm, submission: FormioSubmission, done: Function) => void;
        postSubmissionUpdate?: (req: Request, res: Response, submissionUpdate: FormioSubmission) => void;
        formResponse?: (item: any, req: Request, done: Function) => void;
        requestParams?: (req: Request & {
            formId: string;
            subId: string;
            roleId: string;
        }, params: Record<string, any>) => void;
        submissionParams?: (params: string[]) => string[];
        actionRoutes?: (options: ResourceRestOptions) => ResourceRestOptions;
        rolesRoutes?: (options: ResourceRestOptions) => ResourceRestOptions;
        formRoutes?: (options: ResourceRestOptions) => ResourceRestOptions;
        submissionRoutes?: (options: ResourceRestOptions) => ResourceRestOptions;
        user?: (user: any, done: (err: any, user: any) => void) => void;
        login?: (user: any, req: Request, done: (err: any) => void) => void;
        token?: (token: FormioDecodedToken, form: FormioForm, req: Request) => FormioDecodedToken;
        tokenDecode?: (token: FormioDecodedToken, req: Request, done: (err: any, decoded: FormioDecodedToken) => void) => void;
        submissionRequestTokenQuery?: (query: {
            formId: string;
            submissionId: string;
        }, token: string) => any;
        [key: string]: any;
    };
    on?: {
        init?: (type: FormioInitEvent) => boolean;
        [key: string]: any;
    };
}
```

<!-- Members -->

## settings:

```ts
settings?: (settings: FormioSettings, req: Request, cb: Function) => FormioSettings;
```

## alter

```ts
alter?: {
     alias?: (alias: string, req: Request, res: Response) => string;
     configFormio?: (formIo: {
         Formio: FormioJs;
     }) => void;
     updateConfig?: (config: FormioConfig) => FormioConfig;
     audit?: (info: any[], event: string, req: Request) => void;
     log?: (event: string, req: Request, ...info: string[]) => void;
     actions?: (actions: FormioActions) => FormioActions;
     skip?: (value: boolean, req: Request) => boolean;
     host?: (baseUrl: string, req: Request) => string;
     path?: (path: string, req: Request) => any;
     methods?: (methods: string[]) => string[];
     cors?: () => Record<string, any>;
     currentUser?: (user: any) => any;
     currentForm?: (form: FormioForm) => FormioForm;
     formio?: (formio: Formio) => Formio;
     models?: (models: FormioModelsModels) => FormioModelsModels;
     resources?: (resources: {
         form: any;
         submission: any;
         role: any;
     }) => any;
     resourceAccessFilter?: (search: any, req: Request, done: (err: unknown, newSearch: any) => void) => void;
     actionMachineName?: (name: string, document: MongooseDocument<any>, done: Function) => void;
     formMachineName?: (name: string, document: MongooseDocument<any>, done: Function) => void;
     roleMachineName?: (name: string, document: MongooseDocument<any>, done: Function) => void;
     actionSchema?: (schema: Schema) => Schema;
     actionItemSchema?: (schema: Schema) => Schema;
     formSchema?: (schema: Schema) => Schema;
     roleSchema?: (schema: Schema) => Schema;
     schemaSchema?: (schema: Schema) => Schema;
     submissionSchema?: (schema: Schema | SchemaDefinition) => Schema;
     tokenSchema?: (schema: Schema) => Schema;
     permissionSchema?: (schema: SchemaDefinition) => SchemaDefinition;
     fieldMatchAccessPermissionSchema?: (schemaOptions: SchemaDefinition) => SchemaDefinition;
     actionsQuery?: <DocType = any>(query: FilterQuery<DocType>, req: Request) => FilterQuery<DocType>;
     submissionQuery?: <DocType = any>(query: FilterQuery<DocType>, req: Request) => FilterQuery<DocType>;
     roleQuery?: <DocType = any>(query: FilterQuery<DocType>, req: Request) => FilterQuery<DocType>;
     formQuery?: <DocType = any>(query: FilterQuery<DocType>, req: Request) => FilterQuery<DocType>;
     actionItem?: (actionItem: FormioActionItem, req: Request) => FormioActionItem;
     actionContext?: (actionContext: any, req: Request) => any;
     actionInfo?: (action: any, req: Request) => any;
     submission?: (req: Request, res: Response, done: Function) => void;
     submissionRequest?: (submission: FormioSubmission) => FormioSubmission;
     validateSubmissionForm?: (form: FormioForm, submission: FormioSubmission, done: Function) => void;
     postSubmissionUpdate?: (req: Request, res: Response, submissionUpdate: FormioSubmission) => void;
     formResponse?: (item: any, req: Request, done: Function) => void;
     requestParams?: (req: Request & {
         formId: string;
         subId: string;
         roleId: string;
     }, params: Record<string, any>) => void;
     submissionParams?: (params: string[]) => string[];
     actionRoutes?: (options: ResourceRestOptions) => ResourceRestOptions;
     rolesRoutes?: (options: ResourceRestOptions) => ResourceRestOptions;
     formRoutes?: (options: ResourceRestOptions) => ResourceRestOptions;
     submissionRoutes?: (options: ResourceRestOptions) => ResourceRestOptions;
     user?: (user: any, done: (err: any, user: any) => void) => void;
     login?: (user: any, req: Request, done: (err: any) => void) => void;
     token?: (token: FormioDecodedToken, form: FormioForm, req: Request) => FormioDecodedToken;
     tokenDecode?: (token: FormioDecodedToken, req: Request, done: (err: any, decoded: FormioDecodedToken) => void) => void;
     submissionRequestTokenQuery?: (query: {
         formId: string;
         submissionId: string;
     }, token: string) => any;
     [key: string]: any;
 };
```

## on

```ts
on?: {
     init?: (type: FormioInitEvent) => boolean;
     [key: string]: any;
 };
```
