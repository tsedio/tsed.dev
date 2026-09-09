---
title: Protocol from @tsed/passport
description: api documentation of Protocol from @tsed/passport
meta:
 - name: keywords
   description: api typescript node.js documentation Protocol decorator
---
# Protocol - @tsed/passport

## Usage

```typescript
import { Protocol } from "@tsed/passport";
```

> See [/packages/security/passport/src/decorators/protocol.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/passport/src/decorators/protocol.ts#L0-L0).

## Overview

```ts
function Protocol<T = any>(options: ProtocolOptionsDecorator<T>): any;
```

<!-- Description -->

## Description

Declare a new Protocol base on a Passport Strategy
