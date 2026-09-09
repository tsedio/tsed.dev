---
url: /api/specs/openspec/types/openspec2/interface-os-2-flow-application.md
description: api documentation of OS2FlowApplication from @tsed/openspec
---

## Usage

```typescript
import { OS2FlowApplication } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec2/OS2Security.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Security.ts#L0-L0).

## Overview

```ts
interface OS2FlowApplication extends OS2SecurityOAuth {
    type: "oauth2";
    flow: "application";
    tokenUrl: string;
}
```

## type

```ts
type: "oauth2";
```

## flow

```ts
flow: "application";
```

## tokenUrl

```ts
tokenUrl: string;
```
