---
url: /api/specs/openspec/types/common/interface-open-spec-info.md
description: api documentation of OpenSpecInfo from @tsed/openspec
---

## Usage

```typescript
import { OpenSpecInfo } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/common/OpenSpecInfo.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/common/OpenSpecInfo.ts#L0-L0).

## Overview

```ts
interface OpenSpecInfo {
    title: string;
    version: string;
    description?: string;
    termsOfService?: string;
    contact?: OpenSpecContact;
    license?: OpenSpecLicense;
}
```

## title

```ts
title: string;
```

The title of the application.

## version

```ts
version: string;
```

The version of the OpenAPI document (which is distinct from the [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#oasVersion) version or the API implementation version).

## description

```ts
description?: string;
```

A short description of the application. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.

## termsOfService

```ts
termsOfService?: string;
```

A URL to the Terms of Service for the API. MUST be in the format of a URL.

## contact

```ts
contact?: OpenSpecContact;
```

The contact information for the exposed API.

## license

```ts
license?: OpenSpecLicense;
```

The license information for the exposed API.
