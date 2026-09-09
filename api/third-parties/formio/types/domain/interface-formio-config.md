---
url: /api/third-parties/formio/types/domain/interface-formio-config.md
description: api documentation of FormioConfig from @tsed/formio
---

## Usage

```typescript
import { FormioConfig } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioConfig.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioConfig.ts#L0-L0).

## Overview

```ts
interface FormioConfig {
    baseUrl: string;
    skipInstall?: boolean;
    template?: FormioTemplate;
    allowedOrigins?: string[];
    mongoCA?: any;
    mongo?: string;
    mongoConfig?: string;
    reservedForms?: string[];
    jwt: FormioJwtConfig;
    email?: FormioEmailConfig;
    settings?: FormioSettings;
    audit?: boolean;
    root: {
        email: string;
        password: string;
    };
}
```

## baseUrl

```ts
baseUrl: string;
```

Base url to mount the formio endpoints with Ts.ED server. Default: '/'

## skipInstall

```ts
skipInstall?: boolean;
```

Skip installation process

## template

```ts
template?: FormioTemplate;
```

## allowedOrigins

```ts
allowedOrigins?: string[];
```

Cors allowed origin configuration. Default: `["*"]`.

## mongoCA

```ts
mongoCA?: any;
```

## mongo

```ts
mongo?: string;
```

## mongoConfig

```ts
mongoConfig?: string;
```

## reservedForms

```ts
reservedForms?: string[];
```

Reserved keywords form name list

## jwt

```ts
jwt: FormioJwtConfig;
```

Jwt configuration

## email

```ts
email?: FormioEmailConfig;
```

Email sendgrid settings

## settings

```ts
settings?: FormioSettings;
```

Settings of external formio services

## audit

```ts
audit?: boolean;
```

Enable audit log. Default: false

## root

```ts
root: {
     email: string;
     password: string;
 };
```

User root credentials
