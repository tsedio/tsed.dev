---
title: Req from @tsed/platform-http
description: api documentation of Req from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation Req decorator
---
# Req - @tsed/platform-http

## Usage

```typescript
import { Req } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/decorators/params/request.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/decorators/params/request.ts#L0-L0).

## Overview

```ts
function Req(expression: string, useType: Type<any>): ParameterDecorator;
export function Req(expression: string): ParameterDecorator;
export function Req(useType: Type<any>): ParameterDecorator;
export function Req(options: Partial<ParamOptions>): ParameterDecorator;
export function Req(): ParameterDecorator;

export interface Request extends TsED.Request {
}

export interface Req extends Request {
}
```

<!-- Description -->

## Description

Request service.
