---
title: DirectusItemsRepository from @tsed/directus-sdk
description: api documentation of DirectusItemsRepository from @tsed/directus-sdk
meta:
 - name: keywords
   description: api typescript node.js documentation DirectusItemsRepository class
---
# DirectusItemsRepository - @tsed/directus-sdk

## Usage

```typescript
import { DirectusItemsRepository } from "@tsed/third-parties/directus-sdk/src/services/DirectusItemsRepository";
```

> See [/packages/third-parties/directus-sdk/src/services/DirectusItemsRepository.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/directus-sdk/src/services/DirectusItemsRepository.ts#L0-L0).

## Overview

```ts
abstract class DirectusItemsRepository<T extends Item = Item, Collection extends string = string> {
    protected contextService: DirectusContextService;
    protected abstract collection: Collection;
    getCollection(): Promise<import("@directus/types").AbstractService<T>>;
    create(data: Partial<T>, opts?: MutationOptions): Promise<T>;
    update(data: Partial<T> & Pick<T, "id">, opts?: MutationOptions): Promise<T>;
    listAll(): Promise<T[]>;
}
```

<!-- Description -->

## Description

Abstract base class for creating typed repository patterns with Directus collections.

This class provides a structured way to interact with Directus collections by:

-   Automatically retrieving the Directus context via dependency injection
-   Providing common CRUD operations (create, update, listAll)
-   Supporting custom methods through inheritance
-   Ensuring type safety with TypeScript generics

Extend this class to create collection-specific repositories with custom business logic.

### Basic repository with custom methods

```ts
import {injectable} from "@tsed/di";
import {DirectusItemsRepository} from "@tsed/directus-sdk";
import type {Item} from "@directus/types";

type Release = Item & {
  id: string;
  title: string;
  status: "draft" | "published";
  publishedAt?: string;
};

export class ReleasesRepository extends DirectusItemsRepository<Release, "releases"> {
  protected collection = "releases" as const;

  async getPublishedReleases() {
    const collection = await this.getCollection();

    return collection.readByQuery({
      filter: {
        status: {
          _eq: "published"
        }
      },
      sort: ["-publishedAt"]
    });
  }

  async publishRelease(id: string) {
    return this.update({
      id,
      status: "published",
      publishedAt: new Date().toISOString()
    });
  }
}
injectable(ReleasesRepository)
```

### Repository with complex queries

```ts
import {injectable} from "@tsed/di";
import {DirectusItemsRepository} from "@tsed/directus-sdk";

export class ArticlesRepository extends DirectusItemsRepository<Article, "articles"> {
  protected collection = "articles" as const;

  async findByAuthor(authorId: string) {
    const collection = await this.getCollection();

    return collection.readByQuery({
      filter: {
        author: {
          _eq: authorId
        }
      }
    });
  }

  async searchByTitle(query: string) {
    const collection = await this.getCollection();

    return collection.readByQuery({
      filter: {
        title: {
          _contains: query
        }
      }
    });
  }
}
injectable(ArticlesRepository);
```

### Using repository in an endpoint

```ts
import {defineEndpoint} from "@tsed/directus-sdk";
import {inject} from "@tsed/di";

export default defineEndpoint({
  id: "releases-api",
  handler: (router) => {
    const releasesRepo = inject(ReleasesRepository);

    router.get("/releases", async (req, res) => {
      const releases = await releasesRepo.getPublishedReleases();
      res.json(releases);
    });

    router.post("/releases/:id/publish", async (req, res) => {
      const release = await releasesRepo.publishRelease(req.params.id);
      res.json(release);
    });
  }
});
```

-   The extending class must define the `collection` property
-   Don't forget to mark the extending class with `@Injectable()` or `injectable()`
-   Access to Directus context is automatically handled through `DirectusContextService`

<!-- Members -->

## protected contextService

```ts
protected contextService: DirectusContextService;
```

## protected abstract collection

```ts
protected abstract collection: Collection;
```

## getCollection

```ts
getCollection(): Promise<import("@directus/types").AbstractService<T>>;
```

Retrieves the Directus ItemsService for the configured collection.

This method provides access to the underlying Directus ItemsService,
which offers full CRUD capabilities and advanced query features.

```ts
const collection = await this.getCollection();
const items = await collection.readByQuery({
  filter: { status: { _eq: "active" } },
  limit: 10,
  offset: 0
});
```

## create

```ts
create(data: Partial<T>, opts?: MutationOptions): Promise<T>;
```

-   **data** (`Partial<T>`): - Partial item data to create

-   **opts** (`MutationOptions`): Optional. -  mutation options (e.g., emitEvents, bypassLimits)

Creates a new item in the collection and returns the created item.

```ts
const newRelease = await releasesRepo.create({
  title: "Version 1.0",
  status: "draft"
});

console.log(newRelease.id); // Auto-generated ID
```

### With mutation options

```ts
const item = await repo.create(data, {
  emitEvents: false,
  bypassLimits: true
});
```

## update

```ts
update(data: Partial<T> & Pick<T, "id">, opts?: MutationOptions): Promise<T>;
```

-   **data** (`Partial<T> & Pick<T`): - Partial item data including the required `id` field

-   **opts** (`MutationOptions`): Optional. -  mutation options (e.g., emitEvents, bypassLimits)

Updates an existing item in the collection and returns the updated item.

```ts
const updated = await releasesRepo.update({
  id: "release-123",
  status: "published"
});
```

### With mutation options

```ts
const updated = await repo.update(
  { id: "123", title: "New Title" },
  { emitEvents: true }
);
```

## listAll

```ts
listAll(): Promise<T[]>;
```

Retrieves all items from the collection without pagination.

```ts
const allReleases = await releasesRepo.listAll();
console.log(`Total releases: ${allReleases.length}`);
```

### For large collections, consider custom pagination

```ts
async getPaginatedItems(page: number, pageSize: number) {
  const collection = await this.getCollection();
  return collection.readByQuery({
    limit: pageSize,
    offset: (page - 1) * pageSize
  });
}
```

This method uses `limit: -1` to retrieve all items. Use with caution on
large collections as it may impact performance.
