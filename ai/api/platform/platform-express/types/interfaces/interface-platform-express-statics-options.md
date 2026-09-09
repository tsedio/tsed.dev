---
title: PlatformExpressStaticsOptions from @tsed/platform-express
description: api documentation of PlatformExpressStaticsOptions from @tsed/platform-express
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformExpressStaticsOptions interface
---
# PlatformExpressStaticsOptions - @tsed/platform-express

## Usage

```typescript
import { PlatformExpressStaticsOptions } from "@tsed/platform-express";
```

> See [/packages/platform/platform-express/src/interfaces/PlatformExpressStaticsOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-express/src/interfaces/PlatformExpressStaticsOptions.ts#L0-L0).

## Overview

```ts
interface PlatformExpressStaticsOptions {
    cacheControl?: boolean;
    dotfiles?: string;
    etag?: boolean;
    extensions?: string[] | false;
    fallthrough?: boolean;
    immutable?: boolean;
    index?: boolean | string | string[];
    lastModified?: boolean;
    maxAge?: number | string;
    redirect?: boolean;
    setHeaders?: (res: Express.Response, path: string, stat: any) => any;
}
```

<!-- Members -->

## cacheControl

```ts
cacheControl?: boolean;
```

Enable or disable setting Cache-Control response header, defaults to true.
Disabling this will ignore the immutable and maxAge options.

## dotfiles

```ts
dotfiles?: string;
```

Set how "dotfiles" are treated when encountered. A dotfile is a file or directory that begins with a dot (".").
Note this check is done on the path itself without checking if the path actually exists on the disk.
If root is specified, only the dotfiles above the root are checked (i.e. the root itself can be within a dotfile when when set to "deny").
The default value is 'ignore'.
'allow' No special treatment for dotfiles
'deny' Send a 403 for any request for a dotfile
'ignore' Pretend like the dotfile does not exist and call next()

## etag

```ts
etag?: boolean;
```

Enable or disable etag generation, defaults to true.

## extensions

```ts
extensions?: string[] | false;
```

Set file extension fallbacks. When set, if a file is not found, the given extensions will be added to the file name and search for.
The first that exists will be served. Example: \['html', 'htm'].
The default value is false.

## fallthrough

```ts
fallthrough?: boolean;
```

Let client errors fall-through as unhandled requests, otherwise forward a client error.
The default value is true.

## immutable

```ts
immutable?: boolean;
```

Enable or disable the immutable directive in the Cache-Control response header.
If enabled, the maxAge option should also be specified to enable caching. The immutable directive will prevent supported clients from making conditional requests during the life of the maxAge option to check if the file has changed.

## index

```ts
index?: boolean | string | string[];
```

By default this module will send "index.html" files in response to a request on a directory.
To disable this set false or to supply a new index pass a string or an array in preferred order.

## lastModified

```ts
lastModified?: boolean;
```

Enable or disable Last-Modified header, defaults to true. Uses the file system's last modified value.

## maxAge

```ts
maxAge?: number | string;
```

Provide a max-age in milliseconds for http caching, defaults to 0. This can also be a string accepted by the ms module.

## redirect

```ts
redirect?: boolean;
```

Redirect to trailing "/" when the pathname is a dir. Defaults to true.

## setHeaders:

```ts
setHeaders?: (res: Express.Response, path: string, stat: any) => any;
```

Function to set custom headers on response. Alterations to the headers need to occur synchronously.
The function is called as fn(res, path, stat), where the arguments are:
res the response object
path the file path that is being sent
stat the stat object of the file that is being sent
