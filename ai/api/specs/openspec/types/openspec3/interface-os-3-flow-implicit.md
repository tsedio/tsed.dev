---
title: OS3FlowImplicit from @tsed/openspec
description: api documentation of OS3FlowImplicit from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3FlowImplicit interface
---
# OS3FlowImplicit - @tsed/openspec

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

<!-- Members -->

## authorizationUrl

```ts
authorizationUrl: string;
```

The authorization URL to be used for this flow. This MUST be in the form of a URL.
