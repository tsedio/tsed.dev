---
url: /tutorials/passport.md
description: Use Passport.js with Express, TypeScript and Ts.ED.
---

# Passport.js

> Passport is an authentication middleware for Node.js.

Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.
A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

## Installation

Before using Passport, we need to install the [Passport.js](https://www.npmjs.com/package/passport) and the Passport-local.

::: code-group

```sh [npm]
npm install --save passport
```

```sh [yarn]
yarn add passport
```

```sh [pnpm]
pnpm add passport
```

```sh [bun]
bun add passport
```

:::

## Configure your server

Add this configuration to your server:

```ts
import "@tsed/passport";
import "@tsed/platform-express";
// import your protocol. Ts.ED will discover it automatically
import "./protocols/LoginLocalProtocol.js";

import {Configuration, Inject} from "@tsed/di";
import {PlatformApplication} from "@tsed/platform-http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import methodOverride from "method-override";

@Configuration({
  passport: {
    /**
     * Set a custom user info model. By default Ts.ED use UserInfo. Set false to disable Ts.ED json-mapper.
     */
    // userInfoModel: CustomUserInfoModel
    // userProperty: string,
    // pauseStream: string,
    // disableSession: boolean
  }
})
export class Server {
  @Inject()
  app: PlatformApplication;

  $beforeRoutesInit() {
    this.app
      .use(cookieParser())
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true
        })
      )
      // @ts-ignore
      .use(
        session({
          secret: "mysecretkey",
          resave: true,
          saveUninitialized: true,
          // maxAge: 36000,
          cookie: {
            path: "/",
            httpOnly: true,
            secure: false
          }
        })
      );
  }
}

```

### UserInfo

By default, Ts.ED uses a UserInfo model to serialize and deserialize users in sessions:

```typescript
import {Format, Property} from "@tsed/schema";

export class UserInfo {
  @Property()
  id: string;

  @Property()
  @Format("email")
  email: string;

  @Property()
  password: string;
}
```

You can set your own UserInfo model by changing the passport server configuration:

```typescript
class CustomUserInfoModel {
  @Property()
  id: string;

  @Property()
  token: string;
}

@Configuration({
  passport: {
    userInfoModel: CustomUserInfoModel
  }
})
```

It's also possible to disable model serialize/deserialize by setting a false value to `userInfoModel` options.

## Create a new Protocol

A Protocol is a special Ts.ED service which is used to declare a Passport Strategy and handle Passport lifecycle.

Here is an example with the PassportLocal:

::: code-group

```ts \[LoginLocalProtocol.ts]
import {Inject} from "@tsed/di";
import {BeforeInstall, OnInstall, OnVerify, Protocol} from "@tsed/passport";
import {Req} from "@tsed/platform-http";
import {BodyParams} from "@tsed/platform-params";
import {IStrategyOptions, Strategy} from "passport-local";

import {Credentials} from "../models/Credentials";
import {UsersService} from "../services/users/UsersService";

@Protocol<IStrategyOptions>({
  name: "login",
  useStrategy: Strategy,
  settings: {
    usernameField: "email",
    passwordField: "password"
  }
})
export class LoginLocalProtocol implements OnVerify, OnInstall, BeforeInstall {
  @Inject()
  private usersService: UsersService;

  // hook added with v6.99.0
  async $beforeInstall(settings: IStrategyOptions): Promise<IStrategyOptions> {
    // load something from backend
    // settings.usernameField = await this.usersService.loadFieldConfiguration()

    return settings;
  }

  $onInstall(strategy: Strategy): void {
    // intercept the strategy instance to adding extra configuration
  }

  async $onVerify(@Req() request: Req, @BodyParams() credentials: Credentials) {
    const {email, password} = credentials;

    const user = await this.usersService.findOne({email});

    if (!user) {
      return false;
      // OR throw new PassportMessage("Wrong credentials")
    }

    if (!user.verifyPassword(password)) {
      return false;
      // OR throw new PassportMessage("Wrong credentials")
    }

    return user;
  }
}

```

```ts \[LoginLocalProtocol.spec.ts]
import {PlatformTest} from "@tsed/platform-http/testing";
import * as Sinon from "sinon";

import {User} from "../models/User";
import {UsersService} from "../services/users/UsersService";
import {LoginLocalProtocol} from "./LoginLocalProtocol";

describe("LoginLocalProtocol", () => {
  beforeEach(() => PlatformTest.create());
  afterEach(() => PlatformTest.reset());

  describe(".$onVerify()", () => {
    it("should return a user", async () => {
      // GIVEN
      const request = {};
      const email = "email@domain.fr";
      const password = "password";
      const user = new User();
      user.email = email;
      user.password = password;

      const usersService = {
        findOne: Sinon.stub().resolves(user)
      };

      const protocol: LoginLocalProtocol = await PlatformTest.invoke(LoginLocalProtocol, [
        {
          token: UsersService,
          use: usersService
        }
      ]);

      // WHEN
      const result = await protocol.$onVerify(request as any, {email, password});

      // THEN
      usersService.findOne.should.be.calledWithExactly({email: "email@domain.fr"});
      result.should.deep.equal(user);
    });
    it("should return a false", async () => {
      // GIVEN
      const request = {};
      const email = "email@domain.fr";
      const password = "password";
      const user = new User();
      user.email = email;
      user.password = `${password}2`;

      const usersService = {
        findOne: Sinon.stub().resolves(user)
      };

      const protocol: LoginLocalProtocol = await PlatformTest.invoke(LoginLocalProtocol, [
        {
          token: UsersService,
          use: usersService
        }
      ]);

      // WHEN
      const result = await protocol.$onVerify(request as any, {email, password});

      // THEN
      usersService.findOne.should.be.calledWithExactly({email: "email@domain.fr"});
      result.should.deep.equal(false);
    });
    it("should return a false when user isn't found", async () => {
      // GIVEN
      const request = {};
      const email = "email@domain.fr";
      const password = "password";

      const usersService = {
        findOne: Sinon.stub().resolves(undefined)
      };

      const protocol: LoginLocalProtocol = await PlatformTest.invoke(LoginLocalProtocol, [
        {
          token: UsersService,
          use: usersService
        }
      ]);

      // WHEN
      const result = await protocol.$onVerify(request as any, {email, password});

      // THEN
      usersService.findOne.should.be.calledWithExactly({email: "email@domain.fr"});
      result.should.deep.equal(false);
    });
  });
});

```

:::

::: tip
For signup and basic flow, you can check out one of our examples:

## Create the Passport controller

Create a new Passport controller as following:

```ts
import {Controller, ProviderScope, Scope} from "@tsed/di";
import {Authenticate} from "@tsed/passport";
import {Req} from "@tsed/platform-http";
import {BodyParams} from "@tsed/platform-params";
import {Post} from "@tsed/schema";

@Controller("/auth")
@Scope(ProviderScope.SINGLETON)
export class AuthCtrl {
  @Post("/login")
  @Authenticate("login")
  login(@Req() req: Req, @BodyParams("email") email: string, @BodyParams("password") password: string) {
    // FACADE
    return req.user;
  }
}

```

This controller will provide all required endpoints that will be used by the different protocols.

## Protect a route

@@Authorize@@ and @@Authenticate@@ decorators can be used as a Guard to protect your routes.

```ts
import {Controller, Inject} from "@tsed/di";
import {Authorize} from "@tsed/passport";
import {QueryParams} from "@tsed/platform-params";
import {Get} from "@tsed/schema";

import {Calendar} from "../models/Calendar";
import {CalendarsService} from "../service/CalendarsService";

@Controller("/calendars")
export class CalendarController {
  @Inject()
  private calendarsService: CalendarsService;

  @Get("/")
  @Authorize()
  async getAll(@QueryParams("id") id: string, @QueryParams("name") name: string, @QueryParams("owner") owner: string): Promise<Calendar[]> {
    return this.calendarsService.findAll({_id: id, name, owner});
  }
}

```

## Basic Auth

It is also possible to use the Basic Auth. To do that, you have to create a Protocol based on `passport-http` strategy.

```ts
import {Arg, OnInstall, OnVerify, Protocol} from "@tsed/passport";
import {Req} from "@tsed/platform-http";
import {Strategy} from "passport";
import {BasicStrategy} from "passport-http";

import {UsersService} from "../services/users/UsersService";
import {checkEmail} from "../utils/checkEmail";

@Protocol({
  name: "basic",
  useStrategy: BasicStrategy,
  settings: {}
})
export class BasicProtocol implements OnVerify, OnInstall {
  constructor(private usersService: UsersService) {}

  async $onVerify(@Req() request: Req, @Arg(0) username: string, @Arg(1) password: string) {
    checkEmail(username);

    const user = await this.usersService.findOne({email: username});

    if (!user) {
      return false;
    }

    if (!user.verifyPassword(password)) {
      return false;
    }

    return user;
  }

  $onInstall(strategy: Strategy): void {
    // intercept the strategy instance to adding extra configuration
  }
}

```

Then, add the protocol name on the @@Authorize@@ decorator:

```ts
import {Controller, Inject} from "@tsed/di";
import {Authorize} from "@tsed/passport";
import {QueryParams} from "@tsed/platform-params";
import {Get} from "@tsed/schema";

import {Calendar} from "../models/Calendar";
import {CalendarsService} from "../service/CalendarsService";

@Controller("/calendars")
export class CalendarController {
  @Inject()
  private calendarsService: CalendarsService;

  @Get("/")
  @Authorize("basic")
  async getAll(@QueryParams("id") id: string, @QueryParams("name") name: string, @QueryParams("owner") owner: string): Promise<Calendar[]> {
    return this.calendarsService.findAll({_id: id, name, owner});
  }
}

```

## Advanced Auth

### JWT

JWT auth scenario, for example, is different. The Strategy will produce a payload which contains data and JWT token. This information
isn't attached to the request and cannot be retrieved using the default Ts.ED decorator.

To solve it, the `@tsed/passport` has two decorators @@Arg@@ and @@Args@@ to get the argument given to the original verify function by the Strategy.

For example, the official `passport-jwt` documentation gives this javascript code to configure the strategy:

```js
const {JwtStrategy, ExtractJwt} = require("passport-jwt");
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
opts.issuer = "accounts.examplesoft.com";
opts.audience = "yoursite.net";

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    authService.findOne({id: jwt_payload.sub}, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);

```

The example code can be written with Ts.ED as following:

```ts
import {Arg, OnVerify, Protocol} from "@tsed/passport";
import {Req} from "@tsed/platform-http";
import {ExtractJwt, Strategy, StrategyOptions} from "passport-jwt";

import {AuthService} from "../services/auth/AuthService";

@Protocol<StrategyOptions>({
  name: "jwt",
  useStrategy: Strategy,
  settings: {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secret",
    issuer: "accounts.examplesoft.com",
    audience: "yoursite.net"
  }
})
export class JwtProtocol implements OnVerify {
  constructor(private authService: AuthService) {}

  async $onVerify(@Req() req: Req, @Arg(0) jwtPayload: any) {
    const user = await this.authService.findOne({id: jwtPayload.sub});

    return user ? user : false;
  }
}

```

### Azure Bearer Auth

Azure bearer uses another scenario which requires to return multiple arguments. The `$onVerify` method accepts an `Array` to return multiple values.

```ts
import {Arg, OnVerify, PassportMiddleware, Protocol} from "@tsed/passport";
import {Context} from "@tsed/platform-params";
import {BearerStrategy, ITokenPayload} from "passport-azure-ad";

import {AuthService} from "../services/auth/AuthService";

@Protocol({
  name: "azure-bearer",
  useStrategy: BearerStrategy
})
export class AzureBearerProtocol implements OnVerify {
  constructor(private authService: AuthService) {}

  $onVerify(@Arg(0) token: ITokenPayload, @Context() ctx: Context) {
    // Verify is the right place to check given token and return UserInfo
    const {authService} = this;
    const {options = {}} = ctx.endpoint.get(PassportMiddleware) || {}; // retrieve options configured for the endpoint
    // check precondition and authenticate user by their token and given options
    try {
      const user = authService.verify(token, options);

      if (!user) {
        authService.add(token);
        ctx.logger.info({event: "BearerStrategy - token: ", token});

        return token;
      }

      ctx.logger.info({event: "BearerStrategy - user: ", token});

      return [user, token];
    } catch (error) {
      ctx.logger.error({event: "BearerStrategy", token, error});
      throw error;
    }
  }
}

```

### Discord Auth

Discord passport gives an example to refresh the token. To do that, you have to create a new Strategy and register with the refresh function from `passport-oauth2-refresh` module.

Here is the JavaScript code:

```js
const {Strategy} = require("passport-discord");

passport.use(
  new Strategy(
    {
      clientID: "id",
      clientSecret: "secret",
      callbackURL: "callbackURL"
    },
    (accessToken, refreshToken, profile, cb) => {
      authService.findOrCreate({discordId: profile.id}, cb);
    }
  )
);

```

Ts.ED provides a way to handle the strategy built by the `@tsed/passport` by using the `$onInstall` hook.

```ts
import {Args, OnInstall, OnVerify, Protocol} from "@tsed/passport";
import {Req} from "@tsed/platform-http";
import {Strategy, StrategyOptions} from "passport-discord";
import * as refresh from "passport-oauth2-refresh";

import {AuthService} from "../services/auth/AuthService";

@Protocol<StrategyOptions>({
  name: "discord",
  useStrategy: Strategy,
  settings: {
    clientID: "id",
    clientSecret: "secret",
    callbackURL: "callbackURL"
  }
})
export class DiscordProtocol implements OnVerify, OnInstall {
  constructor(private authService: AuthService) {}

  async $onVerify(@Req() req: Req, @Args() [accessToken, refreshToken, profile]: any) {
    profile.refreshToken = refreshToken;

    const user = await this.authService.findOne({discordId: profile.id});

    return user ? user : false;
  }

  async $onInstall(strategy: Strategy) {
    refresh.use(strategy);
  }
}

```

### Facebook Auth

Facebook passport gives an example to use scope on routes (permissions). We'll see how we can configure a route with a mandatory `scope`.

Here is the corresponding Facebook protocol:

```ts
import {Inject} from "@tsed/di";
import {Args, OnInstall, OnVerify, Protocol} from "@tsed/passport";
import {Req} from "@tsed/platform-http";
import {Strategy, StrategyOptions} from "passport-facebook";

import {AuthService} from "../services/auth/AuthService";

@Protocol<StrategyOptions>({
  name: "facebook",
  useStrategy: Strategy,
  settings: {
    clientID: "FACEBOOK_APP_ID",
    clientSecret: "FACEBOOK_APP_SECRET",
    callbackURL: "http://www.example.com/auth/facebook/callback",
    profileFields: ["id", "emails", "name"]
  }
})
export class FacebookProtocol implements OnVerify, OnInstall {
  @Inject()
  private authService: AuthService;

  async $onVerify(@Req() req: Req, @Args() [accessToken, refreshToken, profile]: any) {
    profile.refreshToken = refreshToken;

    const user = await this.authService.findOne({facebookId: profile.id});

    return user ? user : false;
  }
}

```

::: tip Note
To use Facebook authentication, first create an app at Facebook Developers.
In order to use Facebook authentication, you must first create an app at Facebook Developers. When created, an app is assigned an App ID and an App Secret. Your application must also implement a redirect URL, to which Facebook will redirect users after they have approved access for your application.

The verify callback for Facebook authentication accepts `accessToken`, `refreshToken`, and `profile` arguments. `profile` will contain user profile information provided by Facebook; refer to User [Profile](http://www.passportjs.org/guide/profile/) for additional information.
:::

::: warning
For security reasons, the redirection URL must reside on the same host that is registered with Facebook.
:::

Then we have to implement routes as following:

```ts
import {Controller} from "@tsed/di";
import {Authenticate} from "@tsed/passport";
import {Req} from "@tsed/platform-http";
import {Get} from "@tsed/schema";

@Controller("/auth")
export class AuthCtrl {
  @Get("/:provider")
  @Authenticate("facebook", {scope: ["email"]})
  authenticated(@Req("user") user: Req) {
    // Facade
    return user;
  }

  @Get("/:provider/callback")
  @Authenticate("facebook")
  callback(@Req("user") user: Req) {
    // Facade
    return user;
  }
}

```

::: tip Note
@@Authenticate@@ decorator accepts a second option to configure the `scope`. It is equivalent to `passport.authenticate('facebook', {scope: 'read_stream' })`
:::

## Roles

Roles access management isn't a part of Passport.js and Ts.ED doesn't provide a way to handle this because it is specific for each application.

This section will give basic examples to implement your own roles strategy access.

To begin we have to implement a middleware which will be responsible to check the user role:

```ts
import {Unauthorized} from "@tsed/exceptions";
import {Middleware} from "@tsed/platform-middlewares";
import {Context} from "@tsed/platform-params";

@Middleware()
export class AcceptRolesMiddleware {
  use(@Context() ctx: Context) {
    const request = ctx.getReq();

    if (request.user && request.isAuthenticated()) {
      const roles = ctx.endpoint.get(AcceptRolesMiddleware);

      if (!roles.includes(request.user.role)) {
        throw new Unauthorized("Insufficient role");
      }
    }
  }
}

```

Then, we have to create a decorator `AcceptRoles`. This decorator will store the given roles and register the AcceptRolesMiddleware created before.

```ts
import {StoreSet, useDecorators} from "@tsed/core";
import {UseBefore} from "@tsed/platform-middlewares";

import {AcceptRolesMiddleware} from "./AcceptRolesMiddleware";

export function AcceptRoles(...roles: string[]) {
  return useDecorators(UseBefore(AcceptRolesMiddleware), StoreSet(AcceptRolesMiddleware, roles));
}

```

Finally, we can use this decorator on an Endpoint like this:

```ts
import {Controller} from "@tsed/di";
import {Authorize} from "@tsed/passport";
import {Post} from "@tsed/schema";

import {AcceptRoles} from "../decorators/acceptRoles";

@Controller("/calendars")
export class CalendarController {
  @Post("/")
  @Authorize("local")
  @AcceptRoles("admin")
  async post() {}
}

```

## Catch Passport Exception&#x20;

```typescript
import {PlatformContext} from "@tsed/platform-http";
import {Catch, ExceptionFilterMethods} from "@tsed/platform-exceptions";
import {PassportException} from "@tsed/passport";

@Catch(PassportException)
export class PassportExceptionFilter implements ExceptionFilterMethods {
  async catch(exception: PassportException, ctx: PlatformContext) {
    const {response} = ctx;

    console.log(exception.name);
  }
}
```

## Decorators

## Author

## Maintainers&#x20;
