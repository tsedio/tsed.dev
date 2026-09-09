---
url: /api/specs/openspec/types/openspec2/interface-os-2-security-o-auth.md
description: api documentation of OS2SecurityOAuth from @tsed/openspec
---

## Usage

```typescript
import { OS2SecurityOAuth } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec2/OS2Security.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Security.ts#L0-L0).

## Overview

```ts
interface OS2SecurityOAuth extends OS2SecurityBase {
    type: "oauth2";
    flow: "accessCode" | "application" | "implicit" | "password";
    scopes: OpenSpecHash<string>;
}
```

## type

```ts
type: "oauth2";
```

## flow

```ts
flow: "accessCode" | "application" | "implicit" | "password";
```

## scopes

```ts
scopes: OpenSpecHash<string>;
```

The available scopes for the OAuth2 security scheme.
