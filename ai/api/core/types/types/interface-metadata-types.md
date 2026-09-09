---
title: MetadataTypes from @tsed/core
description: api documentation of MetadataTypes from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation MetadataTypes interface
---
# MetadataTypes - @tsed/core

## Usage

```typescript
import { MetadataTypes } from "@tsed/core";
```

> See [/packages/core/src/types/MetadataTypes.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/MetadataTypes.ts#L0-L0).

## Overview

```ts
interface MetadataTypes<T = any, C = any> {
    type?: Type<T> | T;
    collectionType?: Type<C> | C;
}
```

<!-- Description -->

## Description

Modèle générique décrivant les types associés à une valeur de métadonnée.

Permet d'indiquer le type de l'élément (`type`) et, le cas échéant, le type
de la collection qui le contient (`collectionType`).

<!-- Members -->

## /\*\* Type de l'élément

```ts
```

## type

```ts
type?: Type<T> | T;
```

## /\*\* Type de la collection

```ts
```

## collectionType

```ts
collectionType?: Type<C> | C;
```
