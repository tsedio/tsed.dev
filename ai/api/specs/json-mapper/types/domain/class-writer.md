---
title: Writer from @tsed/json-mapper
description: api documentation of Writer from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation Writer class
---
# Writer - @tsed/json-mapper

## Usage

```typescript
import { Writer } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/domain/Writer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/Writer.ts#L0-L0).

## Overview

```ts
class Writer {
    static object: {
        assign(...args: string[]): string;
    };
    protected _root?: Writer;
    protected body: (string | Writer)[];
    constructor(root?: Writer);
    static indent(lines: string[]): string[];
    static mapper(mapperId: string, key: string, options: string): string;
    static mapperFrom(key: string, options: string): string;
    static options(...args: string[]): string;
    add(...lines: (undefined | string | Writer)[]): this;
    arrow(...args: string[]): Writer;
    build(): string[];
    callMapper(id: string, key: string, ...options: string[]): this;
    returnCallMapper(id: string, key: string, ...options: string[]): Writer;
    const(name: string, line: string): this;
    each(iterable: string, args?: string[]): Writer;
    if(condition: string): IfWriter;
    switch(input: string): SwitchWriter;
    indent(indent: boolean): this;
    new(indent?: boolean): Writer;
    return(line: string): Writer;
    root(): Writer;
    set(left: string, right: string): this;
    toString(): string;
}
```

<!-- Description -->

## Description

Tiny utility used by the mapper compilers to build executable arrow functions as strings.
It provides helpers for scoping, branching, and composing mapper fragments before `eval`.

<!-- Members -->

## static object

```ts
static object: {
     assign(...args: string[]): string;
 };
```

## protected \_root

```ts
protected _root?: Writer;
```

## protected body:

```ts
protected body: (string | Writer)[];
```

## static indent

```ts
static indent(lines: string[]): string[];
```

## static mapper

```ts
static mapper(mapperId: string, key: string, options: string): string;
```

## static mapperFrom

```ts
static mapperFrom(key: string, options: string): string;
```

## static options

```ts
static options(...args: string[]): string;
```

## add

```ts
add(...lines: (undefined | string | Writer)[]): this;
```

## arrow

```ts
arrow(...args: string[]): Writer;
```

## build

```ts
build(): string[];
```

## callMapper

```ts
callMapper(id: string, key: string, ...options: string[]): this;
```

## returnCallMapper

```ts
returnCallMapper(id: string, key: string, ...options: string[]): Writer;
```

## const

```ts
const(name: string, line: string): this;
```

## each

```ts
each(iterable: string, args?: string[]): Writer;
```

## if

```ts
if(condition: string): IfWriter;
```

## switch

```ts
switch(input: string): SwitchWriter;
```

## indent

```ts
indent(indent: boolean): this;
```

## new

```ts
new(indent?: boolean): Writer;
```

## return

```ts
return(line: string): Writer;
```

## root

```ts
root(): Writer;
```

## set

```ts
set(left: string, right: string): this;
```

## toString

```ts
toString(): string;
```
