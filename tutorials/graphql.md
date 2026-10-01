---
url: /tutorials/graphql.md
description: Use Apollo, Nexus or Type-graphql with Ts.ED framework.
---

# GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL
provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly
what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

## Feature

* Create [Apollo](https://www.apollographql.com/docs/apollo-server/api/apollo-server.html) Server and bind it with
  Ts.ED,
* Create multiple servers,
* Support [TypeGraphQL](https://typegraphql.com/), [Nexus](https://nexusjs.org/) or standalone Apollo server.

## Apollo

Unlock microservices potential with Apollo GraphQL. Seamlessly integrate APIs, manage data, and enhance performance. Explore Apollo's innovative solutions.
Ts.ED provides a module to create multiple Apollo server and bind it with Ts.ED server (Express or Koa).

See [here](/tutorials/graphql-apollo.md) for more details.

## Nexus

GraphQL Nexus' APIs were designed with type-safety in mind. We auto-generate type-definitions as you develop, and infer them in your code, giving you IDE completion and type error catching out of the box!

See [here](/tutorials/graphql-nexus.md) for more details.

## TypeGraphQL

Although TypeGraphQL is data-layer library agnostic, it integrates well with other decorator-based libraries, like TypeORM, sequelize-typescript or Typegoose.

See [here](/tutorials/graphql-typegraphql.md) for more details.

## GraphQL WS (subscription)

GraphQL Websocket allows you to use the `subscription` feature of GraphQL using the Websocket transport protocol.

See [here](/tutorials/graphql-ws.md) for more details.

## ApolloService

ApolloService let you retrieve an instance of ApolloServer:

```typescript
import {AfterRoutesInit} from "@tsed/platform-http";
import {Injectable} from "@tsed/di";
import {graphQLService} from "@tsed/apollo";
import {ApolloServer} from "@apollo/server";

@Injectable()
export class UsersService implements AfterRoutesInit {
  @Injec()
  apolloService: ApolloService;

  private server: ApolloServer;

  $afterRoutesInit() {
    this.server = this.apolloService.get("server1");
  }
}
```

## DataSources

Apollo Server provides a mechanism to fetch data from a REST API or a database. This mechanism is called DataSources.
Ts.ED allow you to register your DataSources using the @@DataSource@@ decorator.

```typescript
```

## Testing

Here is an example to create a test server based on TypeGraphQL and run a query:

::: tip

The unit example is also available to test any Apollo Server!
:::

::: code-group

```ts \[Jest]
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

```ts \[Mocha]
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

```ts \[RecipeType.ts]
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

```ts \[RecipeArgs.ts]
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

```ts \[RecipesService.ts]
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

```ts \[RecipeResolver.ts]
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

:::

## Author

## Maintainers
