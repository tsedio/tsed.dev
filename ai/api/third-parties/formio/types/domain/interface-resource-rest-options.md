---
title: ResourceRestOptions from @tsed/formio
description: api documentation of ResourceRestOptions from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation ResourceRestOptions interface
---
# ResourceRestOptions - @tsed/formio

## Usage

```typescript
import { ResourceRestOptions } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/Resource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/Resource.ts#L0-L0).

## Overview

```ts
interface ResourceRestOptions extends ResourceHttpMethodOptions {
    beforePut?: ResourceHttpHandler;
    beforePatch?: ResourceHttpHandler;
    beforePost?: ResourceHttpHandler;
    beforeIndex?: ResourceHttpHandler;
    beforeGet?: ResourceHttpHandler;
    afterPut?: ResourceHttpHandler;
    afterPatch?: ResourceHttpHandler;
    afterPost?: ResourceHttpHandler;
    afterIndex?: ResourceHttpHandler;
    afterGet?: ResourceHttpHandler;
}
```

<!-- Members -->

## beforePut

```ts
beforePut?: ResourceHttpHandler;
```

## beforePatch

```ts
beforePatch?: ResourceHttpHandler;
```

## beforePost

```ts
beforePost?: ResourceHttpHandler;
```

## beforeIndex

```ts
beforeIndex?: ResourceHttpHandler;
```

## beforeGet

```ts
beforeGet?: ResourceHttpHandler;
```

## afterPut

```ts
afterPut?: ResourceHttpHandler;
```

## afterPatch

```ts
afterPatch?: ResourceHttpHandler;
```

## afterPost

```ts
afterPost?: ResourceHttpHandler;
```

## afterIndex

```ts
afterIndex?: ResourceHttpHandler;
```

## afterGet

```ts
afterGet?: ResourceHttpHandler;
```
