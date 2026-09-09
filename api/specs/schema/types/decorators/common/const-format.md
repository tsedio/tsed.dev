---
url: /api/specs/schema/types/decorators/common/const-format.md
description: api documentation of Format from @tsed/schema
---

## Usage

```typescript
import { Format } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/format.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/format.ts#L0-L0).

## Overview

```ts
const Format: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<(format: JsonFormatTypes | ValueOf<JsonFormatTypes>) => (...args: any[]) => any>;
```

## Description

Applies a format validation to string properties using JSON Schema's `format` keyword.

The `@Format()` decorator validates string values against common formats like email,
URI, date-time, and IP addresses. This provides semantic validation beyond just checking
the string type.

### Supported Formats

* **date**: Full-date according to RFC3339 (`2024-01-15`)
* **time**: Time with optional time-zone (`14:30:00`, `14:30:00+02:00`)
* **date-time**: Date-time from RFC3339 (time-zone mandatory: `2024-01-15T14:30:00Z`)
* **uri**: Full URI with optional protocol (`https://example.com/path`)
* **url**: Valid URL (stricter than uri)
* **email**: Email address (`user@example.com`)
* **hostname**: Host name according to RFC1034 (`example.com`)
* **ipv4**: IPv4 address (`192.168.1.1`)
* **ipv6**: IPv6 address (`2001:0db8:85a3::8a2e:0370:7334`)
* **regex**: Valid regular expression pattern

### Basic Usage

```typescript
class ContactModel {
  @Format("email")
  email: string;

  @Format("uri")
  website: string;

  @Format("ipv4")
  serverIp: string;
}
```

### With Arrays

```typescript
class ServerConfig {
  @Format("email")
  @CollectionOf(String)
  adminEmails: string[];
  // Each email must be valid
}
```

### Date/Time Formats

```typescript
class EventModel {
  @Format("date")
  eventDate: string;  // "2024-12-25"

  @Format("time")
  startTime: string;  // "14:30:00"

  @Format("date-time")
  createdAt: string;  // "2024-01-15T14:30:00Z"
}
```

### Convenience Decorators

Ts.ED provides convenience decorators that use `@Format()` internally:

* `@Email()` - Equivalent to `@Format("email")`
* `@DateTime()` - Equivalent to `@Format("date-time")`
* `@DateFormat()` - Equivalent to `@Format("date")`
* `@TimeFormat()` - Equivalent to `@Format("time")`
* `@Uri()` - Equivalent to `@Format("uri")`
* `@Url()` - Equivalent to `@Format("url")`

### Use Cases

* **Data Integrity**: Ensure strings conform to expected formats
* **API Validation**: Validate input data at API boundaries
* **Database Constraints**: Match database column format requirements
* **Standards Compliance**: Ensure RFC compliance for dates, emails, URIs

### Validation Examples

```typescript
@Format("email")
email: string;

// Valid:
"user@example.com"
"jane.doe+tag@company.co.uk"

// Invalid:
"not-an-email"
"missing@domain"
"@example.com"
```

### Important Notes

* Format validation depends on the validator implementation (AJV, etc.)
* Some formats may require additional validator plugins
* Format is primarily for strings; use on other types may be ignored
* Can be combined with other string validators (MinLength, Pattern, etc.)
