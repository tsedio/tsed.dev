---
url: /api/specs/openspec/types/openspec2/interface-os-2-flow-password.md
description: api documentation of OS2FlowPassword from @tsed/openspec
---

## Usage

```typescript
import { OS2FlowPassword } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec2/OS2Security.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Security.ts#L0-L0).

## Overview

```ts
interface OS2FlowPassword extends OS2SecurityOAuth {
    type: "oauth2";
    flow: "password";
    tokenUrl: string;
}
```

## type

```ts
type: "oauth2";
```

## flow

```ts
flow: "password";
```

## tokenUrl

```ts
tokenUrl: string;
```
