---
url: /api/security/oidc-provider/types/class-oidc-module.md
description: api documentation of OidcModule from @tsed/oidc-provider
---

## Usage

```typescript
import { OidcModule } from "@tsed/oidc-provider";
```

> See [/packages/security/oidc-provider/src/OidcModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/OidcModule.ts#L0-L0).

## Overview

```ts
class OidcModule {
    protected app: PlatformApplication;
    protected platformName: string | undefined;
    protected basePath: string;
    protected oidcProvider: OidcProvider;
    $onInit(): Promise<void>;
    $onRoutesInit(): Promise<void>;
    $afterRoutesInit(): void;
    $onReady(): void;
}
```

## protected app

```ts
protected app: PlatformApplication;
```

## protected platformName

```ts
protected platformName: string | undefined;
```

## protected basePath

```ts
protected basePath: string;
```

## protected oidcProvider

```ts
protected oidcProvider: OidcProvider;
```

## $onInit

```ts
$onInit(): Promise<void>;
```

## $onRoutesInit

```ts
$onRoutesInit(): Promise<void>;
```

## $afterRoutesInit

```ts
$afterRoutesInit(): void;
```

## $onReady

```ts
$onReady(): void;
```
