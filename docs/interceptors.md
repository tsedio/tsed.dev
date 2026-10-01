---
url: /docs/interceptors.md
description: >-
  Discover how to use interceptors in Ts.ED to bind extra logic before/after
  method execution, transform the result returned from a function, transform
  the…
---

# Interceptors

An interceptor is a class annotated with the @@Interceptor@@ decorator. Interceptors should implement the @@InterceptorMethods@@ interface.

Interceptors have a set of useful capabilities which are inspired by the [Aspect Oriented Programming](https://en.wikipedia.org/wiki/Aspect-oriented_programming) (AOP) technique.

Creating and consuming an interceptor is a two-step process:

1. Create and annotate the interceptor class that will intercept calls to service methods
2. Decide which methods will be **intercepted** by which **interceptor**

They make it possible to:

* bind extra logic before/after method execution
* transform the result returned from a function
* transform the exception thrown from a function
* extend the basic function's behavior
* completely override a function depending on specific conditions

## Decorators

## Interceptor class

To create an interceptor class you need to implement the @@InterceptorMethods@@ interface and implement the
`intercept(context: InterceptorContext<any>, next?: InterceptorNext)` method, and use the `@Interceptor()` annotation to register your interceptor class.

Inside your `src/interceptors/MyInterceptor.ts` file, create the following simple interceptor.

```ts
import {InterceptorMethods, InterceptorContext, InterceptorNext, Interceptor} from "@tsed/di";

@Interceptor()
export class MyInterceptor implements InterceptorMethods {
  /**
   * ctx: The context that holds the dynamic data related to the method execution and the proceed method
   * to proceed with the original method execution
   *
   * opts: Static params that can be provided when the interceptor is attached to a specific method
   */
  async intercept(context: InterceptorContext<any>, next: InterceptorNext) {
    console.log(`the method ${context.propertyKey} will be executed with args ${context.args} and static data ${context.options}`);
    // let the original method by calling next function
    const result = await next();

    console.log(`the method was executed, and returned ${result}`);

    // must return the returned value back to the caller
    return result;
  }
}

```

## Use the interceptor

Now that your interceptor logic is in place, you can use it in any other service. You need to use the `@Intercept(InterceptorClass, opts)` annotation to register which interceptor should be used for the specific method you want to intercept.
An example service in `src/services/MyService.ts`:

```ts
import {Intercept, Injectable} from "@tsed/di";
import {MyInterceptor} from "../interceptors/MyInterceptor";

@Injectable()
export class MyService {
  // MyInterceptor is going to be used to intercept this method whenever called
  // 'simple data' is static data that will be passed as second arg to the interceptor.intercept method
  @Intercept(MyInterceptor, "simple data")
  mySimpleMethod() {
    console.log("the simple method is executed");
  }
}

// on class
@Injectable()
@Intercept(MyInterceptor, "simple data")
export class MyService2 {
  mySimpleMethod1() {
    console.log("the simple method is executed");
  }

  mySimpleMethod2() {
    console.log("the simple method is executed");
  }
}

```

If the service method is executed like `myServiceInstance.mySimpleMethod()` we will get the following output:

```bash
the method mySimpleMethod will be executed with args and static data simple data
the simple method is executed
the method was executed, and returned undefined
```

## Catch error with Interceptor

You can also catch errors with an interceptor.
To do this, you need to implement the `intercept` method in your interceptor class:

```ts
import {InterceptorMethods, InterceptorContext, InterceptorNext, Interceptor, Inject} from "@tsed/di";
import {Logger} from "@tsed/logger";
import {nameOf} from "@tsed/core";

@Interceptor()
export class FailSilently implements InterceptorMethods {
  @Inject()
  protected logger: Logger;

  async intercept(context: InterceptorContext<any>, next: InterceptorNext) {
    // let the original method by calling next function
    try {
      return await next();
    } catch (er) {
      this.logger.warn({
        event: "ENDPOINT_ERROR",
        error_name: er.name,
        error_message: er.message,
        args: context.args,
        target_name: nameOf(context.target),
        property_key: context.propertyKey
      });

      return context.options.fallback || [];
    }
  }
}

@Controller("/")
class MyController {
  @Get("/")
  @UseInterceptor(FailSilently)
  async get() {
    throw new Error("test");
  }
}

```
