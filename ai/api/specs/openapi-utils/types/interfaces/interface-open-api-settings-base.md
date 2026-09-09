---
title: OpenApiSettingsBase from @tsed/openapi-utils
description: api documentation of OpenApiSettingsBase from @tsed/openapi-utils
meta:
 - name: keywords
   description: api typescript node.js documentation OpenApiSettingsBase interface
---
# OpenApiSettingsBase - @tsed/openapi-utils

## Usage

```typescript
import { OpenApiSettingsBase } from "@tsed/openapi-utils";
```

> See [/packages/specs/openapi-utils/src/interfaces/OpenApiSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openapi-utils/src/interfaces/OpenApiSettings.ts#L0-L0).

## Overview

```ts
interface OpenApiSettingsBase {
    path: string;
    specVersion?: OpenSpecVersions;
    fileName?: string;
    doc?: string;
    cssPath?: string;
    jsPath?: string;
    viewPath?: string | false;
    showExplorer?: boolean;
    specPath?: string;
    outFile?: string;
    hidden?: boolean;
    sortPaths?: boolean;
    operationIdFormatter?: (name: string, propertyKey: string, path: string) => string;
    operationIdPattern?: string;
    disableSpec?: boolean;
    pathPatterns?: string[];
}
```

<!-- Members -->

## path

```ts
path: string;
```

The url subpath to access to the documentation.

## specVersion

```ts
specVersion?: OpenSpecVersions;
```

Specify the spec version you want to generate.

## fileName

```ts
fileName?: string;
```

Swagger file name. By default swagger.json

## doc

```ts
doc?: string;
```

The documentation key used by `@Docs` decorator to create several swagger documentations.

## cssPath

```ts
cssPath?: string;
```

The path to the CSS file.

## jsPath

```ts
jsPath?: string;
```

The path to the JS file.

## viewPath

```ts
viewPath?: string | false;
```

The path to the ejs file to create html page.

## showExplorer

```ts
showExplorer?: boolean;
```

Display the search field in the navbar.

## specPath

```ts
specPath?: string;
```

Load the base spec documentation from the specified path.

## outFile

```ts
outFile?: string;
```

Write the `swagger.json` spec documentation on the specified path.

## hidden

```ts
hidden?: boolean;
```

Display the documentation in the browser.

## sortPaths

```ts
sortPaths?: boolean;
```

Sort paths by alphabetical order

## operationIdFormatter:

```ts
operationIdFormatter?: (name: string, propertyKey: string, path: string) => string;
```

A function to generate the operationId.

## operationIdPattern

```ts
operationIdPattern?: string;
```

A pattern to generate the operationId. Format of operationId field (%c: class name, %m: method name).

## disableSpec

```ts
disableSpec?: boolean;
```

## pathPatterns

```ts
pathPatterns?: string[];
```

Include only controllers whose paths match the pattern list provided.
