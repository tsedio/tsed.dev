---
url: /api/specs/openspec/types/openspec3/interface-os-3-flows.md
description: api documentation of OS3Flows from @tsed/openspec
---

## Usage

```typescript
import { OS3Flows } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/openspec3/OS3Flows.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/openspec3/OS3Flows.ts#L0-L0).

## Overview

```ts
interface OS3Flows {
    implicit?: OS3FlowImplicit;
    password?: OS3FlowPassword;
    clientCredentials?: OS3FlowClientCredentials;
    authorizationCode?: OS3FlowAuthorizationCode;
}
```

## implicit

```ts
implicit?: OS3FlowImplicit;
```

## password

```ts
password?: OS3FlowPassword;
```

## clientCredentials

```ts
clientCredentials?: OS3FlowClientCredentials;
```

## authorizationCode

```ts
authorizationCode?: OS3FlowAuthorizationCode;
```
