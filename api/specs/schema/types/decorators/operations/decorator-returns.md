---
url: /api/specs/schema/types/decorators/operations/decorator-returns.md
description: api documentation of Returns from @tsed/schema
---

## Usage

```typescript
import { Returns } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/returns.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/returns.ts#L0-L0).

## Overview

```ts
function Returns(model?: Type<any> | Type<any>[]): ReturnsChainedDecorators;
export function Returns(status?: string | number, model?: Type<any> | Type<any>[]): ReturnsChainedDecorators;
```

## Description

Add responses documentation for a specific status code.

## Usage

Ts.ED v5/v6 API introducing the chaining decorator concept. Now a decorator like Returns can be used with another decorators like Description.

::: warning
v5 has a basic support of the chaining decorator to facilitate the migration to v6!
:::

```typescript
import {Returns} from "@tsed/schema";

@Controller("/")
class MyController {
  @Returns(404, String).Description("Not Found")
  @Returns(200, Model).Description("Success")
  async myMethod(): Promise<Model> {}
}
```

::: tip
TypeScript and your IDE will discover automatically the chained decorators. But for more details you can look on @@ReturnsChainedDecorators@@ interface, to know
what chained decorators are available under Returns decorator.
:::

This example will produce this documentation in swagger:

```json
{
  "responses": {
    "404": {
      "description": "Description",
      "schema": {"type": "string"}
    },
    "2OO": {
      "description": "Description",
      "schema": {"$ref": "..."}
    }
  }
}
```

## Declaring an Array

Use chained decorators to an array with model as following:

```typescript
import {Returns} from "@tsed/schema";

@Controller("/models")
class ModelCtrl {
  @Get("/")
  @Returns(200, Array).Of(Model).Description("Success")
  async myMethod(): Promise<Model>  {
  }
}
```

Deprecated version:

```ts
import {ReturnsArray} from "@tsed/platform-http";
import {Returns} from "@tsed/schema";

@Controller("/")
class MyController {
  @ReturnsArray(200, Model) // deprecated
  async myMethod(): Promise<Model> {}
}
```

### Declaring a generic model&#x20;

Sometimes, it might be useful to use generic models. TypeScript doesn't store the generic type in the metadata. This is why we need to
explicitly the generic models with the decorators.

One of the generic's usage can be a paginated list. With Returns decorator it's now possible to a generic type and generate the appropriate OpenSpec documentation.

Starting with the pagination model, by using @@Generics@@ and @@CollectionOf@@:

```ts
@Generics("T")
class Pagination<T> {
 @CollectionOf("T")
 data: T[];

 @Property()
 totalCount: number;
}
```

Now, we need a model to be used with the generic Pagination model:

```typescript
class Product {
 @Property()
 id: string;

 @Property()
 title: string;
}
```

Finally, we can use our models on a method as follows:

```typescript
class Controller {
  @OperationPath("POST", "/")
  @Returns(200, Pagination).Of(Product).Description("description")
  async method(): Promise<Pagination<Product> | null> {
    return null;
  }
}
```

### Declaring nested generics models&#x20;

It's also possible to a nested generics model to have this type `Pagination<Submission<Product>>`:

```ts
import {Post, Generics, Property, Returns} from "@tsed/schema";

class Controller {
  @Post("/")
  @Returns(200, Pagination).Of(Submission).Nested(Product).Description("description")
  async method(): Promise<Pagination<Submission<Product>> | null> {
    return null;
  }
}
```

And here is the Submission model:

```ts
import {Generics, Property} from "@tsed/schema";

@Generics("T")
class Submission<T> {
  @Property()
  _id: string;
  @Property("T")
  data: T;
}
```
