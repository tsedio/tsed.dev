---
title: Service from @tsed/di
description: api documentation of Service from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation Service decorator
---
# Service - @tsed/di

## Usage

```typescript
import { Service } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/service.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/service.ts#L0-L0).

## Overview

```ts
function Service(): Function;
```

<!-- Description -->

## Description

Declare a service class that can be injected into other components.

Alias for `@Injectable()` decorator with default settings.
Services are singleton-scoped and instantiated once during application startup.

### Usage

```typescript
import {Service} from "@tsed/di";

@Service()
export class UserService {
  async findById(id: string) {
    // Service logic
  }
}

// Use in another service or controller
@Service()
export class AuthService {
  constructor(private userService: UserService) {}
}
```
