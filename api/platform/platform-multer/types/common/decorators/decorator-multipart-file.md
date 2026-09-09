---
url: >-
  /api/platform/platform-multer/types/common/decorators/decorator-multipart-file.md
description: api documentation of MultipartFile from @tsed/platform-multer
---

## Usage

```typescript
import { MultipartFile } from "@tsed/platform-multer";
```

> See [/packages/platform/platform-multer/src/common/decorators/multipartFile.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-multer/src/common/decorators/multipartFile.ts#L0-L0).

## Overview

```ts
function MultipartFile(name: string, maxCount?: number): ParameterDecorator;
export type MultipartFile = PlatformMulterFile;
```

## Description

Define a parameter as Multipart file.

```typescript
import {Post} from "@tsed/schema";
import {Controller, MulterOptions, MultipartFile} from "@tsed/platform-multer";
import {Controller} from "@tsed/di";
import {Multer} from "@types/multer";

type MulterFile = Express.Multer.File;

@Controller('/')
class MyCtrl {
  @Post('/file')
  private uploadFile(@MultipartFile("file1") file: MulterFile) {

  }

  @Post('/file')
  @MulterOptions({dest: "/other-dir"})
  private uploadFile(@MultipartFile("file1") file: MulterFile) {

  }

  @Post('/file2')
  @MulterOptions({dest: "/other-dir"})
  private uploadFile(@MultipartFile("file1") file: MulterFile, @MultipartFile("file2") file2: MulterFile) {

  }

  @Post('/files')
  private uploadFile(@MultipartFile("file1") files: MulterFile[]) {

  }
}
```

> See the tutorial on the [multer configuration](/docs/upload-files.md).
