---
title: PlatformLogRequestFactory from @tsed/platform-log-request
description: api documentation of PlatformLogRequestFactory from @tsed/platform-log-request
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformLogRequestFactory type
---
# PlatformLogRequestFactory - @tsed/platform-log-request

## Usage

```typescript
import { PlatformLogRequestFactory } from "@tsed/platform-log-request";
```

> See [/packages/platform/platform-log-request/src/services/PlatformLogRequestFactory.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-log-request/src/services/PlatformLogRequestFactory.ts#L0-L0).

## Overview

```ts
type PlatformLogRequestFactory = ReturnType<typeof factory>;
export const PlatformLogRequestFactory: {
    alterLog: import("../index.js").AlterLogCallback | typeof defaultAlterLog;
    onLogResponse: ($ctx: import("@tsed/di").DIContext) => void;
} & {
    readonly __type: "token_factory";
};
```

<!-- Members -->

## alterLog: import

```ts
alterLog: import("../index.js").AlterLogCallback | typeof defaultAlterLog;
```

## onLogResponse:

```ts
onLogResponse: ($ctx: import("@tsed/di").DIContext) => void;
```

##

```ts
} & {
```

## readonly \__type

```ts
readonly __type: "token_factory";
```
