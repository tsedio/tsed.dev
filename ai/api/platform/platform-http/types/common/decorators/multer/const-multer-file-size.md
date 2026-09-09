---
title: MulterFileSize from @tsed/platform-http
description: api documentation of MulterFileSize from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation MulterFileSize const
---
# MulterFileSize - @tsed/platform-http

## Usage

```typescript
import { MulterFileSize } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/decorators/multer/multerFileSize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/decorators/multer/multerFileSize.ts#L0-L0).

## Overview

```ts
const MulterFileSize: typeof M;
```

<!-- Description -->

## Description

Define file size limit.

```typescript
import {Post} from "@tsed/schema";
import {MulterOptions, MultipartFile} from "@tsed/platform-multer";
import {Controller} from "@tsed/di";
import {Multer} from "@types/multer";

type MulterFile = Express.Multer.File;

@Controller('/')
class MyCtrl {
  @Post('/file2')
  @MulterFileSize(1024) // (Ko). Applied for all fields
  private uploadFile(@MultipartFile("file1") file: MulterFile, @MultipartFile("file2") file2: MulterFile) {

  }
}
```

> See the tutorial on the [multer configuration](/docs/upload-files.md).
