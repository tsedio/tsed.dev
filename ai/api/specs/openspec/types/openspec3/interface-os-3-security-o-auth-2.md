---
title: OS3SecurityOAuth2 from @tsed/openspec
description: api documentation of OS3SecurityOAuth2 from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3SecurityOAuth2 interface
---
# OS3SecurityOAuth2 - @tsed/openspec

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

<!-- Members -->

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
