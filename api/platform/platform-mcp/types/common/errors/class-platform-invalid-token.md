---
url: /api/platform/platform-mcp/types/common/errors/class-platform-invalid-token.md
description: api documentation of PlatformInvalidToken from @tsed/platform-mcp
---

## Usage

```typescript
import { PlatformInvalidToken } from "@tsed/platform-mcp";
```

> See [/packages/platform/platform-mcp/src/common/errors/PlatformInvalidToken.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/platform/platform-mcp/src/common/errors/PlatformInvalidToken.ts#L0-L0).

## Overview

```ts
class PlatformInvalidToken extends OAuthError {
    constructor(message: string);
}
```

## Description

The presented access token cannot be trusted. Answered as a `401 invalid_token` challenge.
