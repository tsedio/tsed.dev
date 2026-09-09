---
title: OpenSpecXML from @tsed/openspec
description: api documentation of OpenSpecXML from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OpenSpecXML interface
---
# OpenSpecXML - @tsed/openspec

## Usage

```typescript
import { OpenSpecXML } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/common/OpenSpecXML.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/common/OpenSpecXML.ts#L0-L0).

## Overview

```ts
interface OpenSpecXML {
    name?: string;
    namespace?: string;
    prefix?: string;
    attribute?: boolean;
    wrapped?: boolean;
}
```

<!-- Members -->

## name

```ts
name?: string;
```

Replaces the name of the element/attribute used for the described schema property. When defined within items, it will affect the name of the individual XML elements within the list. When defined alongside type being array (outside the items), it will affect the wrapping element and only if wrapped is true. If wrapped is false, it will be ignored.

## namespace

```ts
namespace?: string;
```

The URI of the namespace definition. Value MUST be in the form of an absolute URI.

## prefix

```ts
prefix?: string;
```

The prefix to be used for the [name](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#xmlName).

## attribute

```ts
attribute?: boolean;
```

Declares whether the property definition translates to an attribute instead of an element. Default value is false.

## wrapped

```ts
wrapped?: boolean;
```

MAY be used only for an array definition. Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being array (outside the items).
