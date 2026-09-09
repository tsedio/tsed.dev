---
title: OS3Parameter from @tsed/openspec
description: api documentation of OS3Parameter from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3Parameter interface
---
# OS3Parameter - @tsed/openspec

## Usage

```typescript
import { OS3Parameter } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Parameter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Parameter.ts#L0-L0).

## Overview

```ts
interface OS3Parameter<Schema = OS3Schema> {
    name: string;
    in: "path" | "query" | "header" | "cookie";
    required: boolean;
    description?: string;
    deprecated?: boolean;
    allowEmptyValue?: boolean;
    schema?: OS3Schema | OpenSpecRef;
    style?: OS3StyleParameter;
    explode?: boolean;
    allowReserved?: boolean;
    example?: any;
    examples?: OpenSpecHash<OS3Example | OpenSpecRef>;
    content?: OpenSpecHash<OS3MediaType>;
}
```

<!-- Members -->

## name

```ts
name: string;
```

The name of the parameter. Parameter names are case sensitive.

-   If [`in`](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterIn) is `"path"`, the `name` field MUST correspond to the associated [path](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#pathsPath) segment from the path field in the [Paths Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#pathsObject). See [Path Templating](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#pathTemplating) for further information.
-   If [`in`](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterIn) is `"header"` and the `name` field is `"Accept"`, `"Content-Type"` or `"Authorization"`, the parameter definition SHALL be ignored.
-   For all other cases, the `name` corresponds to the parameter name used by the [`in`](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterIn) property.

## in

```ts
in: "path" | "query" | "header" | "cookie";
```

The location of the parameter. Possible values are `"query"`, `"header"`, `"path"` or `"cookie"`.

## required

```ts
required: boolean;
```

Determines whether this parameter is mandatory. If the \[parameter location]\(Determines whether this parameter is mandatory.
If the parameter location is `"path"`, this property is **REQUIRED** and its value MUST be `true`.
Otherwise, the property MAY be included and its default value is false.) is `"path"`, this property is **REQUIRED** and its value MUST be `true`.
Otherwise, the property MAY be included and its default value is `false`.

## description

```ts
description?: string;
```

A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

## deprecated

```ts
deprecated?: boolean;
```

Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.

## allowEmptyValue

```ts
allowEmptyValue?: boolean;
```

Sets the ability to pass empty-valued parameters.
This is valid only for query parameters and allows sending a parameter with an empty value.
Default value is `false`.
If style is used, and if behavior is `n/a` (cannot be serialized), the value of `allowEmptyValue` SHALL be ignored.

## schema

```ts
schema?: OS3Schema | OpenSpecRef;
```

The schema defining the type used for the parameter.

## style

```ts
style?: OS3StyleParameter;
```

Describes how the parameter value will be serialized depending on the type of the parameter value.
Default values (based on value of in): for `query` - `form`; for `path` - `simple`; for `header` - `simple`; for `cookie` - `form`.
See [style values](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#style-values).

## explode

```ts
explode?: boolean;
```

When this is true, parameter values of type array or object generate separate parameters for each value of the array or key-value pair of the map.
For other types of parameters this property has no effect. When style is form, the default value is true. For all other styles, the default value is false.

## allowReserved

```ts
allowReserved?: boolean;
```

Determines whether the parameter value SHOULD allow reserved characters, as defined by [RFC3986](https://tools.ietf.org/html/rfc3986#section-2.2) `:/?#[]@!$&'()*+,;=` to be included without percent-encoding.
This property only applies to parameters with an `in` value of `query`. The default value is `false`.

## example

```ts
example?: any;
```

Example of the media type.
The `example` SHOULD match the specified schema and encoding properties if present.
The `example` field is mutually exclusive of the `examples` field.
Furthermore, if referencing a `schema` which contains an example, the `example` value SHALL override the example provided by the schema.
To represent examples of media types that cannot naturally be represented in JSON or YAML, a string value can contain the example with escaping where necessary.

## examples

```ts
examples?: OpenSpecHash<OS3Example | OpenSpecRef>;
```

Examples of the media type.
Each example SHOULD contain a value in the correct format as specified in the parameter encoding.
The `examples` field is mutually exclusive of the `example` field.
Furthermore, if referencing a `schema` which contains an example, the examples value SHALL override the example provided by the schema.

##

```ts
/***
```

##

```ts
* A map containing the representations for the parameter. The key is the media type and the value describes it. The map MUST only contain one entry.
```

## content

```ts
content?: OpenSpecHash<OS3MediaType>;
```
