---
url: /api/third-parties/terminus/types/class-terminus-module.md
description: api documentation of TerminusModule from @tsed/terminus
---

## Usage

```typescript
import { TerminusModule } from "@tsed/terminus";
```

> See [/packages/third-parties/terminus/src/TerminusModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/terminus/src/TerminusModule.ts#L0-L0).

## Overview

```ts
class TerminusModule implements OnInit {
    protected httpServer: Http.Server<typeof Http.IncomingMessage, typeof Http.ServerResponse> | null;
    protected httpsServer: Https.Server<typeof Http.IncomingMessage, typeof Http.ServerResponse> | null;
    
    $onInit(): void;
    getConfiguration(): {
        caseInsensitive?: boolean | undefined;
        timeout?: number | undefined;
        signal?: string | undefined;
        signals?: string[] | undefined;
        sendFailuresDuringShutdown?: boolean | undefined;
        statusOk?: number | undefined;
        statusOkResponse?: Record<string, unknown> | undefined;
        statusError?: number | undefined;
        statusErrorResponse?: Record<string, unknown> | undefined;
        useExit0?: boolean | undefined;
        logger: (msg: string, err: Error) => void;
        headers?: {
            [key: string]: string;
        } | undefined;
        healthChecks: Record<string, any>;
        onSignal: (...args: any[]) => Promise<void>;
        onShutdown: (...args: any[]) => Promise<void>;
        beforeShutdown: (...args: any[]) => Promise<void>;
        onSendFailureDuringShutdown: (...args: any[]) => Promise<void>;
    };
    $logRoutes(routes: PlatformRouteDetails[]): Promise<PlatformRouteDetails[]>;
    
    
}
```

## protected httpServer

```ts
protected httpServer: Http.Server<typeof Http.IncomingMessage, typeof Http.ServerResponse> | null;
```

## protected httpsServer

```ts
protected httpsServer: Https.Server<typeof Http.IncomingMessage, typeof Http.ServerResponse> | null;
```

## $onInit

```ts
$onInit(): void;
```

## getConfiguration

```ts
getConfiguration(): {
     caseInsensitive?: boolean | undefined;
     timeout?: number | undefined;
     signal?: string | undefined;
     signals?: string[] | undefined;
     sendFailuresDuringShutdown?: boolean | undefined;
     statusOk?: number | undefined;
     statusOkResponse?: Record<string, unknown> | undefined;
     statusError?: number | undefined;
     statusErrorResponse?: Record<string, unknown> | undefined;
     useExit0?: boolean | undefined;
     logger: (msg: string, err: Error) => void;
     headers?: {
         [key: string]: string;
     } | undefined;
     healthChecks: Record<string, any>;
     onSignal: (...args: any[]) => Promise<void>;
     onShutdown: (...args: any[]) => Promise<void>;
     beforeShutdown: (...args: any[]) => Promise<void>;
     onSendFailureDuringShutdown: (...args: any[]) => Promise<void>;
 };
```

## $logRoutes

```ts
$logRoutes(routes: PlatformRouteDetails[]): Promise<PlatformRouteDetails[]>;
```
