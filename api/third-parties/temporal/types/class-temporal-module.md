---
url: /api/third-parties/temporal/types/class-temporal-module.md
description: api documentation of TemporalModule from @tsed/temporal
---

## Usage

```typescript
import { TemporalModule } from "@tsed/temporal";
```

> See [/packages/third-parties/temporal/src/TemporalModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/temporal/src/TemporalModule.ts#L0-L0).

## Overview

```ts
class TemporalModule {
    protected logger: Logger;
    protected injector: InjectorService;
    protected client: TemporalClient;
    constructor(temporalServices: any[]);
    getActivities(): object;
    protected getActivitiesFromInstance(instance: any): {};
}
```

## protected logger

```ts
protected logger: Logger;
```

## protected injector

```ts
protected injector: InjectorService;
```

## protected client

```ts
protected client: TemporalClient;
```

## getActivities

```ts
getActivities(): object;
```

## protected getActivitiesFromInstance

```ts
protected getActivitiesFromInstance(instance: any): {};
```
