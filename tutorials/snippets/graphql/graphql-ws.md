---
url: /tutorials/snippets/graphql/graphql-ws.md
description: >-
  GraphQL Websocket allows you to use the subscription feature of GraphQL using
  the Websocket transport protocol.
---

# GraphQL WS

GraphQL Websocket allows you to use the `subscription` feature of GraphQL using the Websocket transport protocol.
This module is based on the [graphql-ws](https://the-guild.dev/graphql/ws) package. It pre-configures the socket server and GraphQL server to work together.

## Feature

* Support multiple GraphQL server
* Enable subscription feature of GraphQL

### Installation

This module need to be used with `@tsed/apollo` module. So, you must install it before (see [here](/tutorials/graphql-apollo.md)).

```bash
npm install --save @tsed/graphql-ws graphql-ws
```

```bash
yarn add @tsed/graphql-ws graphql-ws
```

```typescript
import {Configuration} from "@tsed/common";
import "@tsed/platform-express";
import "@tsed/apollo";
import "@tsed/graphql-ws";
import {join} from "node:path";

@Configuration({
  apollo: {
    server1: {
      // GraphQL server configuration
      path: "/",
      playground: true, // enable playground GraphQL IDE. Set false to use Apollo Studio
      plugins: [], // Apollo plugins

      wsServerOptions: {
        // See options descriptions on
      },
      wsUseServerOptions: {
        // See options descriptions on GraphQL WS
      }

      // Give custom server instance
      // server?: (config: Config) => ApolloServer;

      // ApolloServer options
      // ...
      // See options descriptions on https://www.apollographql.com/docs/apollo-server/api/apollo-server.html
    }
  },
  graphqlWs: {
    // global options
    wsServerOptions: {
      // See options descriptions on
    },
    wsUseServerOptions: {
      // See options descriptions on
    }
  }
})
export class Server {}
```

## Register plugins

You can register plugins with the `plugins` property. The plugins are executed in the order of declaration.

```typescript
import {Configuration} from "@tsed/common";
import "@tsed/platform-express";
import "@tsed/apollo";
import {join} from "node:path";

@Configuration({
  apollo: {
    server1: {
      plugins: [] // Apollo plugins
    }
  }
})
export class Server {}
```

But if you need to register and access to the injector, you can use the `$alterApolloServerPlugins` hook. For example,
you can register the `graphql-ws` necessary to support the `subscription` feature of GraphQL like this:

```typescript
import {Constant, Inject, InjectorService, Module} from "@tsed/di";
import {useServer} from "graphql-ws/lib/use/ws";
import Http from "node:http";
import Https from "node:https";
import {WebSocketServer} from "ws";
import {GraphQLWSOptions} from "./GraphQLWSOptions";

@Module()
export class GraphQLWSModule {
  @Constant("graphqlWs", {})
  private settings: GraphQLWSOptions;

  @Inject(Http.Server)
  private httpServer: Http.Server | null;

  @Inject(Https.Server)
  private httpsServer: Https.Server | null;

  @Inject()
  private injector: InjectorService;

  createWSServer(settings: GraphQLWSOptions) {
    const wsServer = new WebSocketServer({
      ...(this.settings.wsServerOptions || {}),
      ...settings.wsServerOptions,
      server: this.httpsServer || this.httpServer!,
      path: settings.path
    });

    return useServer(
      {
        ...(this.settings.wsUseServerOptions || {}),
        ...settings.wsUseServerOptions,
        schema: settings.schema
      },
      wsServer
    );
  }

  async $alterApolloServerPlugins(plugins: any[], settings: GraphQLWSOptions) {
    const wsServer = await this.createWSServer(settings);

    this.injector.logger.info(`Create GraphQL WS server on: ${settings.path}`);

    return plugins.concat({
      serverWillStart() {
        return {
          async drainServer() {
            await wsServer.dispose();
          }
        };
      }
    } as any);
  }
}
```

::: tip Note
Ts.ED provide a `@tsed/graphql-ws` package to support the `subscription` feature of GraphQL. See [here](https://tsed.dev/api/graphql-ws.html) for more details.
:::

## Nexus

### Installation

```bash
npm install --save @tsed/apollo
npm install --save nexus graphql apollo-server-express
npm install --save-dev apollo-server-testing
```

```bash
npm install --save @tsed/apollo graphql
npm install --save nexus graphql apollo-server-koa
npm install --save-dev apollo-server-testing
```

Now, we can configure the Ts.ED server by importing `@tsed/apollo` in your Server:

```typescript
import {Configuration} from "@tsed/common";
import "@tsed/platform-express";
import "@tsed/apollo";
import {schema} from "./schema";
import {join} from "node:path";

@Configuration({
  apollo: {
    server1: {
      // GraphQL server configuration
      path: "/",
      playground: true, // enable playground GraphQL IDE. Set false to use Apollo Studio
      schema,
      plugins: [] // Apollo plugins

      // Give custom server instance
      // server?: (config: Config) => ApolloServer;

      // ApolloServer options
      // ...
      // See options descriptions on https://www.apollographql.com/docs/apollo-server/api/apollo-server.html
    }
  }
})
export class Server {}
```

Then create `schema/index.ts`:

```typescript
import {makeSchema} from "nexus";
import {join} from "node:path";

export const schema = makeSchema({
  types: [], // 1
  outputs: {
    typegen: join(process.cwd(), "..", "..", "nexus-typegen.ts"), // 2
    schema: join(process.cwd(), "..", "..", "schema.graphql") // 3
  }
});
```

## TypeGraphQL

### Installation

To begin, install the `@tsed/typegraphql` package:

```bash
npm install --save @tsed/typegraphql graphql apollo-server-express
npm install --save type-graphql apollo-datasource apollo-datasource-rest
npm install --save-dev apollo-server-testing
```

```bash
npm install --save @tsed/typegraphql graphql apollo-server-koa
npm install --save type-graphql apollo-datasource apollo-datasource-rest
npm install --save-dev apollo-server-testing
```

Now, we can configure the Ts.ED server by importing `@tsed/typegraphql` in your Server:

```ts
import "@tsed/platform-express";
import "@tsed/typegraphql";
import "./resolvers/index.js"; // barrel file with all resolvers

import {Configuration} from "@tsed/di";

@Configuration({
  typegraphql: {
    server1: {
      // GraphQL server configuration
      path: "/",
      playground: true, // enable playground GraphQL IDE. Set false to use Apollo Studio

      // resolvers?: (Function | string)[];
      // dataSources?: Function;
      // server?: (config: Config) => ApolloServer;

      // Apollo Server options
      // See options descriptions on https://www.apollographql.com/docs/apollo-server/api/apollo-server.html
      serverConfig: {
        plugins: []
      }

      // middlewareOptions?: ServerRegistration;

      // type-graphql
      // See options descriptions on https://19majkel94.github.io/type-graphql/
      // buildSchemaOptions?: Partial<BuildSchemaOptions>;
    }
  }
})
export class Server {}

```

### Types

We want to get the equivalent of this type described in SDL:

```
type Recipe {
  id: ID!
  title: String!
  description: String
  creationDate: Date!
  ingredients: [String!]!
}
```

So we create the Recipe class with all properties and types:

```typescript
class Recipe {
  id: string;
  title: string;
  description?: string;
  creationDate: Date;
  ingredients: string[];
}
```

Then we decorate the class and its properties with decorators:

```ts
import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
export class Recipe {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field({nullable: true})
  description?: string;

  @Field()
  creationDate: Date;

  @Field((type) => [String])
  ingredients: string[];
}

```

The detailed rules for when to use nullable, array and others are described
in [fields and types docs](https://typegraphql.com/docs/types-and-fields.html).

### Resolvers

After that we want to create typical crud queries and mutation. To do that we create the resolver (controller) class
that will have injected RecipeService in the constructor:

```ts
import {Inject} from "@tsed/di";
import {ResolverController} from "@tsed/typegraphql";
import {Arg, Args, Query} from "type-graphql";

import {RecipeNotFoundError} from "../errors/RecipeNotFoundError";
import {RecipesService} from "../services/RecipesService";
import {Recipe} from "../types/Recipe";
import {RecipesArgs} from "../types/RecipesArgs";

@ResolverController(Recipe)
export class RecipeResolver {
  @Inject()
  private recipesService: RecipesService;

  @Query((returns) => Recipe)
  async recipe(@Arg("id") id: string) {
    const recipe = await this.recipesService.findById(id);
    if (recipe === undefined) {
      throw new RecipeNotFoundError(id);
    }

    return recipe;
  }

  @Query((returns) => [Recipe])
  recipes(@Args() {skip, take}: RecipesArgs) {
    return this.recipesService.findAll({skip, take});
  }
}

```

#### Multiple GraphQL server

If you register multiple GraphQL servers, you must specify the server id in the `@ResolverController` decorator.

```typescript
@ResolverController(Recipe, {id: "server1"})
```

Another solution is to not use `@ResolverController` (use `@Resolver` from TypeGraphQL), and declare explicitly the resolver in the server configuration:

```typescript
@Configuration({
  graphql: {
    server1: {
      resolvers: {
        RecipeResolver
      }
    },
    server2: {
      resolvers: {
        OtherResolver
      }
    }
  }
})
```

### Data Source

Data source is one of the Apollo server features which can be used as option for your Resolver or Query. Ts.ED provides
a @@DataSourceService@@ decorator to declare a DataSource which will be injected to the Apollo server context.

```ts
import {RESTDataSource} from "@apollo/datasource-rest";
import {DataSource} from "@tsed/typegraphql";

import {User} from "../models/User";

@DataSource()
export class UserDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://myapi.com/api/users";
  }

  getUserById(id: string): Promise<User> {
    return this.get(`/${id}`);
  }
}

```

Then you can retrieve your data source through the context in your resolver like that:

```ts
import {ResolverController} from "@tsed/typegraphql";
import {Arg, Authorized, Ctx, Query} from "type-graphql";

import {UserDataSource} from "../datasources/UserDataSource";
import {User} from "../models/User";

@ResolverController(User)
export class UserResolver {
  @Authorized()
  @Query(() => User)
  public async user(@Arg("userId") userId: string, @Ctx("dataSources") dataSources: any): Promise<User> {
    const userDataSource: UserDataSource = dataSources.userDataSource;

    return userDataSource.getUserById(userId);
  }
}

```

## Get Server instance

ApolloService (or TypeGraphQLService) lets you to retrieve an instance of ApolloServer.

```ts
import {ApolloService} from "@tsed/apollo";
import {Inject, Injectable} from "@tsed/di";
import {AfterRoutesInit} from "@tsed/platform-http";
import {ApolloServer} from "apollo-server-express";

@Injectable()
export class UsersService implements AfterRoutesInit {
  @Inject()
  private ApolloService: ApolloService;
  // or private typeGraphQLService: TypeGraphQLService;

  private server: ApolloServer;

  $afterRoutesInit() {
    this.server = this.apolloService.get("server1")!;
  }
}

```

For more information about ApolloServer, look at its
documentation [here](https://www.apollographql.com/docs/apollo-server/api/apollo-server.html);

## Testing

Here is an example to create a test server based on TypeGraphQL and run a query:

::: tip

The unit example is also available to test any Apollo Server!
:::

```ts
import "@tsed/platform-express";

import {ApolloService} from "@tsed/apollo";
import {PlatformTest} from "@tsed/platform-http/testing";
import {ApolloServerTestClient, createTestClient} from "apollo-server-testing";
import {expect} from "chai";
import gql from "graphql-tag";

import {Server} from "./app/Server";

const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      title
      description
      creationDate
    }
  }
`;

describe("Recipes", () => {
  let request: ApolloServerTestClient;
  beforeAll(PlatformTest.bootstrap(Server));
  beforeAll(() => {
    const server = PlatformTest.get<ApolloService>(ApolloService).get("server1")!;
    // OR const server = PlatformTest.get<ApolloService>(ApolloService).get("typegraphql-server1")!;
    request = createTestClient(server);
  });
  afterAll(PlatformTest.reset);

  it("should get recipes", async () => {
    const response = await request.query({
      query: GET_RECIPES,
      variables: {}
    });

    expect(response.data).toEqual({
      recipes: [
        {
          creationDate: "2020-08-20T00:00:00.000Z",
          description: "Description",
          title: "title"
        }
      ]
    });
  });
});

```

```ts
import "@tsed/platform-express";

import {ApolloService} from "@tsed/apollo";
import {PlatformTest} from "@tsed/platform-http/testing";
import {ApolloServerTestClient, createTestClient} from "apollo-server-testing";
import {expect} from "chai";
import gql from "graphql-tag";

import {Server} from "./app/Server";

const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      title
      description
      creationDate
    }
  }
`;

describe("Recipes", () => {
  let request: ApolloServerTestClient;
  before(PlatformTest.bootstrap(Server));
  before(() => {
    const server = PlatformTest.get<ApolloService>(ApolloService).get("server1")!;
    // for TypeGraphQL
    // use PlatformTest.get<ApolloService>(ApolloService).get("typegraphl-server1")!;
    request = createTestClient(server);
  });
  after(PlatformTest.reset);

  it("should get recipes", async () => {
    const response = await request.query({
      query: GET_RECIPES,
      variables: {}
    });

    expect(response.data).to.deep.eq({
      recipes: [
        {
          creationDate: "2020-08-20T00:00:00.000Z",
          description: "Description",
          title: "title"
        }
      ]
    });
  });
});

```

```ts
import {Inject} from "@tsed/di";
import {ResolverController} from "@tsed/typegraphql";
import {Arg, Args, Query} from "type-graphql";

import {RecipeNotFoundError} from "../errors/RecipeNotFoundError";
import {RecipesService} from "../services/RecipesService";
import {Recipe} from "../types/Recipe";
import {RecipesArgs} from "../types/RecipesArgs";

@ResolverController(Recipe)
export class RecipeResolver {
  @Inject()
  private recipesService: RecipesService;

  @Query((returns) => Recipe)
  async recipe(@Arg("id") id: string) {
    const recipe = await this.recipesService.findById(id);
    if (recipe === undefined) {
      throw new RecipeNotFoundError(id);
    }

    return recipe;
  }

  @Query((returns) => [Recipe])
  recipes(@Args() {skip, take}: RecipesArgs) {
    return this.recipesService.findAll({skip, take});
  }
}

```

```ts
import {Recipe} from "../types/Recipes";

export class RecipesService {
  recipes: Recipe[] = [
    new Recipe({
      id: "1",
      title: "title",
      description: "Description",
      creationDate: new Date("2020-08-20"),
      ingredients: []
    })
  ];

  async findById(id: string) {
    return this.recipes.find((item) => item.id === id);
  }

  async findAll(options: any) {
    return this.recipes;
  }
}

```

```ts
import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
export class Recipe {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field({nullable: true})
  description?: string;

  @Field()
  creationDate: Date;

  @Field((type) => [String])
  ingredients: string[];
}

```

```ts
import {ArgsType, Field, Int} from "type-graphql";

@ArgsType()
export class RecipeArgs {
  @Field((type) => Int, {nullable: true})
  skip?: number;

  @Field((type) => Int, {nullable: true})
  take?: number;

  @Field({nullable: true})
  title?: string;
}

```

## Author

## Maintainers
