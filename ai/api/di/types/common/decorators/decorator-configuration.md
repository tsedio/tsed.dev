---
title: Configuration from @tsed/di
description: api documentation of Configuration from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation Configuration decorator
---
# Configuration - @tsed/di

## Usage

```typescript
import { Configuration } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/configuration.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/configuration.ts#L0-L0).

## Overview

```ts
function Configuration(): any;
export function Configuration(settings: Partial<TsED.Configuration>): ClassDecorator;
export type Configuration = TsED.Configuration & DIConfiguration;
```

-   **settings** (\`\`): configuration object to associate with the class

<!-- Description -->

## Description

Associate configuration with a class or inject configuration into a constructor parameter.

When used as a class decorator, stores configuration metadata on the provider.
When used as a parameter decorator, injects the `DIConfiguration` instance.

### Usage

```typescript
import {Configuration, Module} from "@tsed/di";

// As class decorator
@Configuration({
  rootDir: __dirname,
  port: 3000,
  mount: {
    "/api": []
  }
})
@Module({})
export class Server {}

// As parameter decorator
@Injectable()
export class MyService {
  constructor(@Configuration() config: Configuration) {
    console.log(config.get("port"));
  }
}
```
