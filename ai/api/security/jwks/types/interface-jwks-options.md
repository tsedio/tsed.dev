---
title: JwksOptions from @tsed/jwks
description: api documentation of JwksOptions from @tsed/jwks
meta:
 - name: keywords
   description: api typescript node.js documentation JwksOptions interface
---
# JwksOptions - @tsed/jwks

## Usage

```typescript
import { JwksOptions } from "@tsed/jwks";
```

> See [/packages/security/jwks/src/getJwks.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/jwks/src/getJwks.ts#L0-L0).

## Overview

```ts
interface JwksOptions {
    path: string;
    certificates?: JwksKeyParameters[];
}
```

<!-- Members -->

## path

```ts
path: string;
```

## certificates

```ts
certificates?: JwksKeyParameters[];
```
