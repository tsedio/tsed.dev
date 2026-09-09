---
url: >-
  /api/platform/platform-multer/types/common/interfaces/interface-platform-multer-file.md
description: api documentation of PlatformMulterFile from @tsed/platform-multer
---

## Usage

```typescript
import { PlatformMulterFile } from "@tsed/platform-multer";
```

> See [/packages/platform/platform-multer/src/common/interfaces/PlatformMulterSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-multer/src/common/interfaces/PlatformMulterSettings.ts#L0-L0).

## Overview

```ts
interface PlatformMulterFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    stream: Readable;
    destination: string;
    filename: string;
    path: string;
    buffer: Buffer;
}
```

##

```ts
```

## fieldname

```ts
fieldname: string;
```

##

```ts
```

## originalname

```ts
originalname: string;
```

## encoding

```ts
encoding: string;
```

Value of the `Content-Transfer-Encoding` header for this file.

##

```ts
```

## mimetype

```ts
mimetype: string;
```

##

```ts
```

## size

```ts
size: number;
```

## stream

```ts
stream: Readable;
```

A readable stream of this file. Only available to the `_handleFile`
callback for custom `StorageEngine`s.

## /\*\* `DiskStorage` only

```ts
```

## destination

```ts
destination: string;
```

## /\*\* `DiskStorage` only

```ts
```

## filename

```ts
filename: string;
```

## /\*\* `DiskStorage` only

```ts
```

## path

```ts
path: string;
```

## /\*\* `MemoryStorage` only

```ts
```

## buffer

```ts
buffer: Buffer;
```
