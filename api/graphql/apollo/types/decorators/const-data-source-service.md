---
url: /api/graphql/apollo/types/decorators/const-data-source-service.md
description: api documentation of DataSourceService from @tsed/apollo
---

## Usage

```typescript
import { DataSourceService } from "@tsed/apollo";
```

> See [/packages/graphql/apollo/src/decorators/dataSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/apollo/src/decorators/dataSource.ts#L0-L0).

## Overview

```ts
const DataSourceService: typeof DataSource;
```

## Description

Create a new injectable DataSource.

```typescript
import { DataSourceService } from "@tsed/graphql";
import { RESTDataSource } from '@apollo/datasource-rest';

@DataSource()
export class MyDataSource extends RESTDataSource {
   constructor() {
     super();
     this.baseURL = 'https://awesome-api.example.com';
   }

   willSendRequest(request) {
     request.headers.set('Authorization', this.context.token);
   }

   getMyData(id: string) {
     return this.get(`/v1/my_rest_data/${id}`);
   }
}
```
