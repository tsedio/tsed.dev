---
url: /api/specs/openspec/types/common/interface-open-spec-contact.md
description: api documentation of OpenSpecContact from @tsed/openspec
---

## Usage

```typescript
import { OpenSpecContact } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/common/OpenSpecInfo.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/common/OpenSpecInfo.ts#L0-L0).

## Overview

```ts
interface OpenSpecContact {
    name?: string;
    email?: string;
    url?: string;
}
```

## name

```ts
name?: string;
```

The identifying name of the contact person/organization.

## email

```ts
email?: string;
```

The email address of the contact person/organization. MUST be in the format of an email address.

## url

```ts
url?: string;
```

The URL pointing to the contact information. MUST be in the format of a URL.
