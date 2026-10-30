---
url: /api/security/passport/types/interfaces/interface-protocol-options.md
description: api documentation of ProtocolOptions from @tsed/passport
---

## Usage

```typescript
import { ProtocolOptions } from "@tsed/passport";
```

> See [/packages/security/passport/src/interfaces/ProtocolOptions.ts](https://github.com/tsedio/tsed/blob/v8.44.13/packages/security/passport/src/interfaces/ProtocolOptions.ts#L0-L0).

## Overview

```ts
interface ProtocolOptions<Settings = any> {
    name: string;
    useStrategy: Type<Strategy>;
    settings: Settings;
    loginOnly?: boolean;
}
```

## name

```ts
name: string;
```

## useStrategy

```ts
useStrategy: Type<Strategy>;
```

## settings

```ts
settings: Settings;
```

## loginOnly

```ts
loginOnly?: boolean;
```

Run the strategy only on login endpoints decorated with `@Authenticate()`.

A route decorated with `@Authorize()` then accepts this protocol only through the session it established,
and never runs the strategy itself. Use it for interactive login strategies (`passport-local`, OAuth, ...)
so that credentials sent to a business route do not open a new login flow.
