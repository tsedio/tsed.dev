---
url: /api/specs/openspec/types/openspec3/interface-open-spec-server-variable.md
description: api documentation of OpenSpecServerVariable from @tsed/openspec
---

## Usage

```typescript
import { OpenSpecServerVariable } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Server.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Server.ts#L0-L0).

## Overview

```ts
interface OpenSpecServerVariable {
    enum?: string;
    default: string;
    description?: string;
}
```

## enum

```ts
enum?: string;
```

An enumeration of string values to be used if the substitution options are from a limited set.

## default

```ts
default: string;
```

The default value to use for substitution, and to send, if an alternate value is not supplied. Unlike the Schema Object's default, this value MUST be provided by the consumer.

## description

```ts
description?: string;
```

An optional description for the server variable. CommonMark syntax MAY be used for rich text representation.
