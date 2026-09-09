---
url: >-
  /api/platform/platform-multer/types/common/decorators/decorator-multer-file-size.md
description: api documentation of MulterFileSize from @tsed/platform-multer
---

## Usage

```typescript
import { MulterFileSize } from "@tsed/platform-multer";
```

> See [/packages/platform/platform-multer/src/common/decorators/multerFileSize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-multer/src/common/decorators/multerFileSize.ts#L0-L0).

## Overview

```ts
function MulterFileSize(fileSize: number): MethodDecorator;
```

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
