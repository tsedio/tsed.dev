---
title: TypeMapperEntry from @tsed/json-mapper
description: api documentation of TypeMapperEntry from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation TypeMapperEntry type
---
# TypeMapperEntry - @tsed/json-mapper

## Usage

```typescript
import { TypeMapperEntry } from "@tsed/specs/json-mapper/src/domain/JsonMapperCompiler";
```

> See [/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts](https://github.com/tsedio/tsed/blob/v8.44.13/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts#L0-L0).

## Overview

```ts
type TypeMapperEntry = {
    mapper: JsonMapperMethods;
    name: string;
    fn: JsonMapperCallback<any>;
};
```

<!-- Description -->

## Description

A type mapper registered from the types container: the mapper, the name of its model and the function it was
registered with. Subclasses add the values their outdated check compares.

<!-- Members -->

## mapper

```ts
mapper: JsonMapperMethods;
```

## name

```ts
name: string;
```

## fn

```ts
fn: JsonMapperCallback<any>;
```
