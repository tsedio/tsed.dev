---
title: getHostInfoFromPort from @tsed/core
description: api documentation of getHostInfoFromPort from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation getHostInfoFromPort function
---
# getHostInfoFromPort - @tsed/core

## Usage

```typescript
import { getHostInfoFromPort } from "@tsed/core";
```

> See [/packages/core/src/utils/http/getHostInfoFromPort.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/http/getHostInfoFromPort.ts#L0-L0).

## Overview

```ts
function getHostInfoFromPort(protocol: string, addressPort: any): {
    protocol: string;
    address: string;
    port: number;
    toString(): string;
};
```

<!-- Description -->

## Description

Parses an address-port combination and returns host information with protocol.

Accepts either a numeric port or a string in the format "address:port".
Returns an object with protocol, address, port, and a toString method for URL formatting.

<!-- Members -->

## protocol

```ts
protocol: string;
```

## address

```ts
address: string;
```

## port

```ts
port: number;
```

## toString

```ts
toString(): string;
```
