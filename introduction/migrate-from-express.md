---
url: /introduction/migrate-from-express.md
description: Migrate Ts.ED application from Express.js.
---

# Migrate from Express.js

## Installation

You can generate a Ts.ED project over an existing project using the Ts.ED CLI.
The CLI will keep your existing package.json and install the required dependencies.

::: warning
Make sure your don't have an `src/index.ts` or `src/index.js` file in your project.
Also, Ts.ED will create scripts commands in your `package.json` file. Make sure you don't have any conflict with existing scripts.
Rename your scripts name if necessary.
:::

::: tip
A good solution, is to generate to move legacy code into a `src/legacy` directory and generate the Ts.ED project.

You should have this directory tree:

```
.
├── src
│   ├── legacy/server.js
│   ├── controllers
│   ├── services
│   ├── middlewares
│   ├── index.ts
│   └── Server.ts
└── package.json
```

:::

Start by initializing a new Ts.ED project using the following command:

::: code-group

```sh [npm]
npx -p @tsed/cli tsed init .
```

```sh [yarn]
yarn set version berry
yarn dlx -p @tsed/cli tsed init .
```

```sh [pnpm]
pnpm --package=@tsed/cli dlx tsed init .
```

```sh [bun]
bnx -p @tsed/cli tsed init .
```

:::

::: info
Select Express.js and your preferred option depending on your needs and your project.
:::

## Configure the server

Once the project is generated, you can start to migrate your existing Express.js application to Ts.ED.

If you use the `Express.router`, the migration will be very simple, because we can get the `Express.router` instance and add it to Ts.ED.
For example here is the legacy `server.js` file:

```js
const express = require("express");
const bodyParser = require("body-parser");
const compress = require("compression");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const {router: productRouter} = require("./routes/products");

const app = express();
const restRouter = express.Router({mergeParams: true});

// middlewares
app
  .use(cookieParser())
  .use(compress({}))
  .use(methodOverride())
  .use(bodyParser.json())
  .use(
    bodyParser.urlencoded({
      extended: true
    })
  );

// routes
restRouter.use("/products", productRouter);

app.use("/rest", restRouter);

exports.expressApp = app;
exports.expressRouter = restRouter;

```

And here is the new `Server.ts` file:

```ts
import {PlatformApplication} from "@tsed/common";
import {Configuration, Inject} from "@tsed/di";

import {expressRouter} from "../legacy/server.js"; // import the router from the legacy code

@Configuration({
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8083,
  httpsPort: false, // CHANGE
  disableComponentsScan: true,
  ajv: {
    returnsCoercedValues: true
  },
  swagger: [
    {
      path: "/doc",
      specVersion: "3.0.1"
    }
  ],
  middlewares: [
    "cors",
    "cookie-parser",
    "compression",
    "method-override",
    "json-parser",
    {use: "urlencoded-parser", options: {extended: true}},
    {use: expressRouter, hook: "$beforeRoutesInit"} // add the router here as middleware
  ]
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;
}

```

We just need to add the `Express.router` instance on the middlewares configuration.

## Get Ts.ED injector in legacy context

If you want to use Ts.ED services in your legacy code, you can get the injector instance by using `getContext()` if you are in a request context.

Here is an example:

```ts
import {MyService} from "./services/MyService";
import {Router} from "express";

const router = Router({mergeParams: true});

router.get("/:id", (req, res) => {
  const $ctx = getContext();
  const service = $ctx.injector.get(MyService);

  service.doSomething();

  res.send("Hello");
});
```
