---
url: /api/third-parties/formio/types/services/class-formio-auth-service.md
description: api documentation of FormioAuthService from @tsed/formio
---

## Usage

```typescript
import { FormioAuthService } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/services/FormioAuthService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/services/FormioAuthService.ts#L0-L0).

## Overview

```ts
class FormioAuthService {
    formio: FormioService;
    hooks: FormioHooksService;
    db: FormioDatabase;
    get currentUser(): (arg1: Req, arg2: import("@tsed/platform-http").Res) => Promise<unknown>;
    get getToken(): (payload: FormioPayloadToken) => string | boolean;
    get tempToken(): (req: Req, res: import("@tsed/platform-http").Res) => void;
    get logout(): (req: Req, res: import("@tsed/platform-http").Res, next: import("@tsed/platform-http").Next) => void;
    setCurrentUser<User = any>(user: WithID<FormioSubmission<User>>, token: FormioPayloadToken, ctx: PlatformContext): this;
    generatePayloadToken<User = any>(user: WithID<FormioSubmission<User>>, ctx: PlatformContext): Promise<{
        user: WithID<FormioSubmission<User>>;
        token: FormioPayloadToken;
    }>;
    generateSession<User = any>(user: WithID<FormioSubmission<User>>, ctx: PlatformContext): Promise<void>;
    getRoles(req?: Req): Promise<(import("mongoose").FlattenMaps<import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & import("../domain/FormioModels.js").FormioRole & import("@tsed/mongoose").MongooseDocumentMethods<import("../domain/FormioModels.js").FormioRole>>> & Required<{
        _id: string;
    }> & {
        __v: number;
    })[]>;
    updateUserRole(_id: string | any, role: string, req?: Req): Promise<import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>> & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    createUser<User = any>(user: Partial<FormioSubmission<User>>): Promise<import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>> & Required<{
        _id: string;
    }>>;
    updateUser<User = any>(user: WithID<FormioSubmission<User>>): Promise<WithID<FormioSubmission<User>>>;
}
```

## formio

```ts
formio: FormioService;
```

## hooks

```ts
hooks: FormioHooksService;
```

## db

```ts
db: FormioDatabase;
```

## get currentUser

```ts
get currentUser(): (arg1: Req, arg2: import("@tsed/platform-http").Res) => Promise<unknown>;
```

## get getToken

```ts
get getToken(): (payload: FormioPayloadToken) => string | boolean;
```

## get tempToken

```ts
get tempToken(): (req: Req, res: import("@tsed/platform-http").Res) => void;
```

## get logout

```ts
get logout(): (req: Req, res: import("@tsed/platform-http").Res, next: import("@tsed/platform-http").Next) => void;
```

## setCurrentUser

```ts
setCurrentUser<User = any>(user: WithID<FormioSubmission<User>>, token: FormioPayloadToken, ctx: PlatformContext): this;
```

## generatePayloadToken

```ts
generatePayloadToken<User = any>(user: WithID<FormioSubmission<User>>, ctx: PlatformContext): Promise<{
     user: WithID<FormioSubmission<User>>;
     token: FormioPayloadToken;
 }>;
```

Generate the payload token for the session

## generateSession

```ts
generateSession<User = any>(user: WithID<FormioSubmission<User>>, ctx: PlatformContext): Promise<void>;
```

Generate session from the given authenticated user.

## getRoles

```ts
getRoles(req?: Req): Promise<(import("mongoose").FlattenMaps<import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & import("../domain/FormioModels.js").FormioRole & import("@tsed/mongoose").MongooseDocumentMethods<import("../domain/FormioModels.js").FormioRole>>> & Required<{
     _id: string;
 }> & {
     __v: number;
 })[]>;
```

Retrieve roles

## updateUserRole

```ts
updateUserRole(_id: string | any, role: string, req?: Req): Promise<import("mongoose").Document<unknown, {}, import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>>> & import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>> & Required<{
     _id: string;
 }> & {
     __v: number;
 }>;
```

Update the role of the current user submission

## createUser

```ts
createUser<User = any>(user: Partial<FormioSubmission<User>>): Promise<import("@tsed/mongoose").MongooseMergedDocument<import("mongoose").Document<unknown, any, any> & FormioSubmission<any> & import("@tsed/mongoose").MongooseDocumentMethods<FormioSubmission<any>>> & Required<{
     _id: string;
 }>>;
```

Create a user submission in formio

## updateUser

```ts
updateUser<User = any>(user: WithID<FormioSubmission<User>>): Promise<WithID<FormioSubmission<User>>>;
```

Update user submission in formio
