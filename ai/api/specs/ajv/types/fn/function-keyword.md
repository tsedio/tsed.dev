---
title: keyword from @tsed/ajv
description: api documentation of keyword from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation keyword function
---
# keyword - @tsed/ajv

## Usage

```typescript
import { keyword } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/fn/keyword.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/fn/keyword.ts#L0-L0).

## Overview

```ts
function keyword<Token extends TokenProvider>(token: Token, options: KeywordOptions): TsED.ProviderBuilder<Token>;
```

<!-- Description -->

## Description

Create a new keyword custom validator
