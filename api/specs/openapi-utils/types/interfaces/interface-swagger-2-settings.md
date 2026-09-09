---
url: /api/specs/openapi-utils/types/interfaces/interface-swagger-2-settings.md
description: api documentation of Swagger2Settings from @tsed/openapi-utils
---

## Usage

```typescript
import { Swagger2Settings } from "@tsed/openapi-utils";
```

> See [/packages/specs/openapi-utils/src/interfaces/OpenApiSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openapi-utils/src/interfaces/OpenApiSettings.ts#L0-L0).

## Overview

```ts
interface Swagger2Settings extends OpenApiSettingsBase {
    specVersion?: OS2Versions;
    spec?: Partial<OpenSpec2>;
}
```

## specVersion

```ts
specVersion?: OS2Versions;
```

## spec

```ts
spec?: Partial<OpenSpec2>;
```

OpenSpec 2
