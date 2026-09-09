---
url: /api/core/types/types/interface-metadata-types.md
description: api documentation of MetadataTypes from @tsed/core
---

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

## Description

Modèle générique décrivant les types associés à une valeur de métadonnée.

Permet d'indiquer le type de l'élément (`type`) et, le cas échéant, le type
de la collection qui le contient (`collectionType`).

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
