---
title: OS3Link from @tsed/openspec
description: api documentation of OS3Link from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3Link interface
---
# OS3Link - @tsed/openspec

## Usage

```typescript
import { OS3Link } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Link.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Link.ts#L0-L0).

## Overview

```ts
interface OS3Link {
    operationRef?: string;
    operationId?: string;
    parameters?: OpenSpecHash<any>;
    description?: string;
    server?: OS3Server;
}
```

<!-- Members -->

## operationRef

```ts
operationRef?: string;
```

A relative or absolute reference to an OAS operation. This field is mutually exclusive of the operationId field, and MUST point to an Operation Object. Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI definition.

## operationId

```ts
operationId?: string;
```

The name of an existing, resolvable OAS operation, as defined with a unique operationId. This field is mutually exclusive of the operationRef field.

## parameters

```ts
parameters?: OpenSpecHash<any>;
```

A map representing parameters to pass to an operation as specified with operationId or identified via operationRef. The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. The parameter name can be qualified using the parameter location \[{in}.]{name} for operations that use the same [parameter name](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterIn) in different locations (e.g. path.id).

## description

```ts
description?: string;
```

A description of the link. CommonMark syntax MAY be used for rich text representation.

## server

```ts
server?: OS3Server;
```

A server object to be used by the target operation.
