---
url: /api/security/oidc-provider/types/services/class-oidc-provider.md
description: api documentation of OidcProvider from @tsed/oidc-provider
---

## Usage

```typescript
import { OidcProvider } from "@tsed/oidc-provider";
```

> See [/packages/security/oidc-provider/src/services/OidcProvider.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/services/OidcProvider.ts#L0-L0).

## Overview

```ts
class OidcProvider {
    raw: Provider;
    protected env: Env | undefined;
    protected httpPort: string | number | undefined;
    protected httpsPort: string | number | undefined;
    protected issuer: string;
    protected oidc: OidcSettings;
    protected platformName: string | undefined;
    protected oidcJwks: OidcJwks;
    protected oidcPolicy: OidcPolicy;
    protected adapters: OidcAdapters;
    protected injector: InjectorService;
    protected app: PlatformApplication<any>;
    get logger(): import("@tsed/di").ContextLogger;
    protected get $ctx(): PlatformContext<import("@tsed/platform-http").PlatformRequest<any>, import("@tsed/platform-http").PlatformResponse<any>>;
    hasConfiguration(): boolean;
    getConfiguration(): Promise<Configuration>;
    getIssuer(): string;
    get(): Provider;
    create(): Promise<void | Provider>;
    
}
```

## raw

```ts
raw: Provider;
```

## protected env

```ts
protected env: Env | undefined;
```

## protected httpPort

```ts
protected httpPort: string | number | undefined;
```

## protected httpsPort

```ts
protected httpsPort: string | number | undefined;
```

## protected issuer

```ts
protected issuer: string;
```

## protected oidc

```ts
protected oidc: OidcSettings;
```

## protected platformName

```ts
protected platformName: string | undefined;
```

## protected oidcJwks

```ts
protected oidcJwks: OidcJwks;
```

## protected oidcPolicy

```ts
protected oidcPolicy: OidcPolicy;
```

## protected adapters

```ts
protected adapters: OidcAdapters;
```

## protected injector

```ts
protected injector: InjectorService;
```

## protected app

```ts
protected app: PlatformApplication<any>;
```

## get logger

```ts
get logger(): import("@tsed/di").ContextLogger;
```

## protected get $ctx

```ts
protected get $ctx(): PlatformContext<import("@tsed/platform-http").PlatformRequest<any>, import("@tsed/platform-http").PlatformResponse<any>>;
```

## hasConfiguration

```ts
hasConfiguration(): boolean;
```

## getConfiguration

```ts
getConfiguration(): Promise<Configuration>;
```

## getIssuer

```ts
getIssuer(): string;
```

## get

```ts
get(): Provider;
```

## create

```ts
create(): Promise<void | Provider>;
```

Create a new instance of OidcProvider
