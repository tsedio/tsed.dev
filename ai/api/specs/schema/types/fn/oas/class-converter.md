---
title: Converter from @tsed/schema
description: api documentation of Converter from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Converter class
---
# Converter - @tsed/schema

## Usage

```typescript
import { Converter } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/oas/transformToOS2.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/oas/transformToOS2.ts#L0-L0).

## Overview

```ts
class Converter {
    constructor(spec: Partial<OpenSpec3>);
    convertInfos(): {};
    resolveReference(base: any, obj: any, shouldClone: boolean): any;
    convert(): any;
    convertOperations(paths: any, spec: any): any;
    convertOperationParameters(operation: OS3Operation): void;
    convertParameters(obj: any): void;
    copySchemaProperties(obj: any, props: any[]): void;
    copySchemaXProperties(obj: Record<string, any>): void;
    convertResponses(operation: Record<string, any>): void;
    convertSchema(def: any, operationDirection?: any): void;
    convertSchemas(): void;
    convertDiscriminatorMapping(mapping: any): void;
    convertSecurityDefinitions(): void;
}
```

<!-- Members -->

## convertInfos

```ts
convertInfos(): {};
```

## resolveReference

```ts
resolveReference(base: any, obj: any, shouldClone: boolean): any;
```

## convert

```ts
convert(): any;
```

## convertOperations

```ts
convertOperations(paths: any, spec: any): any;
```

## convertOperationParameters

```ts
convertOperationParameters(operation: OS3Operation): void;
```

## convertParameters

```ts
convertParameters(obj: any): void;
```

## copySchemaProperties

```ts
copySchemaProperties(obj: any, props: any[]): void;
```

## copySchemaXProperties

```ts
copySchemaXProperties(obj: Record<string, any>): void;
```

## convertResponses

```ts
convertResponses(operation: Record<string, any>): void;
```

## convertSchema

```ts
convertSchema(def: any, operationDirection?: any): void;
```

## convertSchemas

```ts
convertSchemas(): void;
```

## convertDiscriminatorMapping

```ts
convertDiscriminatorMapping(mapping: any): void;
```

## convertSecurityDefinitions

```ts
convertSecurityDefinitions(): void;
```
