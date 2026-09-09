---
title: FormioUtil from @tsed/formio
description: api documentation of FormioUtil from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioUtil interface
---
# FormioUtil - @tsed/formio

## Usage

```typescript
import { FormioUtil } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioUtils.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioUtils.ts#L0-L0).

## Overview

```ts
interface FormioUtil {
    Formio: FormioJs;
    eachComponent: Function;
    getComponent: Function;
    isInputComponent: Function;
    flattenComponents: Function;
    getValue: Function;
    isLayoutComponent: Function;
    jsonLogic: Function;
    checkCondition: Function;
    flattenComponentsForRender: Function;
    renderFormSubmission: Function;
    renderComponentValue: Function;
    fetch: any;
    base64: {
        encode(decoded: string): string;
        decode(encoded: string): string;
    };
    errorCodes: FormioErrors;
    layoutComponents: ("panel" | "table" | "well" | "columns" | "fieldset" | "tabs" | string)[];
    deleteProp(target: any, propertyKey: any): any;
    log(content: string): void;
    isBoolean(value: any): boolean;
    boolean(value: any): boolean;
    error(content: any): void;
    getAlias(req: Request, reservedForms: string[]): {
        alias: string;
        additional: string;
    };
    escapeRegExp(str: string): string;
    createSubResponse(res: Response): Response;
    createSubRequest(req: Request): Request;
    ObjectId(id: string): any;
    getHeader(req: Request, key: string): string | false;
    getQuery(req: Request, key: string): any | false;
    getParameter(req: Request, key: string): any | false;
    getRequestValue(req: Request, key: string): any | false;
    getUrlParams(url: string): Record<string, any>;
    getSubmissionKey(key: string): string;
    getFormComponentKey(key: string): string;
    idToBson(_id: string | any): any;
    idToString(_id: string | any): string;
    ensureIds(data: any[]): any;
    removeProtectedFields(form: string, action: string, submissions: any): void;
    uniqueMachineName(document: {
        machineName: string;
    }, model: any, next: (err?: Error) => void): void;
    castValue<T = any>(valueType: "string" | "number" | "boolean" | "[number]" | "[string]", value: any): T;
    valuePath(prefix: string, key: string): string;
    eachValue(components: any, data: any, fn: Function, context: any, path?: string): void;
}
```

<!-- Members -->

## Formio

```ts
Formio: FormioJs;
```

## eachComponent

```ts
eachComponent: Function;
```

Iterate through each component within a form.

The components to iterate.
The iteration function to invoke for each component.
Whether or not to include layout components.

## getComponent

```ts
getComponent: Function;
```

Get a component by its key

The components to iterate.
The key of the component to get.

The component that matches the given key, or undefined if not found.

## isInputComponent

```ts
isInputComponent: Function;
```

Define if component should be considered input component

JSON of component to check

If component is input or not

## flattenComponents

```ts
flattenComponents: Function;
```

Flatten the form components for data manipulation.

The components to iterate.
Whether or not to include layout components.

The flattened components map.

## getValue

```ts
getValue: Function;
```

Get the value for a component key, in the given submission.

A submission object to search.
A for components API key to search for.

## isLayoutComponent

```ts
isLayoutComponent: Function;
```

Determine if a component is a layout component or not.

The component to check.

Whether or not the component is a layout component.

## jsonLogic

```ts
jsonLogic: Function;
```

Apply JSON logic functionality.

## checkCondition

```ts
checkCondition: Function;
```

Check if the condition for a component is true or not.

## flattenComponentsForRender

```ts
flattenComponentsForRender: Function;
```

## renderFormSubmission

```ts
renderFormSubmission: Function;
```

## renderComponentValue

```ts
renderComponentValue: Function;
```

## fetch

```ts
fetch: any;
```

A node-fetch shim adding support for http(s) proxy and allowing
invalid tls certificates (to be used with self signed certificates).

## base64

```ts
base64: {
     encode(decoded: string): string;
     decode(encoded: string): string;
 };
```

## errorCodes

```ts
errorCodes: FormioErrors;
```

Application error codes.

## layoutComponents:

```ts
layoutComponents: ("panel" | "table" | "well" | "columns" | "fieldset" | "tabs" | string)[];
```

## deleteProp

```ts
deleteProp(target: any, propertyKey: any): any;
```

## log

```ts
log(content: string): void;
```

A wrapper around console.log that gets ignored by eslint.

The content to pass to console.log.

## isBoolean

```ts
isBoolean(value: any): boolean;
```

Determine if a value is a boolean representation.

## boolean

```ts
boolean(value: any): boolean;
```

Quick boolean coercer.

## error

```ts
error(content: any): void;
```

A wrapper around console.error that gets ignored by eslint.

The content to pass to console.error.

## getAlias

```ts
getAlias(req: Request, reservedForms: string[]): {
     alias: string;
     additional: string;
 };
```

Returns the URL alias for a form provided the url.

## escapeRegExp

```ts
escapeRegExp(str: string): string;
```

Escape a string for use in regex.

## createSubResponse

```ts
createSubResponse(res: Response): Response;
```

Create a sub response object that only handles errors.

## createSubRequest

```ts
createSubRequest(req: Request): Request;
```

Create a sub-request object from the original request.

## ObjectId

```ts
ObjectId(id: string): any;
```

Return the objectId.

## getHeader

```ts
getHeader(req: Request, key: string): string | false;
```

Search the request headers for the given key.

The Express request object.
The key to search for in the headers.

The header value if found or false.

## getQuery

```ts
getQuery(req: Request, key: string): any | false;
```

Search the request query for the given key.

The Express request object.
The key to search for in the query.

The query value if found or false.

## getParameter

```ts
getParameter(req: Request, key: string): any | false;
```

Search the request parameters for the given key.

The Express request object.
The key to search for in the parameters.

The parameter value if found or false.

## getRequestValue

```ts
getRequestValue(req: Request, key: string): any | false;
```

Determine if the request has the given key set as a header or url parameter.

The Express request object.
The key to search for.

Return the value of the key or false if not found.

## getUrlParams

```ts
getUrlParams(url: string): Record<string, any>;
```

Split the given URL into its key/value pairs.

The request url to split, typically req.url.

The key/value pairs of the request url.

## getSubmissionKey

```ts
getSubmissionKey(key: string): string;
```

Converts a form component key into a submission key
by putting .data. between each nested component
(ex: `user.name` becomes `user.data.name` in a submission)
The key to convert
The submission key

## getFormComponentKey

```ts
getFormComponentKey(key: string): string;
```

Converts a submission key into a form component key
by replacing .data. with .
(ex: `user.data.name` becomes `user.name` in a submission)
The key to convert
The form component key

## idToBson

```ts
idToBson(_id: string | any): any;
```

Utility function to ensure the given id is always a BSON object.

A mongo id as a string or object.

The mongo BSON id.

## idToString

```ts
idToString(_id: string | any): string;
```

Utility function to ensure the given id is always a string object.

A mongo id as a string or object.

The mongo string id.

## ensureIds

```ts
ensureIds(data: any[]): any;
```

Ensures that a submission data has MongoDB ObjectID's for all "id" fields.

## removeProtectedFields

```ts
removeProtectedFields(form: string, action: string, submissions: any): void;
```

## uniqueMachineName

```ts
uniqueMachineName(document: {
     machineName: string;
 }, model: any, next: (err?: Error) => void): void;
```

Retrieve a unique machine name

## castValue

```ts
castValue<T = any>(valueType: "string" | "number" | "boolean" | "[number]" | "[string]", value: any): T;
```

## valuePath

```ts
valuePath(prefix: string, key: string): string;
```

## eachValue

```ts
eachValue(components: any, data: any, fn: Function, context: any, path?: string): void;
```
