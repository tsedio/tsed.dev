---
title: ResponseErrorObject from @tsed/platform-http
description: api documentation of ResponseErrorObject from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation ResponseErrorObject interface
---
# ResponseErrorObject - @tsed/platform-http

## Usage

```typescript
import { ResponseErrorObject } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/interfaces/ResponseErrorObject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/interfaces/ResponseErrorObject.ts#L0-L0).

## Overview

```ts
interface ResponseErrorObject extends Error {
    errors?: Error[] | Error | any;
    origin?: Error;
    headers?: {};
}
```

<!-- Description -->

## Description

Interface can be implemented to customize the error sent to the client.

<!-- Members -->

## errors

```ts
errors?: Error[] | Error | any;
```

## origin

```ts
origin?: Error;
```

## headers

```ts
headers?: {};
```
