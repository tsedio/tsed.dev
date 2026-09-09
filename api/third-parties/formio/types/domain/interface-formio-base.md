---
url: /api/third-parties/formio/types/domain/interface-formio-base.md
description: api documentation of FormioBase from @tsed/formio
---

## Usage

```typescript
import { FormioBase } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/Formio.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/Formio.ts#L0-L0).

## Overview

```ts
interface FormioBase {
    auth: FormioAuth;
    events: EventEmitter;
    config: FormioConfig & {
        schema: string;
    };
    log(event: string, req: Request, ...info: any[]): void;
    audit(event: string, req: Request, ...info: any[]): void;
}
```

## auth

```ts
auth: FormioAuth;
```

Auth

## events

```ts
events: EventEmitter;
```

Event emitter

## config

```ts
config: FormioConfig & {
     schema: string;
 };
```

Formio configuration

## log

```ts
log(event: string, req: Request, ...info: any[]): void;
```

Emit alter `log` event. Return false to disable event logging.

## audit

```ts
audit(event: string, req: Request, ...info: any[]): void;
```

Emit alter `audit` event if `config.audit` is enabled. Return false to disable event logging.
Use `console.log`.
