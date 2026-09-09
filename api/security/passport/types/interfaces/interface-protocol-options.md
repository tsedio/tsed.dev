---
url: /api/security/passport/types/interfaces/interface-protocol-options.md
description: api documentation of ProtocolOptions from @tsed/passport
---

## Usage

```typescript
import { ProtocolOptions } from "@tsed/passport";
```

> See [/packages/security/passport/src/interfaces/ProtocolOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/passport/src/interfaces/ProtocolOptions.ts#L0-L0).

## Overview

```ts
interface ProtocolOptions<Settings = any> {
    name: string;
    useStrategy: Type<Strategy>;
    settings: Settings;
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
