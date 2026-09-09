---
url: /api/specs/openspec/types/openspec3/interface-os-3-security-o-auth-2.md
description: api documentation of OS3SecurityOAuth2 from @tsed/openspec
---

## Usage

```typescript
import { OS3SecurityOAuth2 } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Security.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Security.ts#L0-L0).

## Overview

```ts
interface OS3SecurityOAuth2 extends OS3SecurityBase {
    type: "oauth2";
    flows: OS3Flows;
}
```

## type

```ts
type: "oauth2";
```

The type of the security scheme

## flows

```ts
flows: OS3Flows;
```

An object containing configuration information for the flow types supported.
