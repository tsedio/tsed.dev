---
url: /introduction/capabilities.md
description: >-
  Discover the capabilities of Ts.ED, a Node.js and TypeScript framework on top
  of Express/Koa.js.
---

# Capabilities

Ts.ED is a Node.js and TypeScript framework on top of [Express.js](/docs/configuration/express.html), [Koa.js](/docs/configuration/koa.html), [Fastify.js](/docs/configuration/fastify.html). It provides different platform adapters
to build your awesome server-side application.

Depending on the platform you choose, Ts.ED provides a level of abstraction above these common Node.js frameworks with the [Platform API](/docs/platform-api.md)
but some features are not available on all platforms.

You can find below the list of features and plugins provided by Ts.ED and the compatibility with the different platforms.

## Runtime support

Here are the runtime support provided by Ts.ED:

| Runtime           |                                                    |
| ----------------- | -------------------------------------------------- |
| Node.js           |  |
| Node.js + Babel   |  |
| Node.js + Webpack |  |
| Node.js + SWC     |  |
| Bun.js            |  |

## Platform features support

Here is the feature list provided by Ts.ED and the compatibility with the different platforms:

| Features                                                                                                                                                                                            | Express.js                                         | Koa.js                                             | Fastify.js (\*)                                    | [Serverless AWS](/docs/platform-serverless.md)      | [CLI](/docs/command.md)                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| [Controllers](/docs/controllers.md)  ([routing](/docs/controllers.md), [nested](/docs/controllers.html#nested-controllers), [inheritance](/docs/controllers.html#inheritance)) |  |  |  |   |  |
| [Providers](/docs/providers.md)                                                                                                                                                                     |  |  |  |   |   |
| [Model & JsonSchema](/docs/model.md)                                                                                                                                                                |  |  |  |   |   |
| [JsonMapper](/docs/json-mapper.md)                                                                                                                                                                  |  |  |  |   |   |
| [Middlewares](/docs/middlewares.md)                                                                                                                                                                 |  |  |  |  |  |
| [Pipes](/docs/pipes.md)                                                                                                                                                                             |  |  |  |   |  |
| [Interceptors](/docs/interceptors.md)                                                                                                                                                               |  |  |  |   |   |
| [Authentication](/docs/authentication.md)                                                                                                                                                           |  |  |  | Using interceptors                                  |  |
| [Hooks](/docs/hooks.md)                                                                                                                                                                             |  |  |  |   |   |
| [Exceptions](/docs/exceptions.md)                                                                                                                                                                   |  |  |  |   |  |
| [Logger](/docs/logger.md)                                                                                                                                                                           |  |  |  |   |   |
| [Upload files](/docs/upload-files.md)                                                                                                                                                               |  |  |  | ?                                  |  |
| [Serve files](/docs/serve-files.md)                                                                                                                                                                 |  |  |  |  |  |
| [Templating](/docs/templating.md)                                                                                                                                                                   |  |  |  |   |  |
| [Validation](/docs/validation.md)                                                                                                                                                                   |  |  |  |   |  |
| [Response Filters](/docs/response-filter.md)                                                                                                                                                        |  |  |  |   |  |
| [Cache](/docs/cache.md)                                                                                                                                                                             |  |  |  |   |  |

(\*) The platform-fastify has some limitations over the platform-express:

* Deep Query Params aren't supported.
* Session has a small issue over serialization (for hidden field), but it works.

## Platform plugins support

Here are the plugins provided by Ts.ED and the compatibility with the different platforms:

| Features                                | Express.js                                         | Koa.js                                              | Fastify.js                                          | [Serverless AWS](/docs/platform-serverless.md)      | [CLI](/docs/command.md)                             |
| --------------------------------------- | -------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| [Passport.js](/tutorials/passport.md)   |  |  |  |  |  |
| [Prisma](/tutorials/prisma.md)          |  |   |   |   |   |
| [TypeORM](/tutorials/typeorm.md)        |  |   |   |   |   |
| [Mongoose](/tutorials/mongoose.md)      |  |   |   |   |   |
| [IORedis](/tutorials/ioredis.md)        |  |   |   |   |   |
| [Objection.js](/tutorials/objection.md) |  |   |   |   |   |
| [GraphQL](/tutorials/graphql.md)        |  |   | ?                                  |  |  |
| [Socket.io](/tutorials/socket-io.md)    |  |   | ?                                  |  |  |
| [OIDC](/tutorials/oidc.md)              |  |   | ?                                  |  |  |
| [Stripe](/tutorials/stripe.md)          |  |   | ?                                  | ?                                  |  |
| [MCP](/docs/mcp.md)                     |  |   |   |  |  |
