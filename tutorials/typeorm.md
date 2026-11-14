---
url: /tutorials/typeorm.md
description: Documentation over TypeORM provided by Ts.ED framework.
---

# TypeORM

## TypeORM v0.3.x

::: warning

TypeORM v0.3.x is available and change the way on how to create connection (DataSource). His new API,
doesn't require to install the dedicated Ts.ED module. If you come from v0.2.0, keep the Ts.ED module installed and
change the connection by DataSource and update your repositories' implementation.

See our next section for more details about DataSource and Custom Repository.
:::

### Create new connection

Ts.ED CLI support DataSource creation. Just install the latest Ts.ED CLI version and run the following command:

```sh
tsed generate
```

Then, select TypeORM DataSource options and follow the wizard.

You can also create your DataSource as following in your project:

```typescript
import {registerProvider} from "@tsed/di";
import {DataSource} from "typeorm";
import {Logger} from "@tsed/logger";
import {User} from "../entities/User";

export const MysqlDataSource = new DataSource({
  // name: "default",  if you come from v0.2.x
  type: "mysql",
  entities: [User], // add this to discover typeorm model
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test"
});

export const MYSQL_DATA_SOURCE = injectable<DataSource>(Symbol.for("MySqlDataSource"))
  .type("typeorm:datasource")
  .asyncFactory(async () => {
    await MysqlDataSource.initialize();

    logger().info("Connected with typeorm to database: MySQL");

    return MysqlDataSource;
  })
  .hooks({
    $onDestroy(dataSource) {
      return dataSource.isInitialized && dataSource.close();
    }
  })
  .token();
```

Finally, inject the DataSource in your controller or service:

```typescript
import {Injectable, Inject} from "@tsed/di";
import {DataSource} from "typeorm";
import {MYSQL_DATA_SOURCE} from "../datasources/MysqlDataSource";

@Injectable()
export class MyService {
  @Inject(MYSQL_DATA_SOURCE)
  protected mysqlDataSource: DataSource;

  $onInit() {
    if (this.mysqlDataSource.isInitialized) {
      console.log("INIT");
    }
  }
}
```

### Retrieve all DataSources from a Service

All data sources connection can be retrieved as following:

```typescript
import {Inject, Injectable, InjectorService} from "@tsed/di";

@Injectable()
export class DataSourcesService {
  @Inject()
  protected injector: InjectorService;

  getDataSources() {
    return this.injector.getAll("typeorm:datasource");
  }
}
```

### Use Entity TypeORM with Controller

We need to define an Entity TypeORM like this and use Ts.ED Decorator to define the JSON Schema.

```ts
import {Maximum, MaxLength, Minimum, Property, Required} from "@tsed/schema";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Property()
  id: number;

  @Column()
  @MaxLength(100)
  @Required()
  firstName: string;

  @Column()
  @MaxLength(100)
  @Required()
  lastName: string;

  @Column()
  @Minimum(0)
  @Maximum(100)
  age: number;
}

```

Now, the model is correctly defined and can be used with a [Controller](/docs/controllers.md)
, [AJV validation](/tutorials/ajv.md),
[Swagger](/tutorials/swagger.md) and [TypeORM](https://github.com/typeorm/typeorm).

We can use this model with a Controller like that:

```typescript
import {BodyParams} from "@tsed/platform-params";
import {Get, Post} from "@tsed/schema";
import {Controller, Inject} from "@tsed/di";
import {MYSQL_DATA_SOURCE} from "../datasources/MySqlDataSource";
import {User} from "../entities/User";

@Controller("/users")
export class UsersCtrl {
  @Inject(MYSQL_DATA_SOURCE)
  protected mysqlDataSource: DataSource;

  @Post("/")
  create(@BodyParams() user: User): Promise<User> {
    return this.mysqlDataSource.manager.create(User, user);
  }

  @Get("/")
  getList(): Promise<User[]> {
    return this.mysqlDataSource.manager.find(User);
  }
}
```

### Create an injectable repository

`Repository` is just like `EntityManager` but its operations are limited to a concrete entity.
You can access the repository via `DataSource`.

```typescript
import {Injectable} from "@tsed/di";
import {DataSource} from "typeorm";
import {MySqlDataSource} from "../datasources/MySqlDataSource";
import {User} from "../entities/User";

export const UserRepository = MySqlDataSource.getRepository(User);

const USER_REPOSITORY = injectable<DataSource>(Symbol.for("UserRepository")).value(UserRepository).token();

export type USER_REPOSITORY = typeof UserRepository;
```

Then inject the `UserRepository` in your controller:

```typescript
import {BodyParams} from "@tsed/platform-params";
import {Get, Post} from "@tsed/schema";
import {Controller, Inject} from "@tsed/di";
import {USER_REPOSITORY} from "../repositories/UserRepository";
import {User} from "../entities/User";

@Controller("/users")
export class UsersCtrl {
  @Inject(USER_REPOSITORY)
  protected repository: USER_REPOSITORY;

  @Post("/")
  create(@BodyParams() user: User): Promise<User> {
    return this.repository.save(user);
  }

  @Get("/")
  getList(): Promise<User[]> {
    return this.repository.find();
  }
}
```

In order to extend `UserRepository` functionality you can use `.extend` method of `Repository` class:

```typescript
import {Injectable} from "@tsed/di";
import {DataSource} from "typeorm";
import {MySqlDataSource} from "../datasources/MySqlDataSource";
import {User} from "../entities/User";

export const UserRepository = MySqlDataSource.getRepository(User).extend({
  findByName(firstName: string, lastName: string) {
    return this.createQueryBuilder("user")
      .where("user.firstName = :firstName", {firstName})
      .andWhere("user.lastName = :lastName", {lastName})
      .getMany();
  }
});

export const USER_REPOSITORY = injectable(USER_REPOSITORY).value(UserRepository).token();
export type USER_REPOSITORY = typeof UserRepository;
```

Then inject the `UserRepository` in your controller:

```typescript
import {BodyParams} from "@tsed/platform-params";
import {Get, Post} from "@tsed/schema";
import {Controller, Inject} from "@tsed/di";
import {User} from "../../entities/User";
import {USER_REPOSITORY} from "../../repositories/UserRepository";

@Controller("/users")
export class UsersController {
  @Inject(USER_REPOSITORY)
  protected repository: USER_REPOSITORY;

  @Get("/")
  getByName(): Promise<User[]> {
    return this.repository.findByName("john");
  }
}
```

## TypeORM v0.2.x (deprecated)

### Features

Currently, `@tsed/typeorm` allows you to:

* Configure one or more TypeORM connections via the `@Configuration` configuration. All databases will be initialized
  when the server starts during the server's `OnInit` phase.
* Use the Entity TypeORM as Model for Controllers, AJV Validation and Swagger.
* Declare a connection with asyncProvider or automatically by server configuration.

### Installation

To begin, install the TypeORM module for TS.ED:

```bash
npm install --save @tsed/typeorm
npm install --save typeorm
```

Then import `@tsed/typeorm` in your Server:

```ts
import "@tsed/platform-express";
import "@tsed/typeorm"; // !!! IMPORTANT TO ADD THIS !!!

import {Configuration} from "@tsed/di";

@Configuration({
  typeorm: [
    {
      name: "default",
      type: "postgres",
      // ...,

      entities: [`./entity/*{.ts,.js}`],
      migrations: [`./migrations/*{.ts,.js}`],
      subscribers: [`./subscriber/*{.ts,.js}`]
    },
    {
      name: "mongo",
      type: "mongodb"
      // ...
    }
  ]
})
export class Server {}

```

::: warning

Don't forget to import the TypeORM module in the Server. Ts.ED need it to load correctly the TypeORM DI,
entities and repositories!
:::

### TypeORMService

TypeORMService lets you retrieve an instance of TypeORM Connection.

```ts
import {Injectable} from "@tsed/di";
import {AfterRoutesInit} from "@tsed/platform-http";
import {TypeORMService} from "@tsed/typeorm";
import {Connection} from "typeorm";

import {User} from "../models/User";

@Injectable()
export class UsersService implements AfterRoutesInit {
  private connection: Connection;

  constructor(private typeORMService: TypeORMService) {}

  $afterRoutesInit() {
    this.connection = this.typeORMService.get("mongoose")!; // get connection by name
  }

  async create(user: User): Promise<User> {
    // do something
    // ...
    // Then save
    await this.connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    return user;
  }

  async find(): Promise<User[]> {
    const users = await this.connection.manager.find(User);
    console.log("Loaded users: ", users);

    return users;
  }
}

```

For more information about TypeORM, look its documentation [here](https://github.com/typeorm/typeorm);

### Declare your connection as provider

It is also possible to create your connection with the `useAsyncFactory` feature (
See [custom providers](/docs/custom-providers.md))
This approach allows you to inject your connection as a Service to another one.

To create a new connection, declare your custom provider as follows:

```ts
import {constant, injectable} from "@tsed/di";
import {createConnection} from "@tsed/typeorm";
import {Connection, ConnectionOptions} from "typeorm";

const CONNECTION_NAME = "default"; // change the name according to your server configuration

export type CONNECTION = Connection; // Set alias types (optional)

export const CONNECTION = injectable(Symbol.for("CONNECTION"))
  .asyncFactory(async () => {
    const settings = constant<ConnectionOptions[]>("typeorm")!;
    const connectionOptions = settings.find((o) => o.name === CONNECTION_NAME);

    return createConnection(connectionOptions!);
  })
  .token();

```

Then inject your connection to another service or provide like this:

```ts
import {Inject, Injectable} from "@tsed/di";

import {CONNECTION} from "./typeorm-async-provider";

@Injectable()
export class UserService {
  constructor(@Inject(CONNECTION) connection: CONNECTION) {}
}

```

### Use Entity TypeORM with Controller

We need to define an Entity TypeORM like this and use Ts.ED Decorator to define the JSON Schema.

```ts
import {Maximum, MaxLength, Minimum, Property, Required} from "@tsed/schema";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Property()
  id: number;

  @Column()
  @MaxLength(100)
  @Required()
  firstName: string;

  @Column()
  @MaxLength(100)
  @Required()
  lastName: string;

  @Column()
  @Minimum(0)
  @Maximum(100)
  age: number;
}

```

Now, the model is correctly defined and can be used with a [Controller](/docs/controllers.md)
, [AJV validation](/tutorials/ajv.md),
[Swagger](/tutorials/swagger.md) and [TypeORM](https://github.com/typeorm/typeorm).

We can use this model with a Controller like that:

```ts
import {Controller} from "@tsed/di";
import {BodyParams} from "@tsed/platform-params";
import {Get, Post} from "@tsed/schema";

import {User} from "../entities/User";
import {UsersService} from "../services/UsersService";

@Controller("/users")
export class UsersCtrl {
  constructor(private usersService: UsersService) {}

  @Post("/")
  create(@BodyParams() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Get("/")
  getList(): Promise<User[]> {
    return this.usersService.find();
  }
}

```

### EntityRepository

You can create a custom repository which should contain methods to work with your database. Usually custom repositories
are created for a single entity and contain their specific queries. For example, let's say we want to have a method
called `findByName(firstName: string, lastName: string)` which will search for users by a given first and last names.
The best place for this method is in Repository, so we could call it like `userRepository.findByName(...)`. You can
achieve this using custom repositories.

`@tsed/typeorm` plugin configures the DI so that repositories declared for TypeORM can be injected into a Ts.ED
controller or service.

The first way to create a custom repository is to extend Repository. Example:

```ts
import {EntityRepository, Repository} from "typeorm";

import {User} from "../entity/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByName(firstName: string, lastName: string) {
    return this.findOne({firstName, lastName});
  }
}

```

Then inject your repository to another service:

```ts
import {Inject, Injectable} from "@tsed/di";
import {UseConnection} from "@tsed/typeorm";

import {UserRepository} from "./repository/UserRepository";

@Injectable()
export class OtherService {
  @Inject()
  @UseConnection("db2")
  userRepository2: UserRepository;

  constructor(
    public userRepository: UserRepository,
    @UseConnection("db3") public userRepository3: UserRepository
  ) {}
}

```

::: tip Use `UseConnection` decorator to select which database connection the injected repository should be used (
require Ts.ED v5.58.0+).
:::

## Author

## Maintainers&#x20;
