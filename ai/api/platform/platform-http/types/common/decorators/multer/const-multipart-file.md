---
title: MultipartFile from @tsed/platform-http
description: api documentation of MultipartFile from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation MultipartFile const
---
# MultipartFile - @tsed/platform-http

## Usage

```typescript
import { MultipartFile } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/decorators/multer/multipartFile.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/decorators/multer/multipartFile.ts#L0-L0).

## Overview

```ts
const MultipartFile: typeof M;
export type MultipartFile = MType;
```

<!-- Description -->

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
