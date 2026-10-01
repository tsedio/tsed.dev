---
url: /docs/not-found-page.md
description: >-
  Customize the 404 response error when a resource or route isn't resolved by
  the router in Ts.ED.
---

# Customize 404

The guide shows you how you can customize the 404 response error when a resource or route isn't resolved by
the router.

Customizing error is possible by using the [Exception filter feature](/docs/exceptions.html#exception-filter) and by catching
the @@ResourceNotFound@@ error class. This error is thrown by Ts.ED when nothing routes are resolved.

Create a new ResourceNotFoundFilter in the filters directories and copy/paste this example:

```ts
import {PlatformContext, ResourceNotFound} from "@tsed/platform-http";
import {Catch, ExceptionFilterMethods} from "@tsed/platform-exceptions";

@Catch(ResourceNotFound)
export class ResourceNotFoundFilter implements ExceptionFilterMethods {
  async catch(exception: ResourceNotFound, ctx: PlatformContext) {
    const {response} = ctx;

    const obj = {
      status: exception.status,
      message: exception.message,
      url: exception.url
    };
    // Json response
    response.status(exception.status).body(obj);

    // Or with ejs/handlers/etc...
    const html = await response.render("404.ejs", obj);
    response.status(exception.status).body(html);
  }
}

```

::: warning
`response.render()` require to configure the template engine before. See our page over [Templating engine](/docs/templating.md#installation) installation for more details.
:::

Then import the custom filter in your server:

```typescript
import {Configuration} from "@tsed/di";
import "./filters/ResourceNotFoundFilter"; // Importing filter with ES6 import is enough

@Configuration({
  // ...
})
export class Server {}
```
