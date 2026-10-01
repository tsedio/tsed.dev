---
url: /introduction/getting-started.md
description: Start your first Ts.ED project with the CLI or clone a starter project.
---

# Getting Started

## Try it online

You can try Ts.ED directly in your browser on [CodeSandbox](https://codesandbox.io/p/devbox/tsed-mongoose-example-omkbm).

## Installation

To get started, you can either scaffold the project with the Ts.ED CLI, or clone a starter project.

To scaffold the project with the CLI, run the following commands. This will create a new project directory,
and populate the directory with the initial core Ts.ED files and supporting modules, creating a conventional base structure for your project.
Creating a new project with the CLI is recommended for first-time users.

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
bunx -p @tsed/cli tsed init .
```

:::

::: warning
Ts.ED v8 required at least Node.js v20.11.0 version to work.
:::

You will be greeted with a few simple questions:

```ansi
[0;32m?[0m Choose the target platform: (Use arrow keys)
[0;36m❯ Express.js[0m
  Koa.js
  Fastify.js

[0;32m?[0m Choose the architecture for your project: (Use arrow keys)
[0;36m❯ Ts.ED[0m
  Feature

[0;32m?[0m Choose the convention file styling: (Use arrow keys)
[0;36m❯ Ts.ED[0m
  Angular

[0;32m?[0m Check the features needed for your project (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
  [0;32m◉[0m Swagger
  ◯ OpenID Connect provider
  [0;32m◉[0m Testing
[0;36m❯[0m [0;32m◉[0m Linter
  ◯ Commands
  ◯ TypeGraphQL
  ◯ Database

[0;32m?[0m Choose unit framework (Use arrow keys)
[0;36m❯ Jest[0m
  Mocha + Chai + Sinon

[0;32m?[0m Choose linter tools framework (Use arrow keys)
[0;36m❯ EsLint[0m

[0;32m?[0m Choose extra linter tools (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
  [0;32m◉[0m Prettier
[0;36m❯[0m [0;32m◉[0m Lint on commit

[0;32m?[0m Choose the runtime:
[0;36m❯ Node.js[0m
  Node.js + Babel
  Node.js + Webpack
  Node.js + SWC
  Bun.js (experimental)

[0;32m?[0m Choose the package manager:
  NPM
  Yarn
[0;36m❯ Yarn Berry[0m

```

::: tip
By default, it's recommended to select the following options: Express, Ts.ED (convention), Swagger, Jest and Eslint + prettier.
:::

When all options are selected, the CLI will generate all files.
When it's done, run one of this command:

::: code-group

```sh [npm]
npm start
```

```sh [yarn]
yarn start
```

```sh [pnpm]
pnpm start
```

```sh [bun]
bun start
```

:::

```ansi
[32m[2024-02-18T12:51:22.798] [INFO ] [TSED] - [39mLoading EXPRESS platform adapter... [33m+2ms[39m
[32m[2024-02-18T12:51:22.800] [INFO ] [TSED] - [39mInjector created... [33m+2ms[39m
[32m[2024-02-18T12:51:22.934] [INFO ] [TSED] - [39mBuild providers [33m+134ms[39m
[32m[2024-02-18T12:51:22.986] [INFO ] [TSED] - [39mSettings and injector loaded... [33m+52ms[39m
[32m[2024-02-18T12:51:22.986] [INFO ] [TSED] - [39mMount app context [33m+0ms[39m
[32m[2024-02-18T12:51:22.986] [INFO ] [TSED] - [39mLoad routes [33m+0ms[39m
[32m[2024-02-18T12:51:22.990] [INFO ] [TSED] - [39mRoutes mounted... [33m+4ms[39m
[32m[2024-02-18T12:51:22.990] [INFO ] [TSED] - [39m
┌───────────────┬───────────────────┬────────────────────────────┐
│ Method        │ Endpoint          │ Class method               │
│───────────────│───────────────────│────────────────────────────│
│ [32mGET[39m           │ /rest/hello-world │ HelloWorldController.get() │
│───────────────│───────────────────│────────────────────────────│
│ [32mGET[39m           │ /                 │ IndexController.get()      │
└───────────────┴───────────────────┴────────────────────────────┘
[32m[2024-02-18T12:51:22.993] [INFO ] [TSED] - [39mListen server on http://0.0.0.0:8083
[32m[2024-02-18T12:51:22.993] [INFO ] [TSED] - [39m[default] Swagger JSON is available on http://0.0.0.0:8083/doc/swagger.json
[32m[2024-02-18T12:51:22.993] [INFO ] [TSED] - [39m[default] Swagger UI is available on http://0.0.0.0:8083/doc/
[32m[2024-02-18T12:51:22.993] [INFO ] [TSED] - [39mStarted in 197 ms [33m+3ms[39m

```

## Update dependencies

::: warning
If you have to upgrade Ts.ED dependencies, keep in mind this point:

It's really important to keep the same version for all `@tsed/*` (excepted @tsed/logger) packages.
To prevent errors, fix the version for each Ts.ED packages:

```json
{
  "dependencies": {
    "@tsed/platform-http": "8.0.0",
    "@tsed/di": "8.0.0",
    "@tsed/core": "8.0.0",
    "@tsed/exceptions": "8.0.0",
    "@tsed/platform-express": "8.0.0",
    "@tsed/swagger": "8.0.0"
  }
}
```

:::

## Project examples

Alternatively, you can check out one of these projects:

If none of previous solutions are satisfying maybe you are in these cases:

* [I want to migrate my application from Ts.ED v6](/introduction/migrate-from-v6)
* [I want to migrate my application from Ts.ED v7](/introduction/migrate-from-v7)
* [I want to migrate my application from Express.js](/introduction/migrate-from-express)

## What's next?

Now you can follow one of these links to develop your new application:

* [Create your first controller](/introduction/create-your-first-controller.md)
* [Change server configuration](/docs/configuration/index.md)
* [Load configuration from files](/docs/configuration/index.md)
* [What is the Platform API](/docs/platform-api.md)
