---
url: >-
  /api/platform/platform-mcp/types/common/interfaces/interface-platform-mcp-auth-settings.md
description: api documentation of PlatformMcpAuthSettings from @tsed/platform-mcp
---

## Usage

```typescript
import { PlatformMcpAuthSettings } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpAuthSettings.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/interfaces/PlatformMcpAuthSettings.ts#L0-L0).

## Overview

```ts
interface PlatformMcpAuthSettings {
    preAuth?: PlatformMcpPreAuthOption;
    issuer: string;
    mode?: "offline" | "introspection";
    clientId?: string;
    clientSecret?: string;
    audience?: string | false;
    jwksUri?: string;
    introspectionEndpoint?: string;
    cacheTtl?: number;
    allowInsecureRequests?: boolean;
    verifier?: OAuthTokenVerifier | TokenProvider<OAuthTokenVerifier>;
    resource: string;
    scopesSupported?: string[];
    requiredScopes?: string[];
    resourceName?: string;
    resourceDocumentation?: string;
}
```

## Description

OAuth 2.1 resource-server configuration of a Ts.ED MCP endpoint.

The endpoint never issues tokens: clients are redirected to the configured authorization server,
where registration and consent happen.

## preAuth

```ts
preAuth?: PlatformMcpPreAuthOption;
```

Custom authentication check run before the OAuth verification, for instance an API key.
When it returns an identity, the OAuth verification is skipped: both methods are accepted on the endpoint.

## issuer

```ts
issuer: string;
```

Issuer URL of the authorization server (OIDC provider) protecting the endpoint.

## mode

```ts
mode?: "offline" | "introspection";
```

How access tokens are verified:

* `offline`: the JWT access token (RFC 9068, `typ: at+jwt`) is validated locally against the authorization server JWKS.
* `introspection`: the authorization server is asked for each token (RFC 7662). Requires `clientId` and `clientSecret`.

Defaults to `introspection` when `clientId` is set, `offline` otherwise.

## clientId

```ts
clientId?: string;
```

Credentials of the MCP endpoint on the authorization server, used to call the introspection endpoint.

## clientSecret

```ts
clientSecret?: string;
```

## audience

```ts
audience?: string | false;
```

Expected audience of the access tokens. Defaults to `resource`.

`false` disables the audience check. It is only accepted by the `introspection` mode and makes the endpoint
accept any active token of the issuer, whatever the resource it was issued for.

## jwksUri

```ts
jwksUri?: string;
```

JWKS URL used by the `offline` mode. Discovered from the issuer metadata by default.

## introspectionEndpoint

```ts
introspectionEndpoint?: string;
```

Introspection URL used by the `introspection` mode. Discovered from the issuer metadata by default.

## cacheTtl

```ts
cacheTtl?: number;
```

Time in seconds an introspection result is reused. Defaults to `60`; `0` disables the cache.

## allowInsecureRequests

```ts
allowInsecureRequests?: boolean;
```

Allow a non-HTTPS issuer (other than `localhost`). For local development only.

## verifier

```ts
verifier?: OAuthTokenVerifier | TokenProvider<OAuthTokenVerifier>;
```

Custom access token verifier replacing the built-in modes: an object implementing
`verifyAccessToken(token)` or a DI token resolving to one.

## resource

```ts
resource: string;
```

Canonical public URL of the MCP endpoint. It is advertised in the protected resource metadata and in the
bearer challenge, and is the expected audience of access tokens unless `audience` is set.

It is required and never derived from the incoming request, whose `Host` header is controlled by the caller.

## scopesSupported

```ts
scopesSupported?: string[];
```

Scopes advertised in the protected resource metadata.

## requiredScopes

```ts
requiredScopes?: string[];
```

Scopes a token must carry to reach the endpoint.

## resourceName

```ts
resourceName?: string;
```

Human-readable name advertised in the protected resource metadata.

## resourceDocumentation

```ts
resourceDocumentation?: string;
```

Documentation URL advertised in the protected resource metadata.
