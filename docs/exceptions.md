---
url: /docs/exceptions.md
description: Documentation over Http Exceptions provided by Ts.ED framework.
---

# Exceptions

Ts.ED http exceptions provide classes to throw standard HTTP exceptions. These exceptions can be used on Controller,
Middleware or injectable Service.
Emitted exceptions will be handled by the @@PlatformExceptions@@ and formatted to a response with the right status code
and headers.

::: tip
This module can be used in standalone with a pure Express/Node.js application.
:::

## Installation

::: code-group

```bash [npm]
npm install --save @tsed/exceptions
```

```bash [yarn]
yarn add @tsed/exceptions
```

```bash [pnpm]
pnpm add @tsed/exceptions
```

```sh [bun]
bun add @tsed/exceptions
```

:::

## Throwing standard exceptions

Here is two examples to throw exceptions based on this package in Ts.ED context or Express.js context:

::: code-group

```ts \[Express.js]
import {BadRequest, Exception, InternalServerError, NotFound} from "@tsed/exceptions";
import * as Express from "express";
import {getCalendar} from "../services/CalendarService";

const app = Express();

app.get("/calendars/:id", async (req: any, res: any, next: any) => {
  const {
    params: {id}
  } = req;

  if (isNaN(+id)) {
    const error = new BadRequest("ID is not a number");

    // Additionally
    error.setHeaders({
      "x-header": "value"
    });

    error.errors = [{message: "ID is not a number"}];
    error.body = "Not a number";

    return next(error);
  }

  try {
    const calendar = await getCalendar(res.params.id);

    if (!calendar) {
      return next(new NotFound("Calendar not found"));
    }

    res.json(calendar);
  } catch (origin) {
    next(new InternalServerError("Oops! Something is wrong", origin));
  }
});

// GlobalHandler middleware catch exception and send response to the client
app.use((err: any, request: any, response: any, next: any) => {
  if (err instanceof Exception) {
    if (err.errors) {
      // If errors is provided
      response.set({"x-errors": JSON.stringify(err.errors)});
    }

    if (err.headers) {
      response.set(err.headers);
    }

    if (err.body) {
      // If a body is provided
      return response.status(err.status).json(err.body);
    }

    return response.status(err.status).send(err.message);
  }

  next();
});

```

:::

## Custom exception

It's possible to create your own exception by creating a class which inherit from @@Exception@@ or one of the built-in
exception like @@BadRequest@@.

Example:

```ts
import {BadRequest} from "@tsed/exceptions";

export class IDFormatException extends BadRequest {
  constructor() {
    super("ID format is not valid");
  }
}

```

Since IDFormatException extends the @@BadRequest@@, it will work seamlessly with the built-in exception handler, and
therefore we can use it inside a controller method.

```ts
import {PathParams} from "@tsed/platform-params";
import {Get} from "@tsed/schema";
import {Controller, Inject} from "@tsed/di";
import {CalendarsService} from "../services/CalendarsService";
import {IDFormatException} from "../errors/IDFormatException";

@Controller("/calendars")
export class CalendarCtrl {
  @Inject()
  calendarsService: CalendarsService;

  @Get("/:id")
  async get(@PathParams("id") id: number) {
    if (isNaN(+id)) {
      throw new IDFormatException();
    }
  }
}

```

## Built-in exceptions

Ts.ED provides a set of standard exceptions that inherit from the base @@Exception@@.
These are exposed from the @tsed/exceptions package, and represent many of the most common HTTP exceptions:

### Redirections (3xx)

### Client errors (4xx)

### Server errors (5xx)

## Exception filter

All errors are intercepted by the @@PlatformExceptions@@.

By default, all HTTP Exceptions are automatically sent to the client, and technical errors are
sent as Internal Server Error.

The [Platform API](/docs/platform-api.md) provides @@Catch@@ decorator to catch error.
It lets you control the exact flow of control and the content of the response sent back to the client.

Let's create an exception filter that is responsible for catching exceptions which are an instance of the @@Exception@@
class,
and implementing custom response logic for them.

To do this, we'll need to access the underlying platform Request and Response objects by using the @@Context@@
decorator.
We'll access the Request object, so we can pull out the original url and include that in the logging information.
We'll use the Response object to take direct control of the response that is sent, using the `response.body()` method.

```ts
import {PlatformContext, ResponseErrorObject} from "@tsed/platform-http";
import {Catch, ExceptionFilterMethods} from "@tsed/platform-exceptions";
import {Exception} from "@tsed/exceptions";

@Catch(Exception)
export class HttpExceptionFilter implements ExceptionFilterMethods {
  catch(exception: Exception, ctx: PlatformContext) {
    const {response, logger} = ctx;
    const error = this.mapError(exception);
    const headers = this.getHeaders(exception);

    logger.error({
      error
    });

    response.setHeaders(headers).status(error.status).body(error);
  }

  mapError(error: any) {
    return {
      name: error.origin?.name || error.name,
      message: error.message,
      status: error.status || 500,
      errors: this.getErrors(error)
    };
  }

  protected getErrors(error: any) {
    return [error, error.origin].filter(Boolean).reduce((errs, {errors}: ResponseErrorObject) => {
      return [...errs, ...(errors || [])];
    }, []);
  }

  protected getHeaders(error: any) {
    return [error, error.origin].filter(Boolean).reduce((obj, {headers}: ResponseErrorObject) => {
      return {
        ...obj,
        ...(headers || {})
      };
    }, {});
  }
}

```

::: tip Note
All exception filters should implement the generic `ExceptionFilterMethods<T>` interface. This requires you to provide
the `catch(exception: T, ctx: Context)` method with its indicated signature. `T` indicates the type of the exception.
:::

The `@Catch(Exception)` decorator binds the required metadata to the exception filter, telling Ts.ED that this
particular filter is looking for exceptions of type @@Exception@@ and nothing else.
The @@Catch@@ decorator may take a single parameter, or a comma-separated list. This lets you set up the filter for
several types of exceptions at once.

If you want to catch all errors, just use the @@Catch@@ decorator with the `Error` class:

```ts
import {PlatformContext, ResponseErrorObject} from "@tsed/platform-http";
import {Catch, ExceptionFilterMethods} from "@tsed/platform-exceptions";
import {Exception} from "@tsed/exceptions";

@Catch(Error, Exception)
export class ErrorFilter implements ExceptionFilterMethods {
  catch(exception: Error | Exception, ctx: PlatformContext) {
    const {response, logger} = ctx;
    const error = this.mapError(exception);
    const headers = this.getHeaders(exception);

    logger.error({
      error
    });

    response
      .setHeaders(headers)
      .status(error.status || 500)
      .body(error);
  }

  mapError(error: any) {
    return {
      name: error.origin?.name || error.name,
      message: error.message,
      status: error.status || 500,
      errors: this.getErrors(error)
    };
  }

  protected getErrors(error: any) {
    return [error, error.origin].filter(Boolean).reduce((errs, {errors}: ResponseErrorObject) => {
      return [...errs, ...(errors || [])];
    }, []);
  }

  protected getHeaders(error: any) {
    return [error, error.origin].filter(Boolean).reduce((obj, {headers}: ResponseErrorObject) => {
      return {
        ...obj,
        ...(headers || {})
      };
    }, {});
  }
}

```

## 404 ResourceNotFound

Ts.ED throw a @@ResourceNotFound@@ error when nothing routes are resolved by the router.
By using Exception filter, it is now possible to manage this error and customize the
response sent to your consumer.

Create a new ResourceNotFoundFilter in the filters directories and copy/paste this example:

```ts
import {PlatformContext, ResourceNotFound} from "@tsed/platform-http";
import {Catch, ExceptionFilterMethods} from "@tsed/platform-exceptions";

@Catch(ResourceNotFound)
export class ResourceNotFoundFilter implements ExceptionFilterMethods {
  async catch(exception: ResourceNotFound, ctx: PlatformContext) {
    const {response} = ctx;

    const obj = {
      status: exception.status,
      message: exception.message,
      url: exception.url
    };
    // Json response
    response.status(exception.status).body(obj);

    // Or with ejs/handlers/etc...
    const html = await response.render("404.ejs", obj);
    response.status(exception.status).body(html);
  }
}

```

::: warning
`response.render()` requires to configure the template engine before. See our page
over [Templating engine](/docs/templating#installation) installation for more details.
:::

Then import the custom filter in your server:

```typescript
import {Inject, Configuration} from "@tsed/di";
import "./filters/ResourceNotFoundFilter"; // Importing filter with ES6 import is enough

@Configuration({
  // ...
})
export class Server {}
```
