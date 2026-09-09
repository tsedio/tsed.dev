---
url: /api/specs/exceptions/types/core/class-exception.md
description: api documentation of Exception from @tsed/exceptions
---

## Usage

```typescript
import { Exception } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/core/Exception.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/core/Exception.ts#L0-L0).

## Overview

```ts
class Exception extends Error {
    name: string;
    message: string;
    type: string;
    stack: string;
    origin: Error & any;
    status: number;
    body: any;
    headers: {
        [key: string]: any;
    };
    [key: string]: any;
    static validate(status: number, family: StatusFamily): number;
    constructor(status?: number, message?: string, origin?: Error | string | any);
    setHeaders(headers: {
        [key: string]: any;
    }): this;
    setHeader(key: string, value: any): this;
    setOrigin(origin: Error | string | any): void;
    toString(): string;
}
```

## name

```ts
name: string;
```

Exception base name

## message

```ts
message: string;
```

Message of the exception

## type

```ts
type: string;
```

Exception type

## stack

```ts
stack: string;
```

Stack calling

## origin

```ts
origin: Error & any;
```

## status

```ts
status: number;
```

HTTP Code Status

## body

```ts
body: any;
```

## headers

```ts
headers: {
     [key: string]: any;
 };
```

Headers must be sent to the response

## \[key: string]

```ts
[key: string]: any;
```

## static validate

```ts
static validate(status: number, family: StatusFamily): number;
```

## setHeaders

```ts
setHeaders(headers: {
     [key: string]: any;
 }): this;
```

## setHeader

```ts
setHeader(key: string, value: any): this;
```

## setOrigin

```ts
setOrigin(origin: Error | string | any): void;
```

## toString

```ts
toString(): string;
```
