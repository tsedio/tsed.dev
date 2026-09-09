---
url: /api/third-parties/schema-formio/types/decorators/decorator-data-source-url.md
description: api documentation of DataSourceUrl from @tsed/schema-formio
---

## Usage

```typescript
import { DataSourceUrl } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/dataSourceUrl.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/dataSourceUrl.ts#L0-L0).

## Overview

```ts
function DataSourceUrl(url: string | FormioDataResolver, props?: Record<string, any>): PropertyDecorator;
```

## Description

Set URL data on the current component.
