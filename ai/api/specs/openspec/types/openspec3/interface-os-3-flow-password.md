---
title: OS3FlowPassword from @tsed/openspec
description: api documentation of OS3FlowPassword from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3FlowPassword interface
---
# OS3FlowPassword - @tsed/openspec

## Usage

```typescript
import { OS3FlowPassword } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Flows.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Flows.ts#L0-L0).

## Overview

```ts
interface OS3FlowPassword extends OS3Flow {
    tokenUrl: string;
}
```

<!-- Members -->

## tokenUrl

```ts
tokenUrl: string;
```

The token URL to be used for this flow. This MUST be in the form of a URL.
