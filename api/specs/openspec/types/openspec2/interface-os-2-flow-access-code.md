---
url: /api/specs/openspec/types/openspec2/interface-os-2-flow-access-code.md
description: api documentation of OS2FlowAccessCode from @tsed/openspec
---

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
