---
url: /api/security/oidc-provider/types/services/class-oidc-interaction-context.md
description: api documentation of OidcInteractionContext from @tsed/oidc-provider
---

## Usage

```typescript
import { OidcInteractionContext } from "@tsed/oidc-provider";
```

> See [/packages/security/oidc-provider/src/services/OidcInteractionContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/services/OidcInteractionContext.ts#L0-L0).

## Overview

```ts
class OidcInteractionContext {
    protected env: Env | undefined;
    protected oidcProvider: OidcProvider;
    protected oidcInteractions: OidcInteractions;
    get $ctx(): PlatformContext<import("@tsed/platform-http").PlatformRequest<any>, import("@tsed/platform-http").PlatformResponse<any>>;
    get raw(): OidcInteraction;
    get session(): OidcSession | undefined;
    get prompt(): PromptDetail;
    get params(): Record<string, any>;
    get uid(): string;
    get grantId(): string;
    runInteraction(name?: string): Promise<void>;
    interactionDetails(): Promise<OidcInteraction>;
    interactionFinished(result: InteractionResults, options?: {
        mergeWithLastSubmission?: boolean;
    }): Promise<void>;
    interactionResult(result: InteractionResults, options?: {
        mergeWithLastSubmission?: boolean;
    }): Promise<string>;
    interactionPrompt({ client, ...options }: Record<string, any>): Promise<OidcInteractionPromptProps>;
    render(view: string, result: any): Promise<string>;
    save(ttl: number): Promise<string>;
    findClient(clientId?: string): Promise<OidcClient | undefined>;
    findAccount(sub?: string, token?: any): Promise<Account | undefined>;
    getGrant(): Promise<InstanceType<Provider["Grant"]>>;
    checkInteractionName(name: string): void;
    checkClientId(clientId?: any): Promise<void>;
    debug(obj?: any): any;
}
```

## protected env

```ts
protected env: Env | undefined;
```

## protected oidcProvider

```ts
protected oidcProvider: OidcProvider;
```

## protected oidcInteractions

```ts
protected oidcInteractions: OidcInteractions;
```

## get $ctx

```ts
get $ctx(): PlatformContext<import("@tsed/platform-http").PlatformRequest<any>, import("@tsed/platform-http").PlatformResponse<any>>;
```

## get raw

```ts
get raw(): OidcInteraction;
```

## get session

```ts
get session(): OidcSession | undefined;
```

## get prompt

```ts
get prompt(): PromptDetail;
```

## get params

```ts
get params(): Record<string, any>;
```

## get uid

```ts
get uid(): string;
```

## get grantId

```ts
get grantId(): string;
```

## runInteraction

```ts
runInteraction(name?: string): Promise<void>;
```

## interactionDetails

```ts
interactionDetails(): Promise<OidcInteraction>;
```

## interactionFinished

```ts
interactionFinished(result: InteractionResults, options?: {
     mergeWithLastSubmission?: boolean;
 }): Promise<void>;
```

## interactionResult

```ts
interactionResult(result: InteractionResults, options?: {
     mergeWithLastSubmission?: boolean;
 }): Promise<string>;
```

## interactionPrompt

```ts
interactionPrompt({ client, ...options }: Record<string, any>): Promise<OidcInteractionPromptProps>;
```

## render

```ts
render(view: string, result: any): Promise<string>;
```

## save

```ts
save(ttl: number): Promise<string>;
```

## findClient

```ts
findClient(clientId?: string): Promise<OidcClient | undefined>;
```

## findAccount

```ts
findAccount(sub?: string, token?: any): Promise<Account | undefined>;
```

## getGrant

```ts
getGrant(): Promise<InstanceType<Provider["Grant"]>>;
```

## checkInteractionName

```ts
checkInteractionName(name: string): void;
```

## checkClientId

```ts
checkClientId(clientId?: any): Promise<void>;
```

## debug

```ts
debug(obj?: any): any;
```
