---
url: /api/security/passport/types/decorators/type-protocol-options-decorator.md
description: api documentation of ProtocolOptionsDecorator from @tsed/passport
---

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

## name

```ts
name: string;
```
