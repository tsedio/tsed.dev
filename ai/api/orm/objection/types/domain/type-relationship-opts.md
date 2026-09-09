---
title: RelationshipOpts from @tsed/objection
description: api documentation of RelationshipOpts from @tsed/objection
meta:
 - name: keywords
   description: api typescript node.js documentation RelationshipOpts type
---
# RelationshipOpts - @tsed/objection

## Usage

```typescript
import { RelationshipOpts } from "@tsed/orm/objection/src/domain/RelationshipOpts";
```

> See [/packages/orm/objection/src/domain/RelationshipOpts.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/objection/src/domain/RelationshipOpts.ts#L0-L0).

## Overview

```ts
type RelationshipOpts = (RelationshipOptsWithThrough | RelationshipOptsWithoutThrough) & {
    type?: ModelClassSpecifier;
};
```

<!-- Members -->

## type

```ts
type?: ModelClassSpecifier;
```
