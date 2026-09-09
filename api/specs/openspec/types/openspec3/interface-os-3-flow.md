---
url: /api/specs/openspec/types/openspec3/interface-os-3-flow.md
description: api documentation of OS3Flow from @tsed/openspec
---

## Usage

```typescript
import { OS3Flow } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Flows.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Flows.ts#L0-L0).

## Overview

```ts
interface OS3Flow {
    refreshUrl?: string;
    scopes: {
        [key: string]: string;
    };
}
```

## refreshUrl

```ts
refreshUrl?: string;
```

The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL.

## scopes

```ts
scopes: {
     [key: string]: string;
 };
```

The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it.
