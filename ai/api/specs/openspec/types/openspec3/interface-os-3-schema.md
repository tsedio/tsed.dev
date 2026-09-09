---
title: OS3Schema from @tsed/openspec
description: api documentation of OS3Schema from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3Schema interface
---
# OS3Schema - @tsed/openspec

## Usage

```typescript
import { OS3Schema } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Schema.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Schema.ts#L0-L0).

## Overview

```ts
interface OS3Schema extends OpenSpecJsonSchema<OS3Schema> {
    oneOf?: (OS3Schema | OpenSpecRef)[];
    anyOf?: (OS3Schema | OpenSpecRef)[];
    not?: OS3Schema | OpenSpecRef;
    nullable?: boolean;
    discriminator?: string;
    readOnly?: boolean;
    writeOnly?: boolean;
    xml?: OpenSpecXML;
    externalDocs?: OpenSpecExternalDocs;
}
```

<!-- Members -->

## oneOf:

```ts
oneOf?: (OS3Schema | OpenSpecRef)[];
```

Inline or referenced schema MUST be of a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#schemaObject) and not a standard JSON Schema.

## anyOf:

```ts
anyOf?: (OS3Schema | OpenSpecRef)[];
```

Inline or referenced schema MUST be of a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#schemaObject) and not a standard JSON Schema.

## not

```ts
not?: OS3Schema | OpenSpecRef;
```

Inline or referenced schema MUST be of a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#schemaObject) and not a standard JSON Schema.

## nullable

```ts
nullable?: boolean;
```

Allows sending a null value for the defined schema. Default value is false.

## discriminator

```ts
discriminator?: string;
```

Adds support for polymorphism.
The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it.

## readOnly

```ts
readOnly?: boolean;
```

Relevant only for Schema "properties" definitions. Declares the property as "read only". This means that it MAY be sent as part of a response but MUST NOT be sent as part of the request. Properties marked as readOnly being true SHOULD NOT be in the required list of the defined schema. Default value is false.

## writeOnly

```ts
writeOnly?: boolean;
```

Relevant only for Schema "properties" definitions. Declares the property as "write only". Therefore, it MAY be sent as part of a request but SHOULD NOT be sent as part of the response. If the property is marked as writeOnly being true and is in the required list, the required will take effect on the request only. A property MUST NOT be marked as both readOnly and writeOnly being true. Default value is false.

## xml

```ts
xml?: OpenSpecXML;
```

This MAY be used only on properties schemas. It has no effect on root schemas. Adds Additional metadata to describe the XML representation format of this property.

## externalDocs

```ts
externalDocs?: OpenSpecExternalDocs;
```

Additional external documentation for this schema.
