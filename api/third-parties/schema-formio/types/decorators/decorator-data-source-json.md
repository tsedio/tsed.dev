---
url: >-
  /api/third-parties/schema-formio/types/decorators/decorator-data-source-json.md
description: api documentation of DataSourceJson from @tsed/schema-formio
---

## Usage

```typescript
import { DataSourceJson } from "@tsed/schema-formio";
```

> See [/packages/third-parties/schema-formio/src/decorators/dataSourceJson.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/decorators/dataSourceJson.ts#L0-L0).

## Overview

```ts
function DataSourceJson(data: any | FormioDataResolver, props?: Record<string, any>): PropertyDecorator;
```

## Description

Set custom json data source
