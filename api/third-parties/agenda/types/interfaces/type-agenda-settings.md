---
url: /api/third-parties/agenda/types/interfaces/type-agenda-settings.md
description: api documentation of AgendaSettings from @tsed/agenda
---

## Usage

```typescript
import { AgendaSettings } from "@tsed/third-parties/agenda/src/interfaces/interfaces";
```

> See [/packages/third-parties/agenda/src/interfaces/interfaces.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/agenda/src/interfaces/interfaces.ts#L0-L0).

## Overview

```ts
type AgendaSettings = ({
    enabled: false;
} & Partial<CommonSettings>) | ({
    enabled?: true;
} & CommonSettings);
```

## enabled

```ts
enabled: false;
```

## } & Partial

```ts
} & Partial<CommonSettings>) | ({
```

## enabled

```ts
enabled?: true;
```
