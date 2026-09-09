---
title: ApolloModule from @tsed/apollo
description: api documentation of ApolloModule from @tsed/apollo
meta:
 - name: keywords
   description: api typescript node.js documentation ApolloModule class
---
# ApolloModule - @tsed/apollo

## Usage

```typescript
import { ApolloModule } from "@tsed/apollo";
```

> See [/packages/graphql/apollo/src/ApolloModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/apollo/src/ApolloModule.ts#L0-L0).

## Overview

```ts
class ApolloModule implements OnRoutesInit, AfterListen {
    protected logger: Logger;
    protected service: ApolloService;
    protected configuration: PlatformConfiguration;
    protected injector: InjectorService;
    get settings(): {
        [key: string]: ApolloSettings;
    } | undefined;
    $onRoutesInit(): Promise<void>;
    $afterListen(): Promise<any> | void;
}
```

<!-- Members -->

## protected logger

```ts
protected logger: Logger;
```

## protected service

```ts
protected service: ApolloService;
```

## protected configuration

```ts
protected configuration: PlatformConfiguration;
```

## protected injector

```ts
protected injector: InjectorService;
```

## get settings

```ts
get settings(): {
     [key: string]: ApolloSettings;
 } | undefined;
```

## $onRoutesInit

```ts
$onRoutesInit(): Promise<void>;
```

## $afterListen

```ts
$afterListen(): Promise<any> | void;
```
