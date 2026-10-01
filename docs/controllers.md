---
url: /docs/controllers.md
description: >-
  Discover how to create controllers and Rest API in Ts.ED to handle incoming
  requests and return responses to the client.
---

# Controllers

Controllers are responsible for handling incoming **requests** and returning **responses** to the client.

![Client controller](./assets/client-controllers.png)

A controller is here to handle a specific request for a given HTTP verb and Route. The routing service is responsible
for managing and dispatching requests to the right Controller.

In order to create a basic controller, we use classes and **decorators**. Decorators associate classes with required
metadata and enable Ts.ED to create a routing map.

## Routing

### Usage

In the following example we'll use the @@Controller@@ decorator which is required to define a basic controller.
We'll specify a path for the controller which will be used by the routing mechanism to create your routes.

```ts
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/calendars")
export class CalendarCtrl {
  @Get()
  findAll(): string {
    return "This action returns all calendars";
  }
}

```

The @@Get@@ decorator before the `findAll()` method tells Ts.ED to create an endpoint for this particular route path and
map every corresponding request to this handler. Since we've declared a prefix for every route (`/calendars`), Ts.ED
will map every `GET /calendars` request to this method.

::: tip
For more details about the routing, see our guide to [routing](/docs/routing).
:::

### Decorators

Ts.ED provides a decorator for each HTTP verb which can be used to handle a request:

Other decorators are provided to describe your route with OpenSpec, adding middlewares, adding some constraints or
adding headers:

### Configuration

You can add your controller by adding glob pattern on `mount` attributes by importing manually your
controller.

Here an example:

```ts
import {Configuration} from "@tsed/platform-http";
import {CalendarCtrl} from "./controllers/CalendarCtrl";

@Configuration({
  mount: {
    // Using manual import
    "/rest": [CalendarCtrl]
  }
})
export class Server {}

```

### Create multiple versions of your API

As you have seen in the previous example, the `mount` attribute is an object that let you provide the global endpoint
for all your controllers under the `controllers` folder.

You can add more configurations to mount different endpoints associated to a folder. Here is another configuration
example:

```ts
import {Configuration} from "@tsed/di";
import * as v0Controllers from "./controllers/v1/index.js";
import * as v1Controllers from "./controllers/v2/index.js";

@Configuration({
  mount: {
    "/rest/v0": [...Object.values(v0Controllers)],
    "/rest/v1": [...Object.values(v1Controllers)]
  }
})
export class Server {}

```

### Async and Promise

Ts.ED works well with Promise and `async` function.
Every async function has to return a `Promise`.
This means that you can return a deferred value that Ts.ED will be able to resolve by itself.

Let's see an example of this:

```ts
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {PathParams} from "@tsed/platform-params";

interface Calendar {
  id: string;
  name: string;
}

@Controller("/calendars")
export class CalendarCtrl {
  @Get("/:id")
  get(@PathParams("id") id: string): Calendar {
    return {
      id,
      name: "test"
    };
  }
}

```

### Observable/Stream/Buffer

Also, Ts.ED support function that return `Observable`, `Stream` or `Buffer`.

```ts
import {createReadStream, ReadStream} from "node:fs";
import {PlatformResponse, Res} from "@tsed/platform-http";
import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";
import {Observable, of} from "rxjs";

// FIXME remove when esm is ready

@Controller("/")
export class KindOfResponseCtrl {
  @Get("/observable")
  observable(): Observable<any[]> {
    return of([]);
  }

  @Get("/stream")
  stream(): ReadStream {
    return createReadStream(import.meta.dirname + "/response.txt");
  }

  @Get("/buffer")
  buffer(@Res() res: PlatformResponse): Buffer {
    // Set attachment: res.attachment("filename")
    // Set contentType: res.contentType("plain/text");

    return Buffer.from("Hello");
  }
}

```

### Axios response

Sometime, you just want call another API to proxy a webservice.
Axios is an excellent library to call API in Node.js and Ts.ED is able to handle Axios response to wrap it into an
Express.js response.

```ts
import {IncomingMessage} from "node:http";
import Axios from "axios";
import {QueryParams, Context} from "@tsed/platform-params";
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/proxy")
export class ProxyCtrl {
  @Get("/")
  proxy(@QueryParams("path") path: string) {
    return Axios.get(`https://cerevoice.s3.amazonaws.com/${path}`, {
      responseType: "stream"
    });
  }

  // is equivalent to doing that
  @Get("/")
  async proxy2(@QueryParams("path") path: string, @Context() $ctx: Context): IncomingMessage {
    const response = await Axios.get(`https://cerevoice.s3.amazonaws.com/${path}`, {
      responseType: "stream"
    });

    return $ctx.response.setHeaders(response.headers).status(response.status).body(response.data);
  }
}

```

### Multiple endpoints, single method

Ts.ED lets you define multiple endpoints on the same method, with the same verb like `GET` or `POST`, or with another
verb like this:

```ts
import {Get, Post} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/calendars")
export class CalendarCtrl {
  @Get("/:id")
  @Get("/alias/:id")
  @Post("/:id/complexAlias")
  async get(): Promise<any> {
    return "Return something";
  }
}

```

### Routes order

Be aware that routes registration order (methods order in classes) matters.
Assume that you have a route that allows getting a calendar by its path (`/calendars/:id`).
If you register another endpoint below the mentioned one, which basically returns all calendars at once (calendars),
the request will never hit the actual handler because all path parameters are optional.

See the following example:

```ts
import {PathParams} from "@tsed/platform-params";
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/calendars")
export class CalendarsController {
  @Get("/:id")
  findOne(@PathParams("id") id: string) {
    return `This action returns a #${id} calendar`;
  }

  @Get()
  findAll() {
    // This endpoint will never get called
    // because the "/calendars" request is going
    // to be captured by the "/calendars/:id" route handler
  }
}

```

In order to avoid such side effects, simply move `findAll()` method above `findOne()`.

## Request

### Decorators

### Input parameters

Getting parameters from Request can be done by using the following decorators:

| Decorator      | Validation | Json Mapper | Configurable |
| -------------- | ---------- | ----------- | ------------ |
| HeaderParams   | no         | no          | yes          |
| BodyParams     | yes        | yes         | yes          |
| RawBodyParams  | no         | no          | no           |
| PathParams     | yes        | yes         | yes          |
| RawPathParams  | no         | no          | no           |
| QueryParams    | yes        | yes         | yes          |
| RawQueryParams | no         | no          | no           |
| Session        | no         | no          | yes          |
| Cookies        | no         | no          | yes          |
| Locals         | no         | no          | yes          |
| Context        | no         | no          | no           |

::: tip

Some decorators run automatically `validator` and `json-mapper`. This behavior can be changed (if the decorator is
flagged as configurable)
like this:

```typescript
@HeaderParams({expression: "x-header", useValidator: true, useMapper: true})
```

:::

::: code-group

```ts \[Example]
import {BodyParams} from "@tsed/platform-params";
import {Post} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {CalendarModel} from "../models/CalendarModel";
import {PayloadModel} from "../models/PayloadModel";

@Controller("/calendars")
export class CalendarCtrl {
  @Post()
  updatePayload(@BodyParams() payload: PayloadModel): any {
    console.log("payload", payload);

    return payload;
  }

  @Post()
  updateCalendar(@BodyParams("calendar") calendar: CalendarModel): any {
    console.log("calendar", calendar);

    return calendar;
  }

  @Post()
  updatePayloads(@BodyParams(PayloadModel) payloads: PayloadModel[]): any {
    console.log("payloads", payloads);

    return payloads;
  }

  @Post()
  updateCalendars(@BodyParams("calendars", CalendarModel) calendars: CalendarModel[]): any {
    console.log("calendars", calendars);

    return calendars;
  }
}

```

```ts \[Body string]
import {BodyParams} from "@tsed/platform-params";
import {Post} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/calendars")
export class CalendarCtrl {
  @Post()
  updatePayload(@BodyParams() payload: string): any {
    console.log("payload", payload);

    return payload;
  }
}

```

```ts \[Body with Array]
import {BodyParams} from "@tsed/platform-params";
import {Post} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/calendars")
export class CalendarCtrl {
  @Post()
  updatePayload(@BodyParams() payload: string[]): any {
    console.log("payload", payload);

    return payload;
  }
}

```

```ts \[Body with model]
import {BodyParams} from "@tsed/platform-params";
import {Post} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {Property} from "@tsed/schema";

class Product {
  @Property()
  title: string;
}

@Controller("/products")
export class ProductsCtrl {
  @Post()
  updatePayload(@BodyParams(Product) products: Product[]): Product[] {
    console.log("products", products);

    return products;
  }
}

```

```ts \[Inline validation]
import {BodyParams} from "@tsed/platform-params";
import {Post} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {MinLength, Required} from "@tsed/schema";

@Controller("/calendars")
export class CalendarCtrl {
  @Post()
  updatePayload(@BodyParams() @Required() @MinLength(3) payload: string): any {
    console.log("payload", payload);

    return payload;
  }
}

```

:::

Finally, @@BodyParams@@ accepts to give a @@ParamOptions@@ object as parameter to change the decorator behavior:

```ts
import {Post} from "@tsed/schema";
import {BodyParams} from "@tsed/platform-params";

class MyController {
  @Post()
  create(@BodyParams({expression: "user", useMapper: false}) body: T): T {
    console.log("payload", body);

    return body;
  }
}

```

::: tip
@@QueryParams@@ decorator accept a model to transform `Express.request.query` plain object to a Class.

```typescript
import {QueryParams} from "@tsed/platform-params";
import {Controller} from "@tsed/di";
import {Get, Required, MinLength, Property} from "@tsed/schema";

class QueryParamsModel {
  @Required()
  @MinLength(1)
  name: string;

  @Property()
  duration: number;
}

@Controller("/")
class QueryController {
  @Get("/")
  get(@QueryParams() params: QueryParamsModel, @QueryParams("locale") locale: string) {}
}
```

:::

::: warning

Since v6.0.0, use `any` as type for a body parameter, will be translated as type `Object`. It means, if you
use `@tsed/ajv`, the validation
will fail if you send a different type as expected in the payload.

```ts
import {BodyParams} from "@tsed/platform-params";
import {Post} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {Any} from "@tsed/schema";

@Controller("/any")
export class AnyCtrl {
  @Post()
  updatePayload1(@BodyParams() payload: any): any {
    // accept only Object
    // breaking change with v5
    console.log("payload", payload);

    return payload;
  }

  @Post()
  updatePayload2(@BodyParams() @Any() payload: any): any {
    // accept all types
    console.log("payload", payload);

    return payload;
  }

  @Post()
  updatePayload3(@BodyParams() payload: any[]): any {
    // accept array of any types
    console.log("payload", payload);

    return payload;
  }
}

```

Add @@Any@@ decorator to fix the issue.

:::

### Raw Body

@@RawBodyParams@@ decorator provides you quick access to the `request.rawBody`:

```ts
import {RawBodyParams} from "@tsed/platform-params";
import {Post} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/calendars")
export class CalendarCtrl {
  @Post()
  post(@RawBodyParams() payload: Buffer): string {
    return payload.toString("utf8");
  }
}

```

::: warning
There is no performed input validation and deserialization when using the @@RawBodyParams@@!
:::

::: warning
To use `@RawBodyParams()` properly, you have to remove bodyParser add on `$beforeRoutesInit`.

```diff

@Configuration({
+  rawBody: true,
+  middlewares: [
+     {use: 'json-parser'},
+     {use: 'urlencoded-parser', options: {extended: true})
+  ]
})
export class Server {
-  @Inject()
-  protected app: PlatformApplication;

  $beforeRoutesInit() {
-    this.app
-      .use(bodyParser.json())
-      .use(bodyParser.urlencoded({extended: true}));
  }
}
```

:::

## Integer parameter

The @@Integer@@ decorator is used to set integer type for integral numbers.

```typescript
@Controller("/")
class ExampleCtrl {
  @Get("/")
  @(Returns(200, Array).OfInteger())
  async get(@BodyParams() @Integer() list: number[]) {
    return list;
  }
}
```

### Headers

@@HeaderParams@@ decorator provides you quick access to the `request.get()`:

```ts
import {HeaderParams} from "@tsed/platform-params";
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/calendars")
export class CalendarCtrl {
  @Get()
  get(@HeaderParams("x-token") token: string): string {
    console.log("token", token);

    return token;
  }
}

```

::: warning
By default, the validator/json-mapper aren't executed on header parameters.
You have to add extra parameter to enable it:

```typescript
@HeaderParams({expression: "x-header", useValidator: true, useMapper: true})
```

:::

### Accept Mime

@@AcceptMime@@ decorator provides you quick access to the `request.accepts()` and add given mime type to the consumable
data types.

```typescript
import {BodyParams} from "@tsed/platform-params";
import {Get, AcceptMime} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/")
class ExampleCtrl {
  @Get("/")
  @AcceptMime("application/x-www-form-urlencoded")
  async get(@BodyParams() model: Model) {
    return {message: "Hello world"};
  }
}
```

### Session/Cookies/Locals/Context

For the session, cookies, locals or context data attached on the request, it works the same way as seen before. Use the
following decorators to get the data:

* @@Session@@
* @@Cookies@@
* @@Locals@@
* @@Context@@
*

#### Locals

@@Locals@@ is a response property used by third-party like template engine to render a page by the server.
If you attach data on it, template engine will use it to render the template.

Here is an example:

```ts
import {Locals} from "@tsed/platform-params";
import {Middleware, UseBefore} from "@tsed/platform-middlewares";
import {View} from "@tsed/platform-views";
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Middleware()
class LocalsMiddleware {
  use(@Locals() locals: any) {
    // set some on locals
    locals.user = "user";
  }
}

@Controller("/")
@UseBefore(LocalsMiddleware)
class MyCtrl {
  @Get("/")
  @View("home.ejs") // will use locals and returned data to render the page
  get(@Locals("user") user: any) {
    console.log("user", user);

    return {
      description: "Hello world"
    };
  }
}

```

#### Context

See our dedicated page on [PlatformContext](/docs/request-context.md) for more details.

#### Validation

Ts.ED support the data input validation with the decorators provided by `@tsed/schema`.

Example:

```ts
import {PathParams} from "@tsed/platform-params";
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {MinLength} from "@tsed/schema";

@Controller("/calendars")
export class CalendarsController {
  @Get(":id")
  findOne(@PathParams("id") @MinLength(10) id: string) {
    return `This action returns a #${id} calendar`;
  }
}

```

::: warning
Validation require the `@tsed/ajv` plugins to work.

::: code-group

```sh [npm]
npm install --save @tsed/ajv
```

```sh [yarn]
yarn add @tsed/ajv
```

```sh [pnpm]
pnpm add @tsed/ajv
```

```sh [bun]
bun add @tsed/ajv
```

:::

**Supported decorators:**

## Response

### Decorators

### Status

You can change the default response status with the @@Status@@ decorator:

```ts
import {BodyParams} from "@tsed/platform-params";
import {Returns, Put} from "@tsed/schema";
import {Controller} from "@tsed/di";

interface Calendar {
  id: string;
  name: string;
}

@Controller("/calendars")
export class CalendarCtrl {
  @Put("/")
  @Returns(201)
  create(@BodyParams("name") id: string): Calendar {
    return {id: "2", name: "test"};
  }
}

```

### Content Type

You can set the response content type with the @@ContentType@@ decorator:

```ts
import {BodyParams} from "@tsed/platform-params";
import {ContentType, Returns} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/calendars")
export class CalendarCtrl {
  @ContentType(".html") // => 'text/html'
  @ContentType("html") // => 'text/html'
  @ContentType("json") // => 'application/json'
  @ContentType("application/json") // => 'application/json'
  @ContentType("png")
  getContent(@BodyParams("name") name: string): any {
    return "something";
  }

  @(Returns(200, String).ContentType(".html")) // => 'text/html'
  @(Returns(200, String).ContentType("html")) // => 'text/html'
  @(Returns(200, Object).ContentType("json")) // => 'application/json'
  @(Returns(200, Object).ContentType("application/json")) // => 'application/json'
  @(Returns(200, String).ContentType("png"))
  getContent2(@BodyParams("name") name: string): any {
    return "something";
  }
}

```

### Header

You can set the response header with the @@Header@@ decorator:

```ts
import {BodyParams} from "@tsed/platform-params";
import {Header, Returns} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/calendars")
export class CalendarCtrl {
  @Header({
    "Content-Type": "text/plain",
    "Content-Length": 123,
    ETag: {
      value: "12345",
      description: "header description"
    }
  })
  create(@BodyParams("name") name: string): string {
    return `Text plain ${name}`;
  }

  @(Returns().Headers({
    "Content-Type": "text/plain",
    "Content-Length": 123,
    ETag: {
      value: "12345",
      description: "header description"
    }
  }))
  create2(@BodyParams("name") name: string): string {
    return `Text plain ${name}`;
  }
}

```

### Redirect

Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an
HTTP status code . If not specified, status defaults to `302 “Found”`.

```typescript
import {Redirect} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/")
class MyCtrl {
  @Redirect("/foo/bar")
  @Redirect(301, "http://example.com")
  myMethod() {}
}
```

Redirects can be a fully-qualified URL for redirecting to a different site:

```typescript
import {Redirect} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/")
class MyCtrl {
  @Redirect("http://google.com")
  myMethod() {}
}
```

Redirects can be relative to the root of the host name. For example, if the application is
on http://example.com/admin/post/new, the following would redirect to the URL http://example.com/admin:

```typescript
@Controller("/")
class MyCtrl {
  @Redirect("/admin")
  myMethod() {}
}
```

Redirects can be relative to the current URL. For example, from `http://example.com/blog/admin/` (notice the trailing
slash), the following would redirect to the URL `http://example.com/blog/admin/post/new`.

```typescript
import {Redirect} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/")
class MyCtrl {
  @Redirect("post/new")
  myMethod() {}
}
```

Redirecting to post/new from `http://example.com/blog/admin` (no trailing slash), will redirect
to `http://example.com/blog/post/new`.

If you found the above behavior confusing, think of path segments as directories (with trailing slashes) and files, it
will start to make sense.

Path-relative redirects are also possible. If you were on `http://example.com/admin/post/new`, the following would
redirect to `http//example.com/admin/post`:

```typescript
import {Redirect} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/")
class MyCtrl {
  @Redirect("..")
  myMethod() {}
}
```

A back redirection redirects the request back to the referer, defaulting to / when the referer is missing.

```typescript
import {Redirect} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/")
class MyCtrl {
  @Redirect("back")
  myMethod() {}
}
```

Finally, it also possible to perform redirection programmatically:

```typescript
import {Controller} from "@tsed/di";
import {Context} from "@tsed/platform-params";
import {Get} from "@tsed/schema";

@Controller("/")
class MyCtrl {
  @Get("/")
  myMethod(@Context() ctx: Context) {
    return ctx.response.redirect("/path/to");
  }
}
```

### Generics

One of the new usage allowed by the @@Returns@@ is the support of the Generics from TypeScript.

This feature is basically there to meet the need to generate correct Swagger documentation when using generic templates.

For example, you want to return a generic `Document` payload which contains a data (Product) and links to allow a
commuter to discover your endpoints linked to this data.

With @@Returns@@ you can document correctly your endpoint to reflect the correct model:

::: code-group

```ts \[MyController.ts]
import {PathParams} from "@tsed/platform-params";
import {Get, Name, Returns, Summary} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {NotFound} from "@tsed/exceptions";
import {Document} from "../../domain/document/Documents";
import {Product} from "../../domain/product/Product";
import {ProductTypes} from "../../domain/product/ProductTypes";

@Controller("/products")
@Name("Products")
export class ProductsCtrl {
  @Get("/:id")
  @(Returns(200, Document).Of(Product).Description("A product"))
  @(Returns(404, NotFound).Description("Product not found"))
  @Summary("Return a product from the given Id")
  geProduct(@PathParams("id") id: string): Document<Product> {
    if (id === "AGAC") {
      const product = new Product({
        id: "AGAC",
        label: "Agadir",
        type: ProductTypes.VILLA,
        description: "An awesome resort at AGADIR"
      });

      return new Document<Product>({
        data: product,
        links: []
      });
    }

    throw new NotFound("Product not found");
  }
}

```

```ts \[Document.ts]
import {CollectionOf, Generics} from "@tsed/schema";
import {DocumentLink} from "./DocumentLink";

@Generics("T")
export class Document<T> {
  @CollectionOf("T")
  data: T;

  @CollectionOf(DocumentLink)
  links: DocumentLink[];

  constructor(options: Partial<Document<T>>) {
    options.data && (this.data = options.data);
    options.links && (this.links = options.links);
  }
}

```

```ts \[Product.ts]
import {CollectionOf, Generics} from "@tsed/schema";
import {DocumentLink} from "./DocumentLink";

@Generics("T")
export class Document<T> {
  @CollectionOf("T")
  data: T;

  @CollectionOf(DocumentLink)
  links: DocumentLink[];

  constructor(options: Partial<Document<T>>) {
    options.data && (this.data = options.data);
    options.links && (this.links = options.links);
  }
}

```

:::

> See a live example of generics with Swagger documentation in
>
> our [interactive demo](https://codesandbox.io/embed/tsed-swagger-example-ripfl?fontsize=14\&hidenavigation=1\&theme=dark).
> This demo showcases how to implement and document generic types with proper Swagger/OpenAPI specifications.

### Throw exceptions

You can use [@tsed/exceptions](/docs/exceptions) or similar module to throw a http exception.
All exception will be intercepted by PlatformExceptions and will be sent to the client.

Here is an example:

```ts
import {PathParams} from "@tsed/platform-params";
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {BadRequest} from "@tsed/exceptions";

@Controller("/calendars")
export class CalendarCtrl {
  @Get("/:id")
  get(@PathParams("id") id: number): any {
    if (isNaN(+id)) {
      throw new BadRequest("Not a number");
    }

    return {id};
  }
}

```

::: tip
This example will produce a response with status code 400 and "Not a number" message.
`GlobalErrorHandlerMiddleware` will catch and format the error before sending it to the client.
:::

::: tip
See our guide to [throw custom Http Exception](/docs/exceptions)
:::

## Inject Request and Response

You can use a decorator to inject the Request in order to retrieve information from the request that you cannot get
through decorators.
In the same way you can inject the Response instance in order to modify some of its information.

This is not recommended, however, because your will potentially be specific to the platform you are using (Express.js,
Koa.js, etc ...)

You can with the Req and Request decorators retrieve the originals request and response as follows:

```ts
import {Req, Res} from "@tsed/platform-http";
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/calendars")
export class CalendarCtrl {
  @Get("/:id")
  get(@Req() request: any, @Res() response: any): void {
    console.log(request); // Express.Request or Koa.Request
    console.log(response); // Express.Response or Koa.Response
    response.status(200).send({id: request.params.id, name: "test"});
  }
}

```

It's also possible to inject the high level PlatformRequest and PlatformResponse:

```ts
import {PlatformRequest, PlatformResponse, Req, Res} from "@tsed/platform-http";
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/calendars")
export class CalendarCtrl {
  @Get("/:id")
  get(@Req() request: PlatformRequest, @Res() response: PlatformResponse): void {
    console.log(request); // PlatformRequest
    console.log(response); // PlatformResponse

    response.status(200).body({id: request.params.id, name: "test"});
  }
}

```

Finally, it is also possible to retrieve the request and response in Node.js version:

```ts
import {Req, Res} from "@tsed/platform-http";
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {IncomingMessage, ServerResponse} from "node:http";

@Controller("/calendars")
export class CalendarCtrl {
  @Get("/:id")
  get(@Req() request: IncomingMessage, @Res() response: ServerResponse): void {
    console.log(request); // IncomingMessage
    console.log(response); // ServerResponse
  }
}

```

## Inject next

Use @@Next@@ decorator isn't recommended because Ts.ED use Promise/Observable to return a response, but something it's
required to get next function
to chain middlewares.

```ts
import {Next, Req, Res} from "@tsed/platform-http";
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";
import * as Express from "express";
import {promisify} from "node:util";

@Controller("/calendars")
export class CalendarCtrl {
  @Get("/:id")
  async get(@Req() request: Express.Request, @Res() response: Express.Response, @Next() next: Express.NextFunction) {
    setTimeout(() => {
      myExpressMiddleware(request, response, next);
    });

    // But it's also possible to do this
    await promisify(myExpressMiddleware)(request, response);
  }
}

```

## Inject router

Each controller has a @@PlatformRouter@@ which wrap the original router
from [Express.Router](http://expressjs.com/en/guide/routing.html) or KoaRouter.
You can inject @@PlatformRouter@@ in your controller to add anything related to the current Router controller.

```ts
import {PlatformRouter} from "@tsed/platform-router";
import {Controller} from "@tsed/di";

@Controller("/calendars")
export class CalendarCtrl {
  constructor(router: PlatformRouter) {
    router.get("/", this.nativeMethod.bind(this));
  }

  nativeMethod(req: any, res: any, next: any) {}
}

```

::: warning
All of these routes added by this way won't be discovered by Ts.ED to produce Swagger documentation.
:::

## Templating

A template engine like [EJS](https://ejs.co/) or [Handlebars](https://handlebarsjs.com/) can be used to change the
response returned by your endpoint.
Like Express.js, you need to configure the templating engine so that you can use it later with the @@View@@ decorator.

Here is an example of a controller which uses the @@View@@ decorator:

```ts
import {View} from "@tsed/platform-views";
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/events")
export class EventsCtrl {
  @Get("/:id")
  @View("event.ejs")
  public get(): any {
    return {startDate: new Date(), name: "MyEvent"};
  }
}

```

And its view:

```html
<h1><%- name %></h1>
<div>Start: <%- startDate %></div>
```

::: tip
To configure a template engine with Ts.ED, see our guide to [install the engine rendering](/docs/templating)
with Ts.ED.
:::

## Middlewares

The middleware is a function which is called before the route handler.
Middleware functions have access to the request and response objects, and the next middleware function in the
application’s request-response cycle.
The next middleware function is commonly denoted by a variable named next.

::: tip
For more details about Middleware declaration see the [Middlewares](/docs/middlewares) section.
:::

The following decorators lets you add custom middleware on a method or on controller:

### Example

```ts
import {Use, UseAfter, UseBefore} from "@tsed/platform-middlewares";
import {PathParams} from "@tsed/platform-params";
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {CustomBeforeMdlw, CustomMiddleware} from "../middlewares/middlewares";

@Controller("/calendars")
@UseBefore(CustomBeforeMdlw)
export class CalendarCtrl {
  @Get("/:id")
  @Use(CustomMiddleware)
  get1(@PathParams("id") id: number): any {
    return {id};
  }

  @Get("/:id")
  @UseBefore(CustomMiddleware)
  get2(@PathParams("id") id: number): any {
    return {id};
  }

  @Get("/:id")
  @UseAfter(CustomMiddleware)
  get3(@PathParams("id") id: number): any {
    return {id};
  }
}

```

### Middleware call sequence

When a request is sent to the server all middlewares added on the Server, Controller or Endpoint
will be called while a response isn't sent by one of the middleware in the lifecycle.

![Middleware in sequence](./assets/middleware-in-sequence.svg)

::: tip
See [middlewares section](/docs/middlewares) for more information.
:::

## Nested controllers

A controller can have one or more nested controllers. This feature allows you to combine your controllers with each
other to define your routes.
One controller can be added to multiple controllers, so you can easily reuse the same controller.

::: code-group

```ts \[RestCtrl.ts]
import {Controller} from "@tsed/di";
import {CalendarCtrl} from "./CalendarCtrl";
import {EventCtrl} from "./EventCtrl";

@Controller({
  path: "/rest",
  children: [CalendarCtrl, EventCtrl]
})
export class RestCtrl {}

```

```ts \[CalendarCtrl.ts]
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {EventCtrl} from "./EventCtrl";

@Controller({
  path: "/calendars",
  children: [EventCtrl]
})
export class CalendarCtrl {
  @Get()
  get() {}
}

```

```ts \[EventCtrl.ts]
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/events")
export class EventCtrl {
  @Get()
  get() {}
}

```

```ts \[Server.ts]
import {Configuration} from "@tsed/di";
import {RestCtrl} from "./controllers/RestCtrl";

@Configuration({
  mount: {
    "/": [RestCtrl]
  }
})
export class Server {}

```

:::

This example will produce these following routes:

| Verb | Route                    | Method               |
| ---- | ------------------------ | -------------------- |
| GET  | `/rest`                  | `RestCtrl.get()`     |
| GET  | `/rest/calendars`        | `CalendarCtrl.get()` |
| GET  | `/rest/calendars/events` | `EventCtrl.get()`    |
| GET  | `/rest/events`           | `EventCtrl.get()`    |

## Inheritance

Ts.ED supports the ES6 inheritance class. So you can declare a controller that implement some generic method
and use it on a children class.

To do that just declare a parent controller without the @@Controller@@ decorator.

```ts
import {Get} from "@tsed/schema";
import {QueryParams} from "@tsed/platform-params";
import {SomeService} from "./SomeService.js";

export abstract class BaseCtrl {
  constructor(private someService: SomeService) {}

  @Get("/list")
  list(@QueryParams("search") search: any) {
    return this.someService.list(search);
  }
}

```

Then, on your child controller:

```ts
import {PathParams} from "@tsed/platform-params";
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {BaseCtrl} from "./BaseCtrl";

@Controller("/child")
export abstract class ChildCtrl extends BaseCtrl {
  @Get("/:id")
  get(@PathParams("id") id: string): any {
    return {id: id};
  }
}

```
