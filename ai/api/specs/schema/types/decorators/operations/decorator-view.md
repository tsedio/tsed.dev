---
title: View from @tsed/schema
description: api documentation of View from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation View decorator
---
# View - @tsed/schema

## Usage

```typescript
import { View } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/view.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/view.ts#L0-L0).

## Overview

```ts
function View(path: string, options?: Object): MethodDecorator;
```

-   **path** (`string`): Relative path to the view file.

-   **options** (`Object`): Optional. Additional options

<!-- Description -->

## Description

Use a view and sends the rendered HTML string to the client. Optional parameter:

-   viewOptions, an object whose properties define local variables for the view.

The view argument is a string that is the file path of the view file to render.
This can be an absolute path, or a path relative to the views setting.
If the path does not contain a file extension, then the view engine setting determines the file extension.
If the path does contain a file extension, then Express will load the module for the specified template engine (via require())
and render it using the loaded module’s \__express function.

For more information, see [Using template engines with Express](http://expressjs.com/guide/using-template-engines.html).

> NOTE: The view argument performs file system operations like reading a file from disk and evaluating Node.js modules,
> and as so for security reasons should not contain input from the end-user.
