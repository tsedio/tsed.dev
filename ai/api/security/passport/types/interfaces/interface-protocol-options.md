---
title: ProtocolOptions from @tsed/passport
description: api documentation of ProtocolOptions from @tsed/passport
meta:
 - name: keywords
   description: api typescript node.js documentation ProtocolOptions interface
---
# ProtocolOptions - @tsed/passport

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

<!-- Members -->

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
