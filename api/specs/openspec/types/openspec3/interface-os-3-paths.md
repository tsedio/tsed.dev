---
url: /api/specs/openspec/types/openspec3/interface-os-3-paths.md
description: api documentation of OS3Paths from @tsed/openspec
---

## Usage

```typescript
import { OS3Paths } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Paths.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Paths.ts#L0-L0).

## Overview

```ts
interface OS3Paths<Schema = OS3Schema> extends OpenSpecPath<OS3Operation<Schema>> {
    summary?: string;
    description?: string;
    trace?: OS3Operation<Schema>;
    servers?: OS3Server[];
    parameters?: (OS3Parameter<Schema> | OpenSpecRef)[];
}
```

## summary

```ts
summary?: string;
```

An optional, string summary, intended to apply to all operations in this path.

## description

```ts
description?: string;
```

An optional, string description, intended to apply to all operations in this path. CommonMark syntax MAY be used for rich text representation.

## trace

```ts
trace?: OS3Operation<Schema>;
```

A definition of a TRACE operation on this path.

## servers

```ts
servers?: OS3Server[];
```

An alternative server array to service all operations in this path.

## parameters:

```ts
parameters?: (OS3Parameter<Schema> | OpenSpecRef)[];
```

A list of parameters that are applicable for all the operations described under this path. These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.
