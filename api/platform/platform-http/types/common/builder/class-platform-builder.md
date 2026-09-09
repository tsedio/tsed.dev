---
url: /api/platform/platform-http/types/common/builder/class-platform-builder.md
description: api documentation of PlatformBuilder from @tsed/platform-http
---

## Usage

```typescript
import { PlatformBuilder } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/builder/PlatformBuilder.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/builder/PlatformBuilder.ts#L0-L0).

## Overview

```ts
class PlatformBuilder<App = TsED.Application> {
    protected startedAt: Date;
    protected current: Date;
    constructor(settings?: Partial<TsED.Configuration>);
    get name(): string;
    get rootModule(): any | undefined;
    get app(): PlatformApplication<App>;
    get platform(): Platform;
    get adapter(): PlatformAdapter<any>;
    get settings(): TsED.Configuration & import("@tsed/di").DIConfiguration;
    get logger(): import("@tsed/di").DILogger;
    get disableBootstrapLog(): boolean | undefined;
    get injector(): InjectorService;
    static options<Adapter>(adapter: Type<PlatformAdapter<Adapter>>, rootModule: Type<any> | Partial<TsED.Configuration>, settings?: Partial<TsED.Configuration>): {
        adapter: Type<PlatformAdapter<Adapter>>;
        logger?: TsED.LoggerConfiguration;
        scopes?: {
            [key: string]: ProviderScope;
        } | undefined;
        lazyProviders?: boolean;
        imports?: any[] | undefined;
        mount?: Record<string, any[]> | undefined;
        multer?: import("multer").Options;
        middlewares?: any[] | undefined;
        acceptMimes?: string[];
        views?: import("@tsed/platform-views").PlatformViewsSettings | undefined;
        responseFilters?: Type<import("@tsed/platform-response-filter").ResponseFilterMethods<unknown>>[] | undefined;
        rootModule: Type;
        rootDir?: string;
        httpPort?: string | number | false;
        httpsPort?: string | number | false;
        jsonMapper?: import("@tsed/json-mapper").JsonMapperGlobalOptions;
        router?: import("../index.js").PlatformRouterSettings;
        statics?: PlatformStaticsSettings;
        getBestHost?: typeof import("../index.js").getBestHost | undefined;
        getHttpPort?: typeof import("../index.js").getHttpPort | undefined;
        getHttpsPort?: typeof import("../index.js").getHttpsPort | undefined;
        setHttpsPort?: typeof import("../index.js").setHttpsPort | undefined;
        setHttpPort?: typeof import("../index.js").setHttpPort | undefined;
    };
    static create<App = TsED.Application>(settings?: PlatformBuilderSettings<App>): PlatformBuilder<App>;
    static bootstrap<App = TsED.Application>(settings?: PlatformBuilderSettings<App>): Promise<PlatformBuilder<App>>;
    callback(): (req: IncomingMessage, res: ServerResponse) => void;
    callback(req: IncomingMessage, res: ServerResponse): void;
    log(...data: any[]): any;
    addControllers(endpoint: string, controllers: TokenProvider | TokenProvider[]): void;
    runLifecycle(): Promise<this>;
    loadInjector(): Promise<void>;
    listen(network?: boolean): Promise<void>;
    stop(): Promise<void>;
    ready(): Promise<void>;
    callHook(hook: string, ...args: any[]): Promise<void>;
    loadStatics(hook: string): void;
    useProvider(token: Type<any>, settings?: Partial<ProviderOpts>): this;
    bootstrap(): Promise<this>;
    protected mapRouters(): Promise<void>;
    protected diff(): string;
    protected loadMiddlewaresFor(hook: string): void;
    protected createHttpServers(): void;
    protected listenServers(): Promise<void>;
    protected logRoutes(layers: PlatformLayer[]): Promise<void>;
}
```

## protected startedAt

```ts
protected startedAt: Date;
```

## protected current

```ts
protected current: Date;
```

## get name

```ts
get name(): string;
```

## get rootModule

```ts
get rootModule(): any | undefined;
```

## get app

```ts
get app(): PlatformApplication<App>;
```

## get platform

```ts
get platform(): Platform;
```

## get adapter

```ts
get adapter(): PlatformAdapter<any>;
```

## get settings

```ts
get settings(): TsED.Configuration & import("@tsed/di").DIConfiguration;
```

Return the settings configured by the decorator @@Configuration@@.

```typescript
@Configuration({
  port: 8000,
  httpsPort: 8080,
  mount: {
    "/rest": "${rootDir}/controllers/**/*.js"
  }
})
export class Server {
  $onInit(){
    console.log(this.settings); // {rootDir, port, httpsPort,...}
  }
}
```

## get logger

```ts
get logger(): import("@tsed/di").DILogger;
```

## get disableBootstrapLog

```ts
get disableBootstrapLog(): boolean | undefined;
```

## get injector

```ts
get injector(): InjectorService;
```

## static options

```ts
static options<Adapter>(adapter: Type<PlatformAdapter<Adapter>>, rootModule: Type<any> | Partial<TsED.Configuration>, settings?: Partial<TsED.Configuration>): {
     adapter: Type<PlatformAdapter<Adapter>>;
     logger?: TsED.LoggerConfiguration;
     scopes?: {
         [key: string]: ProviderScope;
     } | undefined;
     lazyProviders?: boolean;
     imports?: any[] | undefined;
     mount?: Record<string, any[]> | undefined;
     multer?: import("multer").Options;
     middlewares?: any[] | undefined;
     acceptMimes?: string[];
     views?: import("@tsed/platform-views").PlatformViewsSettings | undefined;
     responseFilters?: Type<import("@tsed/platform-response-filter").ResponseFilterMethods<unknown>>[] | undefined;
     rootModule: Type;
     rootDir?: string;
     httpPort?: string | number | false;
     httpsPort?: string | number | false;
     jsonMapper?: import("@tsed/json-mapper").JsonMapperGlobalOptions;
     router?: import("../index.js").PlatformRouterSettings;
     statics?: PlatformStaticsSettings;
     getBestHost?: typeof import("../index.js").getBestHost | undefined;
     getHttpPort?: typeof import("../index.js").getHttpPort | undefined;
     getHttpsPort?: typeof import("../index.js").getHttpsPort | undefined;
     setHttpsPort?: typeof import("../index.js").setHttpsPort | undefined;
     setHttpPort?: typeof import("../index.js").setHttpPort | undefined;
 };
```

## static create

```ts
static create<App = TsED.Application>(settings?: PlatformBuilderSettings<App>): PlatformBuilder<App>;
```

## static bootstrap

```ts
static bootstrap<App = TsED.Application>(settings?: PlatformBuilderSettings<App>): Promise<PlatformBuilder<App>>;
```

Bootstrap a server application

## callback

```ts
callback(): (req: IncomingMessage, res: ServerResponse) => void;
```

## callback

```ts
callback(req: IncomingMessage, res: ServerResponse): void;
```

## log

```ts
log(...data: any[]): any;
```

## addControllers

```ts
addControllers(endpoint: string, controllers: TokenProvider | TokenProvider[]): void;
```

Add classes decorated by @@Controller@@ to components container.

### Example

```typescript
@Controller('/ctrl')
class MyController{
}

platform.addControllers('/rest', [MyController])
```

::: tip
If the MyController class isn't decorated, the class will be ignored.
:::

## runLifecycle

```ts
runLifecycle(): Promise<this>;
```

## loadInjector

```ts
loadInjector(): Promise<void>;
```

## listen

```ts
listen(network?: boolean): Promise<void>;
```

## stop

```ts
stop(): Promise<void>;
```

## ready

```ts
ready(): Promise<void>;
```

## callHook

```ts
callHook(hook: string, ...args: any[]): Promise<void>;
```

## loadStatics

```ts
loadStatics(hook: string): void;
```

## useProvider

```ts
useProvider(token: Type<any>, settings?: Partial<ProviderOpts>): this;
```

## bootstrap

```ts
bootstrap(): Promise<this>;
```

## protected mapRouters

```ts
protected mapRouters(): Promise<void>;
```

## protected diff

```ts
protected diff(): string;
```

## protected loadMiddlewaresFor

```ts
protected loadMiddlewaresFor(hook: string): void;
```

Load middlewares from configuration for the given hook

## protected createHttpServers

```ts
protected createHttpServers(): void;
```

## protected listenServers

```ts
protected listenServers(): Promise<void>;
```

## protected logRoutes

```ts
protected logRoutes(layers: PlatformLayer[]): Promise<void>;
```
