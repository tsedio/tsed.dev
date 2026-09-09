---
title: OpenSpecPath from @tsed/openspec
description: api documentation of OpenSpecPath from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OpenSpecPath interface
---
# OpenSpecPath - @tsed/openspec

## Usage

```typescript
import { OpenSpecPath } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/common/OpenSpecPath.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/common/OpenSpecPath.ts#L0-L0).

## Overview

```ts
interface OpenSpecPath<Operation> {
    $ref?: string;
    get?: Operation;
    put?: Operation;
    post?: Operation;
    delete?: Operation;
    options?: Operation;
    head?: Operation;
    patch?: Operation;
}
```

<!-- Members -->

## $ref

```ts
$ref?: string;
```

## get

```ts
get?: Operation;
```

## put

```ts
put?: Operation;
```

## post

```ts
post?: Operation;
```

## delete

```ts
delete?: Operation;
```

## options

```ts
options?: Operation;
```

## head

```ts
head?: Operation;
```

## patch

```ts
patch?: Operation;
```
