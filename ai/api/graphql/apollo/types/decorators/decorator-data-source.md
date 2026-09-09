---
title: DataSource from @tsed/apollo
description: api documentation of DataSource from @tsed/apollo
meta:
 - name: keywords
   description: api typescript node.js documentation DataSource decorator
---
# DataSource - @tsed/apollo

## Usage

```typescript
import { DataSource } from "@tsed/apollo";
```

> See [/packages/graphql/apollo/src/decorators/dataSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/apollo/src/decorators/dataSource.ts#L0-L0).

## Overview

```ts
function DataSource(name?: string): ClassDecorator;
```

<!-- Description -->

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
