---
url: /tutorials/mongoose.md
description: Use Mongoose with Express, TypeScript and Ts.ED.
---

# Mongoose

This tutorial shows you how you can use mongoose package with Ts.ED.

## Features

Currently, [`@tsed/mongoose`](https://www.npmjs.com/package/@tsed/mongoose) allows you to:

* Configure one or more MongoDB database connections via the `@Configuration` configuration.
  All databases will be initialized when the server starts during the server's `OnInit` phase.
* Declare a Model from a class with annotation,
* Declare inherited models in a single collection via `@DiscriminatorKey`
* Add a plugin, PreHook method and PostHook on your model
* Inject a Model to a Service, Controller, Middleware, etc.
* Create and manage multiple connections

::: tip Note
`@tsed/mongoose` uses the JsonSchema and its decorators to generate the mongoose schema.
:::

## Installation

Before using the `@tsed/mongoose` package, we need to install the [mongoose](https://www.npmjs.com/package/mongoose)
module.
::: code-group

```bash [npm]
npm install --save mongoose
npm install --save @tsed/mongoose
npm install --save-dev @tsed/testcontainers-mongo
```

```bash [yarn]
yarn add mongoose
yarn add @tsed/mongoose
yarn add --dev @tsed/testcontainers-mongo
```

```sh [yarn]
yarn add mongoose @tsed/mongoose
yarn add -D @tsed/testcontainers-mongo
```

```sh [bun]
bun add mongoose @tsed/mongoose
bun add -D @tsed/testcontainers-mongo
```

:::

Then import `@tsed/mongoose` in your [Configuration](/docs/configuration/index.md):

## Configuration

```ts
import "@tsed/mongoose"; // import mongoose ts.ed module
import "@tsed/platform-express";

import {Configuration} from "@tsed/di";

@Configuration({
  mongoose: [
    {
      id: "default", // Recommended: define default connection. All models without dbName will be assigned to this connection
      url: "mongodb://127.0.0.1:27017/default",
      connectionOptions: {}
    },
    {
      id: "db2",
      url: "mongodb://127.0.0.1:27017/db2",
      connectionOptions: {}
    }
  ]
})
export class Server {}

```

## MongooseService

@@MongooseService@@ lets you retrieve an instance of Mongoose.Connection.

```typescript
import {Service} from "@tsed/di";
import {MongooseService} from "@tsed/mongoose";

@Service()
export class MyService {
  constructor(mongooseService: MongooseService) {
    const default = mongooseService.get(); // OR mongooseService.get("default");
    // GET Other connection
    const db2 = mongooseService.get('db2');
  }
}
```

## Decorators

Ts.ED gives some decorators and services to write your code:

You can also use the common decorators to describe model (See [models](/docs/model.html) documentation):

## Declaring a Mongoose object (schema or model)

### Declaring a Model

`@tsed/mongoose` works with models which must be explicitly declared.

```ts
import {Model, ObjectID} from "@tsed/mongoose";
import {Property} from "@tsed/schema";

@Model()
export class MyModel {
  @ObjectID("id")
  _id: string;

  @Property()
  unique: string;
}

```

### Declaring a Model to a specific connection

```ts
import {Model, ObjectID} from "@tsed/mongoose";
import {Property} from "@tsed/schema";

@Model({
  connection: "db2"
})
export class MyModel {
  @ObjectID("id")
  _id: string;

  @Property()
  unique: string;
}

```

### Declaring a Schema

`@tsed/mongoose` supports subdocuments which must be explicitly declared.

```ts
import {Schema} from "@tsed/mongoose";
import {Property} from "@tsed/schema";

@Schema()
export class MyModel {
  @Property()
  unique: string;
}

```

::: tip
Schema decorator accepts a second parameter to configure the Schema (
See [Mongoose Schema](https://mongoosejs.com/docs/guide.html#options))
:::

### Declaring Properties

By default, `@tsed/mongoose` reuses the metadata stored by the decorators dedicated
to describe a JsonSchema. These decorators come from the `@tsed/schema` package.

```ts
import {Indexed, Model, ObjectID, Unique} from "@tsed/mongoose";
import {Default, Enum, Format, Ignore, Maximum, MaxLength, Minimum, MinLength, Pattern, Required} from "@tsed/schema";

enum Categories {
  CAT1 = "cat1",
  CAT2 = "cat2"
}

@Model()
export class MyModel {
  @Ignore() // exclude _id from mongoose in the generated schema
  _id: string;

  @ObjectID("id") // Or rename _id by id (for response sent to the client)
  _id: string;

  @Unique()
  @Required()
  unique: string;

  @Indexed()
  @MinLength(3)
  @MaxLength(50)
  indexed: string;

  @Minimum(0)
  @Maximum(100)
  @Default(0)
  rate: Number = 0;

  @Enum(Categories)
  // or @Enum("type1", "type2")
  category: Categories;

  @Pattern(/[a-z]/) // equivalent of match field in mongoose
  pattern: String;

  @Format("date-time")
  @Default(Date.now)
  dateCreation: Date = new Date();
}

```

::: tip
It isn't necessary to use @@Property@@ decorator on property when you use one of these decorators:

These decorators call automatically the @@Property@@ decorator.
:::

### Collections

Mongoose and `@tsed/mongoose` support both lists and maps.

```ts
import {Model} from "@tsed/mongoose";
import {CollectionOf} from "@tsed/schema";

@Model()
export class MyModel {
  @CollectionOf(String)
  list: string[];

  @CollectionOf(String)
  map: Map<string, string>; // key must be a string.
}

```

### Subdocuments

`@tsed/mongoose` supports `mongoose` subdocuments as long as they are defined as schemas. Therefore, subdocuments must
be decorated by `@Schema()`.

```ts
import {Model, ObjectID, Schema} from "@tsed/mongoose";
import {CollectionOf, Property} from "@tsed/schema";

@Schema()
export class MySchema {
  @ObjectID("id")
  _id: string;

  @Property()
  name: string;
}

@Model()
export class MyModel {
  @ObjectID("id")
  _id: string;

  @Property()
  schema: MySchema;

  @CollectionOf(MySchema)
  schemes: MySchema[];
}

```

### References

`@tsed/mongoose` supports `mongoose` references between defined models.

```ts
import {Model, ObjectID, Ref} from "@tsed/mongoose";

@Model()
export class MyRef {
  @ObjectID("id")
  _id: string;
}

@Model()
export class MyModel {
  @Ref(MyRef)
  ref: Ref<MyRef>;

  @Ref(MyRef)
  refs: Ref<MyRef>[];

  @Ref(MyRef)
  refs: Map<string, MyRef>;
}

```

### Circular References

`@tsed/mongoose` supports `mongoose` circular references between defined models.
When you have models that either both refer to each other, or refer to themselves there is a slightly different way to
declare this inside those models.

In this example, a **Customer** has many **Contracts** and each **Contract** has a reference back to the **Customer**.
This is declared using an arrow function.

```
() => ModelName
```

```ts
import {Model, ObjectID} from "@tsed/mongoose";
import {CollectionOf, Required} from "@tsed/schema";

@Model()
export class Customer {
  @ObjectID("id")
  _id: string;

  @Property()
  name: string;

  @Ref(() => Contract)
  @CollectionOf(() => Contract)
  contracts?: Ref<Contract>[];
}

@Model()
export class Contract {
  @ObjectID("id")
  _id: string;

  @Ref(() => Customer)
  customer: Ref<Customer>;

  @Required()
  contractName: string;
}

```

### Virtual References

`@tsed/mongoose` supports `mongoose` virtual references between defined models.

The same rules for Circular References apply (**See above**);

```ts
import {Model, Ref, VirtualRef, VirtualRefs} from "@tsed/mongoose";
import {Property} from "@tsed/schema";

@Model()
class Person {
  @Property()
  name: string;

  @Property()
  band: string;
}

@Model()
class Band {
  @VirtualRef({
    ref: Person, // The model to use
    localField: "name", // Find people where `localField`
    foreignField: "band", // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false,
    options: {} // Query options, see http://bit.ly/mongoose-query-options
  })
  members: VirtualRefs<Person>;

  @VirtualRef({
    ref: Person, // The model to use
    localField: "name", // Find people where `localField`
    foreignField: "band", // is equal to `foreignField`
    // If `count` is true, 'memberCount' will be the number of documents
    // instead of an array.
    count: true
  })
  memberCount: number;
}

@Model()
export class MyRef {
  @VirtualRef({ref: "MyModel", justOne: true})
  virtual: VirtualRef<MyModel>;

  @VirtualRef("MyModel")
  virtuals: VirtualRefs<MyModel>;
}

@Model()
export class MyModel {
  @Ref(MyRef)
  ref: Ref<MyRef>;
}

```

### Dynamic References

`@tsed/mongoose` supports `mongoose` dynamic references between defined models.

This works by having a field with the referenced object model's name and a field with the referenced field.

::: code-group

```ts \[Example]
import {DynamicRef, Model, ObjectID} from "@tsed/mongoose";
import {Enum, Required} from "@tsed/schema";

@Model()
class ClickedLinkEventModel {
  @ObjectID("id")
  _id: string;

  @Required()
  url: string;
}

@Model()
class SignedUpEventModel {
  @ObjectID("id")
  _id: string;

  @Required()
  user: string;
}

@Model()
class EventModel {
  @ObjectID("id")
  _id: string;

  @DynamicRef("eventType", ClickedLinkEventModel, SignedUpEventModel)
  event: DynamicRef<ClickedLinkEventModel | SignedUpEventModel>;

  @Enum("ClickedLinkEventModel", "SignedUpEventModel")
  eventType: "ClickedLinkEventModel" | "SignedUpEventModel";
}

```

```json \[JsonSchema]
{
  "definitions": {
    "ClickedLinkEventModel": {
      "properties": {
        "id": {
          "description": "Mongoose ObjectId",
          "examples": ["5ce7ad3028890bd71749d477"],
          "pattern": "^[0-9a-fA-F]{24}$",
          "type": "string"
        },
        "url": {
          "minLength": 1,
          "type": "string"
        }
      },
      "required": ["url"],
      "type": "object"
    },
    "SignedUpEventModel": {
      "properties": {
        "id": {
          "description": "Mongoose ObjectId",
          "examples": ["5ce7ad3028890bd71749d477"],
          "pattern": "^[0-9a-fA-F]{24}$",
          "type": "string"
        },
        "user": {
          "minLength": 1,
          "type": "string"
        }
      },
      "required": ["user"],
      "type": "object"
    }
  },
  "properties": {
    "event": {
      "description": "Mongoose Ref ObjectId",
      "examples": ["5ce7ad3028890bd71749d477"],
      "oneOf": [
        {
          "description": "Mongoose Ref ObjectId",
          "examples": ["5ce7ad3028890bd71749d477"],
          "type": "string"
        },
        {
          "$ref": "#/definitions/ClickedLinkEventModel"
        },
        {
          "$ref": "#/definitions/SignedUpEventModel"
        }
      ]
    },
    "eventType": {
      "enum": ["ClickedLinkEventModel", "SignedUpEventModel"],
      "type": "string"
    },
    "id": {
      "description": "Mongoose ObjectId",
      "examples": ["5ce7ad3028890bd71749d477"],
      "pattern": "^[0-9a-fA-F]{24}$",
      "type": "string"
    }
  },
  "type": "object"
}

```

### Decimal Numbers

`@tsed/mongoose` supports `mongoose` 128-bit decimal floating points data
type [Decimal128](https://mongoosejs.com/docs/api.html#mongoose_Mongoose-Decimal128).

The @@NumberDecimal@@ decorator is used to set Decimal128 type for number fields.

```ts
import {Decimal128, Model, NumberDecimal} from "@tsed/mongoose";
import {Property} from "@tsed/schema";

@Model()
export class ProductModel {
  @ObjectID("id")
  _id: string;

  @Property()
  sku: string;

  @NumberDecimal()
  price: Decimal128;
}

```

Optionally a custom decimal type implementation, such as [big.js](https://www.npmjs.com/package/big.js), can be used by
passing a constructor to the field decorator.

```ts
import {Model, NumberDecimal} from "@tsed/mongoose";
import Big from "big.js";

@Model()
export class PriceModel {
  @NumberDecimal(Big)
  price: Big;
}

```

## Register hook

Mongoose allows the developer to add pre and post [hooks / middlewares](http://mongoosejs.com/docs/middleware.html) to
the schema.
With this, it is possible to add document transformations and observations before or after validation, save, and more.

Ts.ED provides class decorators to register middlewares on the pre- and post-hook.

### Pre hook

We can simply attach a @@PreHook@@ decorator to the model class and
define the hook function like we would normally do in Mongoose.

```ts
import {Model, ObjectID, PreHook} from "@tsed/mongoose";
import {Required} from "@tsed/schema";

@Model()
@PreHook("save", (car: CarModel, next: any) => {
  if (car.model === "Tesla") {
    car.isFast = true;
  }
  next();
})
export class CarModel {
  @ObjectID("id")
  _id: string;

  @Required()
  model: string;

  @Required()
  isFast: boolean;

  // or Prehook on static method
  @PreHook("save")
  static preSave(car: CarModel, next: any) {
    if (car.model === "Tesla") {
      car.isFast = true;
    }
    next();
  }
}

```

This will execute the pre-save hook each time a `CarModel` document is saved.

### Post hook

We can simply attach a @@PostHook@@ decorator to the model class and
define the hook function like we would normally do in Mongoose.

```ts
import {Model, ObjectID, PostHook} from "@tsed/mongoose";
import {Required} from "@tsed/schema";

@Model()
@PostHook("save", (car: CarModel) => {
  if (car.topSpeedInKmH > 300) {
    console.log(car.model, "is fast!");
  }
})
export class CarModel {
  @ObjectID("id")
  _id: string;

  @Required()
  model: string;

  @Required()
  isFast: boolean;

  // or Prehook on static method
  @PostHook("save")
  static postSave(car: CarModel) {
    if (car.topSpeedInKmH > 300) {
      console.log(car.model, "is fast!");
    }
  }
}

```

This will execute the post-save hook each time a `CarModel` document is saved.

## Plugin

Using the `Plugin` decorator enables the developer to attach various Mongoose plugins to the schema.
Just like the regular `schema.plugin()` call, the decorator accepts 1 or 2 parameters: the plugin itself, and an
optional configuration object.
Multiple `plugin` decorator can be used for a single model class.

```ts
// eslint
import {Inject, Injectable} from "@tsed/di";
import {Model, MongooseModel, MongoosePlugin} from "@tsed/mongoose";
import * as findOrCreate from "mongoose-findorcreate";

import {User} from "./User";

@Model()
@MongoosePlugin(findOrCreate)
class UserModel {
  // this isn't the complete method signature, just an example
  static findOrCreate(condition: InstanceType<User>): Promise<{doc: InstanceType<User>; created: boolean}>;
}

@Injectable()
class UserService {
  constructor(@Inject(UserModel) userModel: MongooseModel<UserModel>) {
    UserModel.findOrCreate({
      // ...
    }).then((findOrCreateResult) => {
      // ...
    });
  }
}

```

## Discriminators

Set the `@DiscriminatorKey` decorator on a property in the parent class to define the name of the field for the
discriminator value.

Extend the child model classes from the parent class. By default, the value for the discriminator field is the class
name, but it can be overwritten via the `discriminatorValue` option on the model.

```ts
import {Model, ObjectID} from "@tsed/mongoose";
import {DiscriminatorKey, DiscriminatorValue, Required} from "@tsed/schema";

@Model()
class EventModel {
  @ObjectID()
  _id: string;

  @Required()
  time: Date = new Date();

  @DiscriminatorKey()
  type: string;
}

@Model()
class ClickedLinkEventModel extends EventModel {
  @Required()
  url: string;
}

@Model()
@DiscriminatorValue("sign_up_event")
class SignedUpEventModel extends EventModel {
  @Required()
  user: string;
}

```

::: tip
For further information, please refer to
the [mongoose documentation about discriminators](https://mongoosejs.com/docs/discriminators.html).
:::

## Document Versioning

Set the `@VersionKey` decorator on a `number` property to define the name of the field used for versioning and
optimistic concurrency.

```ts
import {Model, ObjectID, VersionKey} from "@tsed/mongoose";
import {Required} from "@tsed/schema";

@Model()
class PostModel {
  @ObjectID()
  _id: string;

  @VersionKey()
  version: number;

  @Required()
  title: string;
}

```

::: tip
For further information, please refer to
the [mongoose documentation about the versionKey option](https://mongoosejs.com/docs/guide.html#versionKey).
:::

## Inject model

It's possible to inject a model into a Service (or Controller, Middleware, etc...):

```ts
import {Inject, Injectable} from "@tsed/di";
import {MongooseModel} from "@tsed/mongoose";

import {MyModel} from "./models/MyModel";

@Injectable()
export class MyRepository {
  @Inject(MyModel) private model: MongooseModel<MyModel>;

  async save(obj: MyModel): Promise<MongooseModel<MyModel>> {
    const doc = new this.model(obj);
    await doc.save();

    return doc;
  }

  async find(query: any) {
    const list = await this.model.find(query).exec();

    console.log(list);

    return list;
  }
}

```

::: tip
You can find a working example on [Mongoose here](https://github.com/tsedio/tsed-example-mongoose).
:::

### Caveat&#x20;

Mongoose doesn't return a real instance of your class. If you inspected the returned item by one of mongoose's methods,
you'll see that the instance is as Model type instead of the expected class:

```typescript
import {Inject, Injectable} from "@tsed/di";
import {MongooseModel} from "@tsed/mongoose";
import {Product} from "./models/Product";

@Injectable()
export class MyRepository {
  @Inject(Product)
  private model: MongooseModel<Product>;

  async find(query: any) {
    const list = await this.model.find(query).exec();

    console.log(list[0]); // Model { Product }

    return list;
  }
}
```

There is no proper solution currently to have the expected instance without transforming the current instance to
the class with the @@deserialize@@ function.

To simplify this, Ts.ED adds a `toClass` method to the MongooseModel to find, if necessary, an instance of type Product.

```typescript
import {Inject, Injectable} from "@tsed/di";
import {MongooseModel} from "@tsed/mongoose";
import {Product} from "./models/Product";

@Injectable()
export class MyRepository {
  @Inject(Product)
  private model: MongooseModel<Product>;

  async find(query: any) {
    const list = await this.model.find(query).exec();

    console.log(list[0]); // Model { Product }
    console.log(list[0].toClass()); // Product {}

    return list;
  }
}
```

## Testing

The [`@tsed/testcontainers-mongo`](https://www.npmjs.com/package/@tsed/testcontainers-mongo) package allows you to test
your code using the [TestContainers](https://node.testcontainers.org/) library.

### Configuration

To use the `@tsed/testcontainers-mongo` package, you need to install the package:

::: code-group

```sh [npm]
npm install --save-dev @tsed/testcontainers-mongo
```

```sh [yarn]
yarn add --dev @tsed/testcontainers-mongo
```

```sh [pnpm]
pnpm add --dev @tsed/testcontainers-mongo
```

```sh [bun]
bun add --dev @tsed/testcontainers-mongo
```

:::

Then add or update your jest or vitest configuration file to add a global setup file:

::: code-group

```ts [Jest]
// jest.config.js
module.exports = {
  globalSetup: ["jest.setup.js"],
  globalTeardown: ["jest.teardown.js"]
};

// jest.setup.js
const {TestContainersMongo} = require("@tsed/testcontainers-mongo");
module.exports = async () => {
  await TestContainersMongo.startMongoServer();
};

// jest.teardown.js
const {TestContainersMongo} = require("@tsed/testcontainers-mongo");
module.exports = async () => {
  await TestContainersMongo.stopMongoServer();
};
```

```ts [Vitest]
import {defineConfig} from "vitest/config";

export default defineConfig({
  test: {
    globalSetup: [import.meta.resolve("@tsed/testcontainers-mongo/vitest/setup")]
  }
});
```

### Testing Model

This example shows you how can test the model:

::: code-group

```ts \[Jest]
import {Model, MongooseModel, ObjectID, PostHook, PreHook, Unique} from "@tsed/mongoose";
import {PlatformTest} from "@tsed/platform-http/testing";
import {Property, Required} from "@tsed/schema";
import {TestContainersMongo} from "@tsed/testcontainers-mongo";

@Model({schemaOptions: {timestamps: true}})
@PreHook("save", (user: UserModel, next: any) => {
  user.pre = "hello pre";

  next();
})
@PostHook("save", (user: UserModel, next: any) => {
  user.post = "hello post";

  next();
})
export class UserModel {
  @ObjectID("id")
  _id: string;

  @Property()
  @Required()
  @Unique()
  email: string;

  @Property()
  pre: string;

  @Property()
  post: string;
}

describe("UserModel", () => {
  beforeEach(() => TestContainersMongo.create());
  afterEach(() => TestContainersMongo.reset("users")); // clean users collection after each test

  it("should run pre and post hook", async () => {
    const userModel = PlatformTest.get<MongooseModel<UserModel>>(UserModel);

    // GIVEN
    const user = new userModel({
      email: "test@test.fr"
    });

    // WHEN
    await user.save();

    // THEN
    expect(user.pre).toEqual("hello pre");
    expect(user.post).toEqual("hello post");
  });
});

```

```ts \[Vitest]
import {Model, MongooseModel, ObjectID, PostHook, PreHook, Unique} from "@tsed/mongoose";
import {PlatformTest} from "@tsed/platform-http/testing";
import {Property, Required} from "@tsed/schema";
import {TestContainersMongo} from "@tsed/testcontainers-mongo";

@Model({schemaOptions: {timestamps: true}})
@PreHook("save", (user: UserModel, next: any) => {
  user.pre = "hello pre";

  next();
})
@PostHook("save", (user: UserModel, next: any) => {
  user.post = "hello post";

  next();
})
export class UserModel {
  @ObjectID("id")
  _id: string;

  @Property()
  @Required()
  @Unique()
  email: string;

  @Property()
  pre: string;

  @Property()
  post: string;
}

describe("UserModel", () => {
  beforeEach(() => TestContainersMongo.create());
  afterEach(() => TestContainersMongo.reset("users")); // clean users collection after each test

  it("should run pre and post hook", async () => {
    const userModel = PlatformTest.get<MongooseModel<UserModel>>(UserModel);

    // GIVEN
    const user = new userModel({
      email: "test@test.fr"
    });

    // WHEN
    await user.save();

    // THEN
    expect(user.pre).toEqual("hello pre");
    expect(user.post).toEqual("hello post");
  });
});

```

:::

### Testing API

This example shows you how you can test your Rest API with superagent and a mocked Mongo database:

::: code-group

```ts \[Jest]
import {PlatformTest} from "@tsed/platform-http/testing";
import {TestContainersMongo} from "@tsed/testcontainers-mongo";
import * as SuperTest from "supertest";

import {Server} from "../Server";

describe("Rest", () => {
  beforeAll(TestContainersMongo.bootstrap(Server)); // Create a server with mocked database
  afterAll(() => TestContainersMongo.reset()); // reset database and injector

  describe("GET /rest/calendars", () => {
    it("should do something", async () => {
      const request = SuperTest(PlatformTest.callback());
      const response = await request.get("/rest/calendars").expect(200);

      expect(typeof response.body).toEqual("array");
    });
  });
});

```

```ts \[Vitest]
import {PlatformTest} from "@tsed/platform-http/testing";
import {TestContainersMongo} from "@tsed/testcontainers-mongo";
import * as SuperTest from "supertest";

import {Server} from "../Server";

describe("Rest", () => {
  beforeAll(TestContainersMongo.bootstrap(Server)); // Create a server with mocked database
  afterAll(() => TestContainersMongo.reset()); // reset database and injector

  describe("GET /rest/calendars", () => {
    it("should do something", async () => {
      const request = SuperTest(PlatformTest.callback());
      const response = await request.get("/rest/calendars").expect(200);

      expect(typeof response.body).toEqual("array");
    });
  });
});

```

:::

## Author

## Maintainers
