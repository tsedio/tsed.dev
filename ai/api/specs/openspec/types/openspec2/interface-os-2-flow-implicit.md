---
title: OS2FlowImplicit from @tsed/openspec
description: api documentation of OS2FlowImplicit from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS2FlowImplicit interface
---
# OS2FlowImplicit - @tsed/openspec

## Usage

```typescript
import { OS2FlowImplicit } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec2/OS2Security.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Security.ts#L0-L0).

## Overview

```ts
interface OS2FlowImplicit extends OS2SecurityOAuth {
    type: "oauth2";
    flow: "implicit";
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
flow: "implicit";
```

## authorizationUrl

```ts
authorizationUrl: string;
```
