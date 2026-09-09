---
title: OS3Encoding from @tsed/openspec
description: api documentation of OS3Encoding from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OS3Encoding interface
---
# OS3Encoding - @tsed/openspec

## Usage

```typescript
import { OS3Encoding } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Encoding.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Encoding.ts#L0-L0).

## Overview

```ts
interface OS3Encoding {
    contentType?: string;
    headers?: OpenSpecHash<OS3Header>;
    style?: string;
    explode?: boolean;
    allowReserved?: boolean;
}
```

<!-- Members -->

## contentType

```ts
contentType?: string;
```

The `Content-Type` for encoding a specific property. Default value depends on the property type: for `string` with `format` being `binary` – `application/octet-stream`; for other primitive types – `text/plain`; for `object` - application/json; for `array` – the default is defined based on the inner type. The value can be a specific media type (e.g. `application/json`), a wildcard media type (e.g. `image/*`), or a comma-separated list of the two types.

## headers

```ts
headers?: OpenSpecHash<OS3Header>;
```

A map allowing additional information to be provided as headers, for example `Content-Disposition`. `Content-Type` is described separately and SHALL be ignored in this section. This property SHALL be ignored if the request body media type is not a multipart.

## style

```ts
style?: string;
```

Describes how a specific property value will be serialized depending on its type. See [Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterObject) for details on the `[style](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterStyle)` property. The behavior follows the same values as `query` parameters, including default values. This property SHALL be ignored if the request body media type is not `application/x-www-form-urlencoded`.

## explode

```ts
explode?: boolean;
```

When this is true, property values of type `array` or `object` generate separate parameters for each value of the array, or key-value-pair of the map. For other types of properties this property has no effect. When `[style](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterStyle)` is `form`, the default value is true. For all other styles, the default value is `false`. This property SHALL be ignored if the request body media type is not `application/x-www-form-urlencoded`.

## allowReserved

```ts
allowReserved?: boolean;
```

Determines whether the parameter value SHOULD allow reserved characters, as defined by [RFC3986](https://tools.ietf.org/html/rfc3986#section-2.2) `:/?#[]@!$&'()*+,;=` to be included without percent-encoding. The default value is `false`. This property SHALL be ignored if the request body media type is not `application/x-www-form-urlencoded`.
