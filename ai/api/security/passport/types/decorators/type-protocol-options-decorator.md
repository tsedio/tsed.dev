---
title: ProtocolOptionsDecorator from @tsed/passport
description: api documentation of ProtocolOptionsDecorator from @tsed/passport
meta:
 - name: keywords
   description: api typescript node.js documentation ProtocolOptionsDecorator type
---
# ProtocolOptionsDecorator - @tsed/passport

## Usage

```typescript
import { ProtocolOptionsDecorator } from "@tsed/security/passport/src/decorators/protocol";
```

> See [/packages/security/passport/src/decorators/protocol.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/passport/src/decorators/protocol.ts#L0-L0).

## Overview

```ts
type ProtocolOptionsDecorator<T = any> = {
    name: string;
} & Partial<ProtocolOptions<T>>;
```

<!-- Members -->

## name

```ts
name: string;
```
