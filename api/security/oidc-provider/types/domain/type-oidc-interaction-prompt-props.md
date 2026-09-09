---
url: /api/security/oidc-provider/types/domain/type-oidc-interaction-prompt-props.md
description: api documentation of OidcInteractionPromptProps from @tsed/oidc-provider
---

## Usage

```typescript
import { OidcInteractionPromptProps } from "@tsed/security/oidc-provider/src/domain/OidcInteractionPromptProps";
```

> See [/packages/security/oidc-provider/src/domain/OidcInteractionPromptProps.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/domain/OidcInteractionPromptProps.ts#L0-L0).

## Overview

```ts
type OidcInteractionPromptProps<Props = Record<string, any>> = {
    client: OidcClient;
    uid: string;
    grantId: string;
    details: UnknownObject;
    params: Record<string, any>;
} & Props;
```

## client

```ts
client: OidcClient;
```

## uid

```ts
uid: string;
```

## grantId

```ts
grantId: string;
```

## details

```ts
details: UnknownObject;
```

## params

```ts
params: Record<string, any>;
```
