---
url: /api/hooks/types/class-hooks.md
description: api documentation of Hooks from @tsed/hooks
---

## Usage

```typescript
import { Hooks } from "@tsed/hooks";
```

> See [/packages/hooks/src/Hooks.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/hooks/src/Hooks.ts#L0-L0).

## Overview

```ts
class Hooks {
    has(event: string): boolean;
    on(event: string, ref: HookRef, cb: HookListener): this;
    on(event: string, cb: HookListener): this;
    once(event: string, ref: HookRef, cb: HookListener): this;
    once(event: string, cb: HookListener): this;
    off(ref: HookRef): this;
    off(event: string, cb: HookListener): this;
    emit(event: string): void;
    emit(event: string, args: unknown[]): void;
    emit(event: string, ref: HookRef, args?: unknown[]): void;
    asyncEmit(event: string): Promise<void>;
    asyncEmit(event: string, args: unknown[]): Promise<void>;
    asyncEmit(event: string, ref: HookRef, args?: unknown[]): Promise<void>;
    alter<Arg = unknown, AlteredArg = Arg>(event: string, value: Arg, args?: unknown[], callThis?: unknown): AlteredArg;
    asyncAlter<Arg = unknown, AlteredArg = Arg>(event: string, value: Arg, args?: unknown[], callThis?: unknown): Promise<AlteredArg>;
    destroy(): void;
}
```

## Description

A lightweight event management system for registering, emitting, and managing hook listeners.

The Hooks class provides a flexible event system that supports:

* Registering listeners with optional references for targeted management
* One-time event listeners
* Synchronous and asynchronous event emission
* Value transformation through alter hooks
* Listener removal by callback or reference

### Usage

```typescript
const hooks = new Hooks();

// Register a listener
hooks.on("user:created", (user) => {
  console.log("User created:", user);
});

// Emit an event
hooks.emit("user:created", [{name: "John"}]);

// Alter a value through hooks
const modified = hooks.alter("transform:data", {value: 10}, []);
```

## has

```ts
has(event: string): boolean;
```

* **event** (`string`): - The event name to check

Check if an event has registered listeners.

## on

```ts
on(event: string, ref: HookRef, cb: HookListener): this;
```

* **event** (`string`): - The event name to listen to

* **ref** (`HookRef`): -  reference to associate with this listener

* **cb** (`HookListener`): - The callback function to invoke when the event is emitted

Register a listener for a hook event with an optional reference.

The reference can be used later to remove all listeners associated with it,
or to emit events targeting only listeners with a specific reference.

### Usage

```typescript
// Register a listener without reference
hooks.on("user:created", (user) => {
  console.log("User created:", user);
});

// Register a listener with reference
hooks.on("user:created", MyController, (user) => {
  console.log("Controller notified:", user);
});
```

## on

```ts
on(event: string, cb: HookListener): this;
```

* **event** (`string`): - The event name to listen to

* **cb** (`HookListener`): - The callback function to invoke when the event is emitted

Register a listener for a hook event.

## once

```ts
once(event: string, ref: HookRef, cb: HookListener): this;
```

* **event** (`string`): - The event name to listen to

* **ref** (`HookRef`): -  reference to associate with this listener

* **cb** (`HookListener`): - The callback function to invoke when the event is emitted

Register a one-time listener for a hook event with an optional reference.

The listener will be automatically removed after being invoked once.
This is useful for handling events that should only trigger a single action.

### Usage

```typescript
// Listen once without reference
hooks.once("app:ready", () => {
  console.log("App is ready!");
});

// Listen once with reference
hooks.once("initialization:complete", MyService, () => {
  console.log("Service initialized");
});
```

## once

```ts
once(event: string, cb: HookListener): this;
```

* **event** (`string`): - The event name to listen to

* **cb** (`HookListener`): - The callback function to invoke when the event is emitted

Register a one-time listener for a hook event.

The listener will be automatically removed after being invoked once.

## off

```ts
off(ref: HookRef): this;
```

* **ref** (`HookRef`): - The reference to remove all associated listeners

Remove all listeners associated with a specific reference.

This will remove all listeners across all events that were registered
with the given reference, regardless of the event name.

### Usage

```typescript
// Register listeners with a reference
hooks.on("event1", MyController, callback1);
hooks.on("event2", MyController, callback2);

// Remove all listeners for MyController
hooks.off(MyController);
```

## off

```ts
off(event: string, cb: HookListener): this;
```

* **event** (`string`): - The event name

* **cb** (`HookListener`): - The callback function to remove

Remove a specific listener from an event.

This will only remove the exact callback function from the specified event.

### Usage

```typescript
const callback = (data) => console.log(data);
hooks.on("my:event", callback);

// Remove the specific callback
hooks.off("my:event", callback);
```

## emit

```ts
emit(event: string): void;
```

* **event** (`string`): - The event name to emit

Trigger an event and invoke all registered listeners synchronously.

This method calls all listeners registered for the specified event without any arguments.

### Usage

```typescript
hooks.on("app:started", () => console.log("App started"));
hooks.emit("app:started");
```

## emit

```ts
emit(event: string, args: unknown[]): void;
```

* **event** (`string`): - The event name to emit

* **args** (`unknown[]`): - Array of arguments to pass to the listeners

Trigger an event and invoke all registered listeners with arguments.

All listeners for the event will be called synchronously with the provided arguments.

### Usage

```typescript
hooks.on("user:created", (user, timestamp) => {
  console.log("User created:", user, "at", timestamp);
});

hooks.emit("user:created", [{name: "John"}, Date.now()]);
```

## emit

```ts
emit(event: string, ref: HookRef, args?: unknown[]): void;
```

* **event** (`string`): - The event name to emit

* **ref** (`HookRef`): - The reference to target specific listeners

* **args** (`unknown[]`): Optional. -  array of arguments to pass to the listeners

Trigger an event and invoke only listeners attached to a specific reference.

This allows targeted event emission to listeners registered with a particular reference,
while ignoring listeners without that reference.

### Usage

```typescript
hooks.on("data:update", MyController, (data) => {
  console.log("Controller notified:", data);
});

// Only triggers listeners with MyController reference
hooks.emit("data:update", MyController, [{id: 1}]);
```

## asyncEmit

```ts
asyncEmit(event: string): Promise<void>;
```

* **event** (`string`): - The event name to emit

Trigger an event and invoke all registered listeners asynchronously.

All listeners are called in parallel and the method waits for all promises to resolve.
This is useful when listeners perform async operations like database queries or API calls.

### Usage

```typescript
hooks.on("user:created", async (user) => {
  await sendWelcomeEmail(user);
});

await hooks.asyncEmit("user:created");
```

## asyncEmit

```ts
asyncEmit(event: string, args: unknown[]): Promise<void>;
```

* **event** (`string`): - The event name to emit

* **args** (`unknown[]`): - Array of arguments to pass to the listeners

Trigger an event and invoke all registered listeners asynchronously with arguments.

All listeners are called in parallel with the provided arguments,
and the method waits for all promises to resolve.

### Usage

```typescript
hooks.on("order:created", async (order, userId) => {
  await notifyUser(userId, order);
});

await hooks.asyncEmit("order:created", [orderData, 123]);
```

## asyncEmit

```ts
asyncEmit(event: string, ref: HookRef, args?: unknown[]): Promise<void>;
```

* **event** (`string`): - The event name to emit

* **ref** (`HookRef`): - The reference to target specific listeners

* **args** (`unknown[]`): Optional. -  array of arguments to pass to the listeners

Trigger an event asynchronously for listeners with a specific reference.

Only listeners registered with the specified reference will be invoked.
All matching listeners are called in parallel.

### Usage

```typescript
hooks.on("data:sync", MyService, async (data) => {
  await syncToDatabase(data);
});

await hooks.asyncEmit("data:sync", MyService, [newData]);
```

## alter

```ts
alter<Arg = unknown, AlteredArg = Arg>(event: string, value: Arg, args?: unknown[], callThis?: unknown): AlteredArg;
```

* **event** (`string`): - The event name

* **value** (`Arg`): - The initial value to transform

* **args** (`unknown[]`): Optional. - Additional arguments passed to each listener

* **callThis** (`unknown`): Optional. - The context (`this`) to use when calling listeners

Transform a value by passing it through all registered listeners sequentially.

Each listener receives the value (potentially modified by previous listeners) and returns
a new or modified value. The final transformed value is returned after all listeners
have been applied. This is useful for implementing middleware-like transformation chains.

### Usage

```typescript
hooks.on("format:name", (name) => name.trim());
hooks.on("format:name", (name) => name.toUpperCase());

const result = hooks.alter("format:name", "  john  ");
// result: "JOHN"
```

## asyncAlter

```ts
asyncAlter<Arg = unknown, AlteredArg = Arg>(event: string, value: Arg, args?: unknown[], callThis?: unknown): Promise<AlteredArg>;
```

* **event** (`string`): - The event name

* **value** (`Arg`): - The initial value to transform

* **args** (`unknown[]`): Optional. - Additional arguments passed to each listener

* **callThis** (`unknown`): Optional. - The context (`this`) to use when calling listeners

Transform a value asynchronously by passing it through all registered listeners sequentially.

Similar to `alter`, but each listener can be async and is awaited before the next listener
is called. The value is transformed sequentially through the chain of async listeners.
This is useful for async transformation pipelines like data validation, sanitization, or enrichment.

### Usage

```typescript
hooks.on("process:data", async (data) => {
  return await validateData(data);
});

hooks.on("process:data", async (data) => {
  return await enrichData(data);
});

const result = await hooks.asyncAlter("process:data", rawData);
// result: enriched and validated data
```

## destroy

```ts
destroy(): void;
```

Remove all registered listeners and clean up the hooks instance.

This method clears all event listeners from the instance, effectively resetting it
to an empty state. Useful for cleanup operations, testing, or when disposing of
a Hooks instance.

### Usage

```typescript
const hooks = new Hooks();
hooks.on("event1", callback1);
hooks.on("event2", callback2);

hooks.destroy();
// All listeners are now removed
```
