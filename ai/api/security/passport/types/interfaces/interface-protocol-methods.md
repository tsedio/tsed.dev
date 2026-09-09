---
title: ProtocolMethods from @tsed/passport
description: api documentation of ProtocolMethods from @tsed/passport
meta:
 - name: keywords
   description: api typescript node.js documentation ProtocolMethods interface
---
# ProtocolMethods - @tsed/passport

## Usage

```typescript
import { ProtocolMethods } from "@tsed/passport";
```

> See [/packages/security/passport/src/interfaces/ProtocolMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/passport/src/interfaces/ProtocolMethods.ts#L0-L0).

## Overview

```ts
interface ProtocolMethods<Settings = any> extends OnVerify, OnInstall, BeforeInstall<Settings> {
}
```
