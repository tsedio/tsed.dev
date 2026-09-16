---
url: /tutorials/scalar.md
description: Use Scalar to describe a Rest API with Ts.ED.
---

# Scalar

This page shows you how you can configure Scalar with Ts.ED. Scalar uses the OpenApi
to describe a Rest API. Ts.ED uses existing decorators to build
a specification compliant with Scalar.

## Installation

Run this command to install required dependencies by `@tsed/scalar`:

```bash
npm install --save @tsed/scalar
```

Then add the following configuration in your Server:

```ts \[Configuration]
import "@tsed/platform-express";
import "@tsed/scalar"; // import scalar Ts.ED module

import {Configuration} from "@tsed/di";

@Configuration({
  scalar: [
    {
      path: "/doc",
      specVersion: "3.0.1"
    }
  ]
})
export class Server {}

```

::: tip
The path option for Scalar will be used to expose the documentation on: `http://localhost:8000/doc`

Ts.ED will print the scalar url in the console.
:::

::: warning
When using helmet, there may be a problem with CSP, to solve this collision, configure the CSP as shown below:

```typescript
@Configuration({
  middlewares: [
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [`'self'`],
          styleSrc: [`'self'`, `'unsafe-inline'`],
          imgSrc: [`'self'`, "data:", "validator.scalar.io"],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`]
        }
      }
    })
  ]
})
export class Server {}

// If you are not going to use CSP at all, you can use this:
@Configuration({
  middlewares: [
    helmet({
      contentSecurityPolicy: false
    })
  ]
})
export class Server {}
```

:::

### Scalar options

Some options are available to configure Scalar, Ts.ED and the default spec information.

| Key                  | Example                                                       | Description                                                                                           |
| -------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| path                 | `/api-doc`                                                    | The url subpath to access to the documentation.                                                       |
| specVersion          | `3.0.1`                                                       | The OpenSpec version.                                                                                 |
| cdn                  | `https://cdn.jsdelivr.net/npm/@scalar/api-reference`          | Url to the @scalar/api-reference package.                                                             |
| fileName             | `openapi.json`                                                | OpenAPI file name. By default openapi.json.                                                           |
| doc                  | `hidden-doc`                                                  | The documentation key used by `@Docs` decorator to create several openapi documentations.             |
| viewPath             | `${rootDir}/views/scalar.ejs` or `false`                      | The path to the ejs template. Set false to disabled scalar.                                           |
| cssPath              | `${rootDir}/assets/scalar.css`                                | The path to the CSS file.                                                                             |
| showExplorer         | `true`                                                        | Display the search field in the navbar.                                                               |
| spec                 | `{openapi: "3.1.0"}`                                          | The default information spec.                                                                         |
| specPath             | `${rootDir}/spec/openapi.base.json`                           | Load the base spec documentation from the specified path.                                             |
| outFile              | `${rootDir}/spec/openapi.json`                                | Write the `openapi.json` spec documentation on the specified path.                                    |
| hidden               | `true`                                                        | Hide the documentation in the dropdown explorer list.                                                 |
| options              | Scalar options                                                | Scalar options. See (https://github.com/scalar/scalar/tree/main/packages/api-reference#props)         |
| operationIdFormatter | `(name: string, propertyKey: string, path: string) => string` | A function to generate the operationId.                                                               |
| operationIdPattern   | `%c_%m`                                                       | A pattern to generate the operationId. Format of operationId field (%c: class name, %m: method name). |
| pathPatterns         | `[]`                                                          | Include only controllers whose paths match the pattern list provided.                                 |
| sortPaths            | `true`                                                        | Sort paths by alphabetical order.                                                                     |

:::tip

Ts.ED relies on the latest version of the @scalar/api-reference package. If you need to use a specific version or have encountered an issue, you can specify the required version:

```typescript
import "@tsed/platform-express";
import "@tsed/scalar"; // import scalar Ts.ED module

import {Configuration} from "@tsed/di";

@Configuration({
  scalar: [
    {
      path: "/doc",
      specVersion: "3.0.1",
      cdn: "https://cdn.jsdelivr.net/npm/@scalar/api-reference@x.y.z"
    }
  ]
})
export class Server {}
```

:::

### Multi documentations

#### By decorators

It's also possible to create several openapi documentations with the `doc` option:

```ts
import "@tsed/platform-express";
import "@tsed/scalar"; // import scalar Ts.ED module

import {Configuration} from "@tsed/di";

@Configuration({
  swagger: [
    {
      path: "/api-docs-v1",
      doc: "api-v1"
    },
    {
      path: "/api-docs-v2",
      doc: "api-v2"
    }
  ]
})
export class Server {}

```

Then use `@Docs` decorators on your controllers to specify where the controllers should be displayed.

```ts
import {Controller} from "@tsed/di";
import {Docs} from "@tsed/scalar";

@Controller("/calendars")
@Docs("api-v2") // display this controllers only for api-docs-v2
export class CalendarCtrlV2 {}

// OR
@Controller("/calendars")
@Docs("api-v2", "api-v1") // display this controllers for api-docs-v2 and api-docs-v1
export class CalendarCtrl {}

```

#### By Path patterns

You can use the `pathPatterns` options to include only controllers whose paths match the pattern list provided.

```typescript
import {Configuration} from "@tsed/common";
import "@tsed/platform-express";
import "@tsed/scalar"; // import scalar Ts.ED module

@Configuration({
  scalar: [
    {
      path: "/api-admin",
      pathPatterns: ["/rest/admin/**"]
    },
    {
      path: "/api-all",
      pathPatterns: ["!/rest/admin/**"]
    }
  ]
})
export class Server {}
```

## Model documentation

One of the features of Ts.ED is the model definition to serialize or deserialize a
JSON Object based on JsonSchema (See [model documentation](/docs/model.md)).

A model can be used on a method controller along with @@BodyParams@@ or other decorators.

```ts
import {Description, Example, Property, Title} from "@tsed/schema";

export class CalendarModel {
  @Title("iD")
  @Description("Description of calendar model id")
  @Example("Description example")
  @Property()
  public id: string;

  @Property()
  public name: string;
}

```

## Endpoint documentation

This example shows you how to use the decorators to generate Scalar documentation for an endpoint:

```ts
import {Controller} from "@tsed/di";
import {BodyParams, QueryParams} from "@tsed/platform-params";
import {Deprecated, Description, Get, Post, Returns, Security, Summary} from "@tsed/schema";

import {CalendarModel} from "./models/Calendar";

@Controller("/calendars")
export class CalendarCtrl {
  @Get("/:id")
  @Summary("Summary of this route")
  @Description("Return a calendar from the given id")
  @Returns(200, CalendarModel)
  @(Returns(404).Description("Not found"))
  async getCalendar(
    @Description("A calendar Id")
    @QueryParams()
    id: string
  ): Promise<CalendarModel> {
    return {};
  }

  @Get("/")
  @Description("Return a list of Calendar")
  @Returns(200, CalendarModel)
  async getCalendars(): Promise<CalendarModel[]> {
    return [];
  }

  @Get("/v0/:id")
  @Deprecated()
  @Description("Deprecated route, use /rest/calendars/:id instead of.")
  @Returns(CalendarModel)
  @Returns(404, {description: "Not found"})
  async getCalendarDeprecated(@QueryParams("id") id: string): Promise<CalendarModel> {
    return {};
  }

  @Post("/")
  @Security("calendar_auth", "write:calendar", "read:calendar")
  @Returns(CalendarModel)
  async createCalendar(@BodyParams() body: any): Promise<CalendarModel> {
    return {};
  }
}

```

## Extra parameters

Sometimes you want to display extra `in` parameters like `headers` without consuming it in an endpoint.
It's possible to describe extra parameters by using the @@In@@ decorator over the method.

```ts
import {Controller} from "@tsed/di";
import {BodyParams} from "@tsed/platform-params";
import {In, Post, Security} from "@tsed/schema";

import {CalendarModel} from "./models/Calendar";

@Controller("/calendars")
export class CalendarCtrl {
  @Post("/")
  @(In("header").Name("authorization").Type(String).Description("Bearer authorization"))
  @Security("oidc")
  async createCalendar(@BodyParams() body: any): Promise<CalendarModel> {
    return {};
  }
}

```

## Intercept generated spec

You can intercept the generated spec by using the `$alterOpenSpec` hook.

This hook is called after the spec generation. You can modify the spec before it is sent to the client:

```typescript
@Configuration()
class Server {
  $alterOpenSpec(spec: OpenSpec, config: SwaggerSettings) {
    // do something with the spec
    return spec;
  }
}
```

## Authors

## Maintainers
