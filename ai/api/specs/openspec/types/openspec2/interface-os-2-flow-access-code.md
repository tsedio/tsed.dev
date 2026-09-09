---
title: OS2FlowAccessCode from @tsed/openspec
description: api documentation of OS2FlowAccessCode from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS2FlowAccessCode interface
---
# OS2FlowAccessCode - @tsed/openspec

## Usage

```typescript
import { OS2FlowAccessCode } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec2/OS2Security.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Security.ts#L0-L0).

## Overview

```ts
interface OS2FlowAccessCode extends OS2SecurityOAuth {
    type: "oauth2";
    flow: "accessCode";
    tokenUrl: string;
    authorizationUrl: string;
}
```

<!-- Members -->

## type

```ts
type: "oauth2";
```

## flow

```ts
flow: "accessCode";
```

## tokenUrl

```ts
tokenUrl: string;
```

## authorizationUrl

```ts
authorizationUrl: string;
```
