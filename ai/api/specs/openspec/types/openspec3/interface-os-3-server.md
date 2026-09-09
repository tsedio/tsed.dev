---
title: OS3Server from @tsed/openspec
description: api documentation of OS3Server from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3Server interface
---
# OS3Server - @tsed/openspec

## Usage

```typescript
import { OS3Server } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Server.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Server.ts#L0-L0).

## Overview

```ts
interface OS3Server {
    url: string;
    description: string;
    variables?: OpenSpecHash<OpenSpecServerVariable>;
}
```

<!-- Members -->

## url

```ts
url: string;
```

A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the OpenAPI document is being served. Variable substitutions will be made when a variable is named in `{brackets}`.

## description

```ts
description: string;
```

An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation.

## variables

```ts
variables?: OpenSpecHash<OpenSpecServerVariable>;
```

A map between a variable name and its value. The value is used for substitution in the server's URL template.
