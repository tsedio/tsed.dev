---
title: OS3SecurityOpenIDConnect from @tsed/openspec
description: api documentation of OS3SecurityOpenIDConnect from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3SecurityOpenIDConnect interface
---
# OS3SecurityOpenIDConnect - @tsed/openspec

## Usage

```typescript
import { OS3SecurityOpenIDConnect } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Security.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Security.ts#L0-L0).

## Overview

```ts
interface OS3SecurityOpenIDConnect extends OS3SecurityBase {
    type: "openIdConnect";
    openIdConnectUrl: string;
}
```

<!-- Members -->

## type

```ts
type: "openIdConnect";
```

The type of the security scheme

## openIdConnectUrl

```ts
openIdConnectUrl: string;
```
