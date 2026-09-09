---
title: Request from @tsed/platform-http
description: api documentation of Request from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation Request decorator
---
# Request - @tsed/platform-http

## Usage

```typescript
import { Request } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/decorators/params/request.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/decorators/params/request.ts#L0-L0).

## Overview

```ts
function Request(expression: string, useType: Type<any>): ParameterDecorator;
export function Request(expression: string): ParameterDecorator;
export function Request(useType: Type<any>): ParameterDecorator;
export function Request(options: ParamOptions<any>): ParameterDecorator;
export function Request(): ParameterDecorator;

export function Req(expression: string, useType: Type<any>): ParameterDecorator;
export function Req(expression: string): ParameterDecorator;
export function Req(useType: Type<any>): ParameterDecorator;
export function Req(options: Partial<ParamOptions>): ParameterDecorator;
export function Req(): ParameterDecorator;

export interface Request extends TsED.Request {
}
```

<!-- Description -->

## Description

Request service.
