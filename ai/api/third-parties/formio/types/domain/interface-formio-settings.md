---
title: FormioSettings from @tsed/formio
description: api documentation of FormioSettings from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioSettings interface
---
# FormioSettings - @tsed/formio

## Usage

```typescript
import { FormioSettings } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioSettings.ts#L0-L0).

## Overview

```ts
interface FormioSettings extends Record<string, any> {
    office365: {
        tenant: string;
        clientId: string;
        email: string;
        cert: string;
        thumbprint: string;
        [key: string]: any;
    };
    databases: {
        mysql: {
            host: string;
            port: string;
            database: string;
            user: string;
            password: string;
            [key: string]: any;
        };
        mssql: {
            host: string;
            port: string;
            database: string;
            user: string;
            password: string;
            [key: string]: any;
        };
    };
    email: {
        gmail: {
            auth: {
                user: string;
                pass: string;
                [key: string]: any;
            };
            [key: string]: any;
        };
        sendgrid: {
            auth: {
                api_user: string;
                api_key: string;
                [key: string]: any;
            };
            [key: string]: any;
        };
        mandrill: {
            auth: {
                apiKey: string;
                [key: string]: any;
            };
            [key: string]: any;
        };
    };
}
```

<!-- Members -->

## office365

```ts
office365: {
     tenant: string;
     clientId: string;
     email: string;
     cert: string;
     thumbprint: string;
     [key: string]: any;
 };
```

## databases

```ts
databases: {
     mysql: {
         host: string;
         port: string;
         database: string;
         user: string;
         password: string;
         [key: string]: any;
     };
     mssql: {
         host: string;
         port: string;
         database: string;
         user: string;
         password: string;
         [key: string]: any;
     };
 };
```

## email

```ts
email: {
     gmail: {
         auth: {
             user: string;
             pass: string;
             [key: string]: any;
         };
         [key: string]: any;
     };
     sendgrid: {
         auth: {
             api_user: string;
             api_key: string;
             [key: string]: any;
         };
         [key: string]: any;
     };
     mandrill: {
         auth: {
             apiKey: string;
             [key: string]: any;
         };
         [key: string]: any;
     };
 };
```
