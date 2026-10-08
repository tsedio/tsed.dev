---
title: PlatformMcpAuthService from @tsed/platform-mcp
description: api documentation of PlatformMcpAuthService from @tsed/platform-mcp
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformMcpAuthService class
---
# PlatformMcpAuthService - @tsed/platform-mcp

## Usage

```typescript
import { PlatformMcpAuthService } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/http/services/PlatformMcpAuthService.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/http/services/PlatformMcpAuthService.ts#L0-L0).

## Overview

```ts
class PlatformMcpAuthService {
    protected verifiers: WeakMap<PlatformMcpAuthSettings, PlatformTokenVerifier>;
    isOAuth(auth?: PlatformMcpAuthSettings | PlatformMcpPreAuthSettings): auth is PlatformMcpAuthSettings;
    preAuth(preAuth: PlatformMcpPreAuthOption, $ctx: PlatformContext): Promise<AuthInfo | undefined>;
    getVerifier(auth: PlatformMcpAuthSettings, resource: URL): PlatformTokenVerifier;
    verifyMcpRequest(auth: PlatformMcpAuthSettings, $ctx: PlatformContext): Promise<AuthInfo | Response>;
    validate(path: string, auth: PlatformMcpAuthSettings): void;
    getProtectedResourceMetadata(auth: PlatformMcpAuthSettings, resource: URL): {
        [x: string]: unknown;
        resource: string;
        authorization_servers?: string[] | undefined;
        jwks_uri?: string | undefined;
        scopes_supported?: string[] | undefined;
        bearer_methods_supported?: string[] | undefined;
        resource_signing_alg_values_supported?: string[] | undefined;
        resource_name?: string | undefined;
        resource_documentation?: string | undefined;
        resource_policy_uri?: string | undefined;
        resource_tos_uri?: string | undefined;
        tls_client_certificate_bound_access_tokens?: boolean | undefined;
        authorization_details_types_supported?: string[] | undefined;
        dpop_signing_alg_values_supported?: string[] | undefined;
        dpop_bound_access_tokens_required?: boolean | undefined;
    };
    getProtectedResourceMetadataPath(path: string): string;
    getResourceUrl(auth: PlatformMcpAuthSettings): URL;
}
```

<!-- Description -->

## Description

OAuth resource-server behavior of the protected MCP endpoints: configuration validation,
protected resource metadata and bearer token verification.

<!-- Members -->

## protected verifiers

```ts
protected verifiers: WeakMap<PlatformMcpAuthSettings, PlatformTokenVerifier>;
```

## isOAuth

```ts
isOAuth(auth?: PlatformMcpAuthSettings | PlatformMcpPreAuthSettings): auth is PlatformMcpAuthSettings;
```

Tells whether the endpoint is protected by an OAuth authorization server, and not only by a custom check.

## preAuth

```ts
preAuth(preAuth: PlatformMcpPreAuthOption, $ctx: PlatformContext): Promise<AuthInfo | undefined>;
```

Runs the custom authentication check of an endpoint.

## getVerifier

```ts
getVerifier(auth: PlatformMcpAuthSettings, resource: URL): PlatformTokenVerifier;
```

Returns the token verifier of an endpoint, created once per `auth` configuration.

## verifyMcpRequest

```ts
verifyMcpRequest(auth: PlatformMcpAuthSettings, $ctx: PlatformContext): Promise<AuthInfo | Response>;
```

Verifies the bearer token of the incoming request.

## validate

```ts
validate(path: string, auth: PlatformMcpAuthSettings): void;
```

Rejects an `auth` configuration that cannot work or would be unsafe, before any route is mounted.

## getProtectedResourceMetadata

```ts
getProtectedResourceMetadata(auth: PlatformMcpAuthSettings, resource: URL): {
     [x: string]: unknown;
     resource: string;
     authorization_servers?: string[] | undefined;
     jwks_uri?: string | undefined;
     scopes_supported?: string[] | undefined;
     bearer_methods_supported?: string[] | undefined;
     resource_signing_alg_values_supported?: string[] | undefined;
     resource_name?: string | undefined;
     resource_documentation?: string | undefined;
     resource_policy_uri?: string | undefined;
     resource_tos_uri?: string | undefined;
     tls_client_certificate_bound_access_tokens?: boolean | undefined;
     authorization_details_types_supported?: string[] | undefined;
     dpop_signing_alg_values_supported?: string[] | undefined;
     dpop_bound_access_tokens_required?: boolean | undefined;
 };
```

Builds the OAuth 2.0 Protected Resource Metadata (RFC 9728) advertised for the given resource.

## getProtectedResourceMetadataPath

```ts
getProtectedResourceMetadataPath(path: string): string;
```

Path of the RFC 9728 metadata document describing the MCP endpoint mounted on `path`.

## getResourceUrl

```ts
getResourceUrl(auth: PlatformMcpAuthSettings): URL;
```

Canonical URL of the MCP endpoint, as configured in `auth.resource`.

It is used for the metadata document, the bearer challenge and the expected audience, and is never
derived from the incoming request.
