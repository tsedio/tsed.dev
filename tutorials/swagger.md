---
url: /tutorials/swagger.md
description: Use Swagger UI/OpenAPI with Ts.ED.
---

# Swagger

This page shows you how you can configure Swagger-ui with Ts.ED. Swagger uses the OpenApi
to describe a Rest API. Ts.ED uses existing decorators to build
a specification compliant with Swagger.

## Installation

Run this command to install required dependencies by `@tsed/swagger`:

```bash
npm install --save @tsed/swagger
```

Then add the following configuration in your Server:

```ts \[Configuration]
import "@tsed/platform-express";
import "@tsed/swagger"; // import swagger Ts.ED module

import {Configuration} from "@tsed/di";

@Configuration({
  swagger: [
    {
      path: "/v3/docs",
      specVersion: "3.0.1"
    }
  ]
})
export class Server {}

```

::: tip
The path option for Swagger will be used to expose the documentation:

* OAS2: `http://localhost:8000/v2/doc`
* OAS3: `http://localhost:8000/v3/doc`

Ts.ED will print the swagger-ui url in the console.
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
          imgSrc: [`'self'`, "data:", "validator.swagger.io"],
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

### Swagger options

Some options are available to configure Swagger-ui, Ts.ED and the default spec information.

| Key                  | Example                                                       | Description                                                                                              |
| -------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| path                 | `/api-doc`                                                    | The url subpath to access to the documentation.                                                          |
| specVersion          | `2.0`, `3.0.1`                                                | The OpenSpec version.                                                                                    |
| fileName             | `swagger.json`                                                | Swagger file name. By default swagger.json.                                                              |
| doc                  | `hidden-doc`                                                  | The documentation key used by `@Docs` decorator to create several swagger documentations.                |
| viewPath             | `${rootDir}/../views/swagger.ejs` or `false`                  | The path to the ejs template. Set false to disabled swagger-ui.                                          |
| cssPath              | `${rootDir}/assets/style.css`                                 | The path to the CSS file.                                                                                |
| jsPath               | `${rootDir}/assets/main.js`                                   | The path to the JS file.                                                                                 |
| showExplorer         | `true`                                                        | Display the search field in the navbar.                                                                  |
| spec                 | `{swagger: "2.0"}`                                            | The default information spec.                                                                            |
| specPath             | `${rootDir}/spec/swagger.base.json`                           | Load the base spec documentation from the specified path.                                                |
| outFile              | `${rootDir}/spec/swagger.json`                                | Write the `swagger.json` spec documentation on the specified path.                                       |
| hidden               | `true`                                                        | Hide the documentation in the dropdown explorer list.                                                    |
| options              | Swagger-UI options                                            | SwaggerUI options. See (https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/configuration.md) |
| operationIdFormatter | `(name: string, propertyKey: string, path: string) => string` | A function to generate the operationId.                                                                  |
| operationIdPattern   | `%c_%m`                                                       | A pattern to generate the operationId. Format of operationId field (%c: class name, %m: method name).    |
| pathPatterns         | `[]`                                                          | Include only controllers whose paths match the pattern list provided.                                    |
| sortPaths            | `true`                                                        | Sort paths by alphabetical order.                                                                        |

### Multi documentations

#### By decorators

It's also possible to create several swagger documentations with the `doc` option:

```ts
import "@tsed/platform-express";
import "@tsed/swagger"; // import swagger Ts.ED module

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
import {Docs} from "@tsed/swagger";

@Controller("/calendars")
@Docs("api-v2") // display this controllers only for api-docs-v2
export class CalendarCtrlV2 {}

// OR
@Controller("/calendars")
@Docs("api-v2", "api-v1") // display this controllers for api-docs-v2 and api-docs-v1
export class CalendarCtrl {}

```

#### By Path patterns&#x20;

You can use the `pathPatterns` options to include only controllers whose paths match the pattern list provided.

```typescript
import {Configuration} from "@tsed/common";
import "@tsed/platform-express";
import "@tsed/swagger"; // import swagger Ts.ED module

@Configuration({
  swagger: [
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

This example shows you how to use the decorators to generate swagger documentation for an endpoint:

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

## Import Javascript

It is possible to import a Javascript in the Swagger-ui documentation. This script lets you customize the swagger-ui instance.

```ts
import "@tsed/platform-express";
import "@tsed/swagger"; // import swagger Ts.ED module

import {Configuration} from "@tsed/di";

@Configuration({
  swagger: [
    {
      path: "/api-docs",
      jsPath: "/spec/main.js"
    }
  ]
})
export class Server {}

```

In your JavaScript file, you can handle Swagger-ui configuration and the instance:

```javascript
console.log(SwaggerUIBuilder.config); //Swagger-ui config

document.addEventListener("swagger.init", (evt) => {
  console.log(SwaggerUIBuilder.ui); //Swagger-ui instance
});
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

## Decorators

These decorators already add a documentation on Swagger:

In addition, the Ts.ED Swagger plugin gives some decorators to manage documentation:

## Authors

## Maintainers
