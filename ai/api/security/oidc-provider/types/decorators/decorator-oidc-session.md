---
title: OidcSession from @tsed/oidc-provider
description: api documentation of OidcSession from @tsed/oidc-provider
meta:
 - name: keywords
   description: api typescript node.js documentation OidcSession decorator
---
# OidcSession - @tsed/oidc-provider

## Usage

```typescript
import { OidcSession } from "@tsed/oidc-provider";
```

> See [/packages/security/oidc-provider/src/decorators/oidcSession.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/decorators/oidcSession.ts#L0-L0).

## Overview

```ts
function OidcSession(expression?: string): ParameterDecorator;
export type OidcSession = InstanceType<Provider["Session"]>;
```
