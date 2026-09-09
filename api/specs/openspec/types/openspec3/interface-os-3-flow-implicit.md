---
url: /api/specs/openspec/types/openspec3/interface-os-3-flow-implicit.md
description: api documentation of OS3FlowImplicit from @tsed/openspec
---

## Usage

```typescript
import { OS3FlowImplicit } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Flows.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Flows.ts#L0-L0).

## Overview

```ts
interface OS3FlowImplicit extends OS3Flow {
    authorizationUrl: string;
}
```

## authorizationUrl

```ts
authorizationUrl: string;
```

The authorization URL to be used for this flow. This MUST be in the form of a URL.
