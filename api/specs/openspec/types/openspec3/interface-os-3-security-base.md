---
url: /api/specs/openspec/types/openspec3/interface-os-3-security-base.md
description: api documentation of OS3SecurityBase from @tsed/openspec
---

## Usage

```typescript
import { OS3SecurityBase } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Security.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Security.ts#L0-L0).

## Overview

```ts
interface OS3SecurityBase {
    type: "apiKey" | "oauth2" | "http" | "openIdConnect";
    description?: string;
}
```

## type

```ts
type: "apiKey" | "oauth2" | "http" | "openIdConnect";
```

The type of the security scheme

## description

```ts
description?: string;
```
