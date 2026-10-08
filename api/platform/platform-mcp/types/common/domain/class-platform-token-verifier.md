---
url: >-
  /api/platform/platform-mcp/types/common/domain/class-platform-token-verifier.md
description: api documentation of PlatformTokenVerifier from @tsed/platform-mcp
---

## Usage

```typescript
import { PlatformTokenVerifier } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/domain/PlatformTokenVerifier.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/domain/PlatformTokenVerifier.ts#L0-L0).

## Overview

```ts
class PlatformTokenVerifier implements OAuthTokenVerifier {
    protected auth: PlatformMcpAuthSettings;
    protected resource: URL;
    readonly mode: "offline" | "introspection";
    readonly audience: string | false;
    protected authorizationServer?: Promise<AuthorizationServer>;
    protected cache: Map<string, {
        authInfo: AuthInfo;
        until: number;
    }>;
    constructor(auth: PlatformMcpAuthSettings, resource: URL);
    static getMode(auth: PlatformMcpAuthSettings): "offline" | "introspection";
    verifyAccessToken(token: string): Promise<AuthInfo>;
    protected verifyWithCustomVerifier(token: string): Promise<AuthInfo>;
    protected verifyWithIntrospection(token: string): Promise<AuthInfo>;
    protected verifyOffline(token: string): Promise<AuthInfo>;
    protected introspect(token: string): Promise<AuthInfo>;
    protected getAuthorizationServer(oauth: OAuth): Promise<AuthorizationServer>;
    protected toAuthInfo(token: string, claims: Claims): AuthInfo;
}
```

## Description

Access token verifier of a protected MCP endpoint.

* `offline`: validates the JWT access token (RFC 9068) against the authorization server JWKS, plus issuer, audience and expiration.
* `introspection`: asks the authorization server (RFC 7662) with the endpoint's client credentials.
* `auth.verifier`: delegates to the custom verifier, replacing the built-in modes.

The built-in modes rely on `oauth4webapi`, imported lazily.

## protected auth

```ts
protected auth: PlatformMcpAuthSettings;
```

## protected resource

```ts
protected resource: URL;
```

## readonly mode

```ts
readonly mode: "offline" | "introspection";
```

## readonly audience

```ts
readonly audience: string | false;
```

## protected authorizationServer

```ts
protected authorizationServer?: Promise<AuthorizationServer>;
```

Kept as a single instance per endpoint: oauth4webapi caches the JWKS against it.

## protected cache

```ts
protected cache: Map<string, {
     authInfo: AuthInfo;
     until: number;
 }>;
```

## static getMode

```ts
static getMode(auth: PlatformMcpAuthSettings): "offline" | "introspection";
```

Verification mode of an endpoint: explicit `mode`, else introspection when client credentials are configured.

## verifyAccessToken

```ts
verifyAccessToken(token: string): Promise<AuthInfo>;
```

## protected verifyWithCustomVerifier

```ts
protected verifyWithCustomVerifier(token: string): Promise<AuthInfo>;
```

## protected verifyWithIntrospection

```ts
protected verifyWithIntrospection(token: string): Promise<AuthInfo>;
```

## protected verifyOffline

```ts
protected verifyOffline(token: string): Promise<AuthInfo>;
```

## protected introspect

```ts
protected introspect(token: string): Promise<AuthInfo>;
```

## protected getAuthorizationServer

```ts
protected getAuthorizationServer(oauth: OAuth): Promise<AuthorizationServer>;
```

Resolves the authorization server metadata once per endpoint: OIDC discovery, then RFC 8414.
Discovery is skipped when the endpoint needed by the verification mode is configured explicitly.

## protected toAuthInfo

```ts
protected toAuthInfo(token: string, claims: Claims): AuthInfo;
```
