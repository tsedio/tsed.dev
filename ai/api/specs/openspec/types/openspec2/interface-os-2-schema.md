---
title: OS2Schema from @tsed/openspec
description: api documentation of OS2Schema from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS2Schema interface
---
# OS2Schema - @tsed/openspec

## Usage

```typescript
import { OS2Schema } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec2/OS2Schema.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec2/OS2Schema.ts#L0-L0).

## Overview

```ts
interface OS2Schema extends OpenSpecJsonSchema<OS2Schema> {
    discriminator?: string;
    readOnly?: boolean;
    xml?: OpenSpecXML;
    externalDocs?: OpenSpecExternalDocs;
}
```

<!-- Members -->

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
