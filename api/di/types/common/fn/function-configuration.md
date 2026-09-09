---
url: /api/di/types/common/fn/function-configuration.md
description: api documentation of configuration from @tsed/di
---

## Usage

```typescript
import { configuration } from "@tsed/di";
```

> See [/packages/di/src/common/fn/configuration.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/configuration.ts#L0-L0).

## Overview

```ts
function configuration(): TsED.Configuration & DIConfiguration;
export function configuration(token: TokenProvider): Partial<TsED.Configuration>;
export function configuration(token: TokenProvider, configuration: Partial<TsED.Configuration>): Partial<TsED.Configuration>;
```

* **token** (\`\`): provider token to get/set configuration for

* **configuration** (\`\`): configuration to set

## Description

Get or set configuration for a provider or the global injector settings.

### Overloads

* `configuration()` - Returns the global DI configuration
* `configuration(token)` - Returns the stored configuration for a provider
* `configuration(token, config)` - Sets and returns configuration for a provider

### Usage

```typescript
import {configuration, Injectable} from "@tsed/di";

// Get global configuration
const settings = configuration();

// Set provider configuration
@Injectable()
class MyService {}
configuration(MyService, {custom: "value"});

// Get provider configuration
const config = configuration(MyService);
```
