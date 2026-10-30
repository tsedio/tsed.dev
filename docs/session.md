---
url: /docs/session.md
description: >-
  Ts.ED provides two decorators to get Session and Cookies values in your
  controller.
---

# Session & cookies

Ts.ED provides two decorators to get @@Session@@ and @@Cookies@@ values in your controller.

## Installation

Before using the Session and Cookies, we need to install a module like [express-session](https://www.npmjs.com/package/express-session) but
you can use another module which follows the same convention.

::: code-group

```bash [Express.js]
npm install --save express-session
yarn add express-session
pnpm add express-session
bun add express-session
```

```bash [Koa.js]
npm install --save koa-session
yarn add koa-session
pnpm add koa-session
bun add koa-session
```

:::

::: warning
The default server-side session storage, MemoryStore, is purposely not designed for a production environment. It will leak memory under most conditions, does not scale past a single process, and is meant for debugging and developing.

For a list of stores, see [compatible session stores](https://www.npmjs.com/package/express-session#compatible-session-stores).
:::

## Configuration

Edit your Server and add these lines:

```ts
import {PlatformApplication} from "@tsed/platform-http";
import {Configuration, Inject} from "@tsed/di";
import "@tsed/platform-express";
import compress from "compression";
import cookieParser from "cookie-parser";
import session from "express-session";
import methodOverride from "method-override";

@Configuration({
  middlewares: [
    cookieParser(),
    compress(),
    methodOverride(),
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: true,
      cookie: {secure: true}
    })
  ]
})
export class Server {
  @Inject()
  app: PlatformApplication;

  public $beforeRoutesInit(): void | Promise<any> {
    this.app.getApp().set("trust proxy", 1); // trust first proxy
  }
}

```

## Usage

### Session

#### Get value

```ts
import {Session, BodyParams} from "@tsed/platform-params";
import {Get, Post} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {Returns} from "@tsed/schema";

@Controller("/")
export class MyCtrl {
  @Get("/whoami")
  whoAmI(@Session() session: any) {
    console.log("User in session =>", session.user);

    return session.user && session.user.id ? `Hello user ${session.user.name}` : "Hello world";
  }

  @Post("/login")
  @Returns(204)
  login(@BodyParams("name") name: string, @Session("user") user: any) {
    user.id = "1";
    user.name = name;
  }

  @Post("/logout")
  @Returns(204)
  logout(@Session("user") user: any) {
    user.id = null;
    delete user.name;
  }
}

```

#### Set value

```typescript
import {Controller} from "@tsed/di";
import {BodyParams, Session} from "@tsed/platform-params";
import {Post, Returns} from "@tsed/schema";

@Controller("/")
export class MyCtrl {
  @Post("/")
  updateSession(@Session() session: any) {
    session.count = (session.count || 0) + 1;
    return "OK - " + session.count;
  }
}
```

### Cookies

#### Get value

```ts
import {Cookies} from "@tsed/platform-params";
import {Post} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {IUser} from "./interfaces/IUser";

@Controller("/")
class MyCtrl {
  @Post("/")
  getCookies(@Cookies() cookies: any) {
    console.log("Entire cookies", cookies);
  }

  @Post("/")
  getIdInCookies(@Cookies("id") id: string) {
    console.log("ID", id);
  }

  @Post("/")
  getObjectInCookies(@Cookies("user") user: IUser) {
    console.log("user", user);
  }
}

```

#### Set value

```typescript
import {Controller} from "@tsed/di";
import {BodyParams, Cookies} from "@tsed/platform-params";
import {Post, Returns} from "@tsed/schema";

@Controller("/")
export class MyCtrl {
  @Post("/")
  updateSession(@Cookies() cookies: any) {
    cookies.count = (cookies.count || 0) + 1;
    return "OK - " + cookies.count;
  }
}
```

## Initialize session

Sometimes we want to be sure that the session is correctly initialized with the right values.

Let's start by creating a middleware CreateRequestSessionMiddleware in `middlewares` directory:

```ts
import {Req} from "@tsed/platform-http";
import {Middleware} from "@tsed/platform-middlewares";

@Middleware()
export class CreateRequestSessionMiddleware {
  use(@Req() request: Req) {
    if (request.session) {
      request.session.user = request.session.user || {
        id: null
      };
    }
  }
}

```

Then, add this middleware on the server:

```ts
import {PlatformApplication} from "@tsed/platform-http";
import {Configuration, Inject} from "@tsed/di";
import "@tsed/platform-express";
import compress from "compression";
import cookieParser from "cookie-parser";
import session from "express-session";
import methodOverride from "method-override";
import {CreateRequestSessionMiddleware} from "./middlewares/CreateRequestSessionMiddleware";

@Configuration({
  middlewares: [
    cookieParser(),
    compress({}),
    methodOverride(),
    session({
      secret: "keyboard cat", // change secret key
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false // set true if HTTPS is enabled
      }
    }),
    CreateRequestSessionMiddleware
  ]
})
class Server {
  @Inject()
  app: PlatformApplication;

  public $beforeRoutesInit(): void | Promise<any> {
    this.app.getApp().set("trust proxy", 1); // trust first proxy
  }
}

```

Finally, you can read and write values in your controller:

```ts
import {Session, BodyParams} from "@tsed/platform-params";
import {Get, Post} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {Returns} from "@tsed/schema";

@Controller("/")
export class MyCtrl {
  @Get("/whoami")
  whoAmI(@Session() session: any) {
    console.log("User in session =>", session.user);

    return session.user && session.user.id ? `Hello user ${session.user.name}` : "Hello world";
  }

  @Post("/login")
  @Returns(204)
  login(@BodyParams("name") name: string, @Session("user") user: any) {
    user.id = "1";
    user.name = name;
  }

  @Post("/logout")
  @Returns(204)
  logout(@Session("user") user: any) {
    user.id = null;
    delete user.name;
  }
}

```

In addition, you can add integration tests with SuperTest and `@tsed/testing` package.
Here is an example of Rest API test:

::: code-group

```ts \[Mocha]
import {PlatformTest} from "@tsed/platform-http/testing";
import {expect} from "chai";
import * as SuperTest from "supertest";
import {Server} from "../../../src/Server";

describe("Session", () => {
  let request: any;

  before(PlatformTest.bootstrap(Server));
  before(() => {
    request = SuperTest.agent(PlatformTest.callback());
  });
  after(PlatformTest.reset);

  describe("Login / Logout", () => {
    it("should create session return hello world and connect a fake user", async () => {
      // WHEN
      const response1 = await request.get("/rest/whoami").expect(200);

      await request.post("/rest/login").send({name: "UserName"}).expect(204);

      const response2 = await request.get("/rest/whoami").expect(200);

      await request.post("/rest/logout").expect(204);

      const response3 = await request.get("/rest/whoami").expect(200);

      // THEN
      expect(response1.text).to.eq("Hello world");
      expect(response2.text).to.eq("Hello user UserName");
      expect(response3.text).to.eq("Hello world");
    });
  });
});

```

:::

::: tip
You can find a working example on [Express Session here](https://github.com/tsedio/tsed-example-session).
:::
