---
title: SwaggerUIOptions from @tsed/swagger
description: api documentation of SwaggerUIOptions from @tsed/swagger
meta:
 - name: keywords
   description: api typescript node.js documentation SwaggerUIOptions interface
---
# SwaggerUIOptions - @tsed/swagger

## Usage

```typescript
import { SwaggerUIOptions } from "@tsed/swagger";
```

> See [/packages/specs/swagger/src/interfaces/SwaggerSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/swagger/src/interfaces/SwaggerSettings.ts#L0-L0).

## Overview

```ts
interface SwaggerUIOptions {
    configUrl?: string;
    url?: string;
    urls?: {
        url: string;
        name: string;
        primaryName?: string;
    }[];
    layout?: string;
    validatorUrl?: string;
    oauth?: any;
    authorize?: any;
    [key: string]: any;
}
```

<!-- Members -->

## configUrl

```ts
configUrl?: string;
```

## url

```ts
url?: string;
```

## urls

```ts
urls?: {
     url: string;
     name: string;
     primaryName?: string;
 }[];
```

## layout

```ts
layout?: string;
```

## validatorUrl

```ts
validatorUrl?: string;
```

## oauth

```ts
oauth?: any;
```

## authorize

```ts
authorize?: any;
```

## \[key: string]

```ts
[key: string]: any;
```
