---
url: >-
  /api/platform/platform-multer/types/common/decorators/decorator-multer-options.md
description: api documentation of MulterOptions from @tsed/platform-multer
---

## Usage

```typescript
import { MulterOptions } from "@tsed/platform-multer";
```

> See [/packages/platform/platform-multer/src/common/decorators/multerOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-multer/src/common/decorators/multerOptions.ts#L0-L0).

## Overview

```ts
function MulterOptions(options: Options): MethodDecorator;
```

## Description

Define multer option for all MultipartFile

```typescript
import {PlatformMulterFile, MultipartFile, MulterOptions} from "@tsed/platform-multer";
import {Controller} from "@tsed/di";
import {Post} from "@tsed/schema";

@Controller('/')
class MyCtrl {
  @Post('/file')
  private uploadFile(@MultipartFile("file1") file: PlatformMulterFile) {

  }

  @Post('/file')
  @MulterOptions({dest: "/other-dir"})
  private uploadFile(@MultipartFile("file1") file: PlatformMulterFile) {

  }

  @Post('/file2')
  @MulterOptions({dest: "/other-dir"})
  private uploadFile(@MultipartFile("file1") file: PlatformMulterFile, @MultipartFile("file2") file2: PlatformMulterFile) {

  }

  @Post('/files')
  private uploadFile(@MultipartFile("file1") files: PlatformMulterFile[]) {

  }
}
```

See the tutorial on the [multer configuration](/docs/upload-files.md).
