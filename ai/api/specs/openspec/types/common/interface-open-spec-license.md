---
title: OpenSpecLicense from @tsed/openspec
description: api documentation of OpenSpecLicense from @tsed/openspec
meta:
 - name: keywords
   description: api typescript node.js documentation OpenSpecLicense interface
---
# OpenSpecLicense - @tsed/openspec

## Usage

```typescript
import { OpenSpecLicense } from "@tsed/openspec";
```

> See [/packages/specs/openspec/src/common/OpenSpecInfo.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openspec/src/common/OpenSpecInfo.ts#L0-L0).

## Overview

```ts
interface OpenSpecLicense {
    name: string;
    url?: string;
}
```

<!-- Members -->

## name

```ts
name: string;
```

The license name used for the API.

## url

```ts
url?: string;
```

A URL to the license used for the API. MUST be in the format of a URL.
