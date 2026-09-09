---
url: /api/specs/openspec/types/openspec2/interface-os-2-flow-implicit.md
description: api documentation of OS2FlowImplicit from @tsed/openspec
---

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
