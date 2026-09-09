---
title: FormioAuth from @tsed/formio
description: api documentation of FormioAuth from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioAuth interface
---
# FormioAuth - @tsed/formio

## Usage

```typescript
import { FormioAuth } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioAuth.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioAuth.ts#L0-L0).

## Overview

```ts
interface FormioAuth {
    currentUser(req: Req, res: Res, next: Function): void;
    isTokenAllowed(req: Req, decoded: FormioDecodedToken): boolean;
    getToken(payload: FormioPayloadToken): string | boolean;
    getTempToken(req: Req, res: Res, allow: boolean, expire: number, admin: boolean, cb: Function): void;
    tempToken(req: Req, res: Res): void;
    authenticate(req: Req, forms: FormioForm | FormioForm[], userField: string, passField: string, username: string, password: string, next: Function): void;
    logout(req: Req, res: Res, next: Next): void;
}
```

<!-- Members -->

## currentUser

```ts
currentUser(req: Req, res: Res, next: Function): void;
```

Send the current user.

## isTokenAllowed

```ts
isTokenAllowed(req: Req, decoded: FormioDecodedToken): boolean;
```

Checks to see if a decoded token is allowed to access this path.

## getToken

```ts
getToken(payload: FormioPayloadToken): string | boolean;
```

Generate our JWT with the given payload, and pass it to the given callback function.

The decoded JWT.

The JWT from the given payload, or false if the jwt payload is still valid.

## getTempToken

```ts
getTempToken(req: Req, res: Res, allow: boolean, expire: number, admin: boolean, cb: Function): void;
```

Generate a temporary token for a specific path and expiration.

## tempToken

```ts
tempToken(req: Req, res: Res): void;
```

## authenticate

```ts
authenticate(req: Req, forms: FormioForm | FormioForm[], userField: string, passField: string, username: string, password: string, next: Function): void;
```

Authenticate a user.

A single form or an array of forms to authenticate against.
The user submission field that contains the username.
The user submission field that contains the password.
The user submission username to login with.
The user submission password to login with.
The callback function to call after authentication.

## logout

```ts
logout(req: Req, res: Res, next: Next): void;
```

Interception logout request.
