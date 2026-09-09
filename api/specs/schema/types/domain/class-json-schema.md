---
url: /api/specs/schema/types/domain/class-json-schema.md
description: api documentation of JsonSchema from @tsed/schema
---

## Usage

```typescript
import { JsonSchema } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonSchema.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonSchema.ts#L0-L0).

## Overview

```ts
class JsonSchema<T = JSONSchema7Type> extends Map<string, any> {
    readonly $kind: string;
    readonly $isJsonDocument = true;
    readonly $hooks: Hooks;
    readonly $allow: any[];
    $selfRequired?: boolean;
    $ignore: boolean | IgnoreCallback;
    isDiscriminatorKey: boolean;
    isDiscriminator: boolean;
    constructor(obj?: Partial<JSONSchema7> | JsonSchema | Record<string, unknown>);
    get alias(): AliasMap;
    get isClass(): boolean;
    get isCollection(): boolean;
    get isLocalSchema(): boolean;
    get isGeneric(): boolean;
    get discriminatorAncestor(): any;
    get class(): Type<any>;
    get collectionClass(): Type<any>;
    get canRef(): boolean;
    get isNullable(): boolean;
    get isReadOnly(): any;
    get isWriteOnly(): any;
    get hasDiscriminator(): boolean;
    static add<Keys extends keyof JsonSchema>(property: Keys, method: JsonSchema[Keys]): typeof JsonSchema;
    has(key: string): boolean;
    get<T = any>(key: string, defaultValue: T): T;
    get<T = any>(key: string, defaultValue?: T): T | undefined;
    forwardGroups(bool?: boolean): this;
    groups(groups?: string[], isProperty?: boolean): this;
    groupsName(groupsName?: string): this;
    allowedGroups(groups?: string[]): this;
    genericLabels(genericLabels: string[]): this;
    genericLabel(genericLabel: string): this;
    genericOf(generics: GenericsMap): this;
    genericOf(generic: GenericValue): this;
    genericOf(...generics: Array<GenericValue[] | GenericValue>): this;
    nullable(): JsonSchema<T | null>;
    nullable(value: true): JsonSchema<T | null>;
    nullable(value: false): JsonSchema<Exclude<T, null>>;
    itemSchema(obj?: AnyJsonSchema): JsonSchema<JSONSchema7Type>;
    getAliasOf(property: AliasType): AliasType | undefined;
    addAlias(property: AliasType, alias: AliasType): this;
    removeAlias(property: AliasType): this;
    $id($id: string): this;
    $ref($ref: string): this;
    $schema($schema: JSONSchema7Version): this;
    label(name: string): this;
    name(name: string): this;
    ignore(cb: boolean | IgnoreCallback): this;
    default(value: T | undefined | (() => T)): JsonSchema<T>;
    const<V extends T>(value: V): JsonSchema<V>;
    description(description: string): this;
    discriminator(): Discriminator;
    discriminatorKey(propertyName: string): this;
    discriminatorValue(...values: string[]): this;
    additionalItems(additionalItems: boolean | AnyJsonSchema): this;
    contains(contains: JSONSchema7Definition): this;
    examples(examples: JSONSchema7Type[]): this;
    example(...examples: JSONSchema7Type[]): this;
    
    items<I = JSONSchema7Type>(items: JsonSchema<I> | AnyJsonSchema | AnyJsonSchema[], init?: boolean): JsonSchema<T extends Array<any> ? I[] : T extends Set<any> ? Set<I> : I>;
    $comment(comment: string): this;
    maxItems(maxItems: number): this;
    minItems(minItems: number): this;
    uniqueItems(uniqueItems: boolean): this;
    maxProperties(maxProperties: number): this;
    minProperties(minProperties: number): this;
    allow(...allow: any[]): this;
    optional(): JsonSchema<T | undefined>;
    required(): JsonSchema<Exclude<T, undefined>>;
    required(required: true): JsonSchema<Exclude<T, undefined>>;
    required(required: false): JsonSchema<T | undefined>;
    addRequired(property: string): this;
    removeRequired(property: string): this;
    isRequired(property: string): boolean;
    getRequiredFields(): string[];
    properties<P extends Record<string, JsonSchema<any>> = Record<string, JsonSchema<any>>>(properties: P): JsonSchema<PropsToShape<P>>;
    pick<K extends SchemaKey<T>>(...keys: K[]): JsonSchema<SchemaPick<T, K>>;
    omit<K extends SchemaKey<T>>(...keys: K[]): JsonSchema<SchemaOmit<T, K>>;
    partial(): JsonSchema<SchemaPartial<T>>;
    merge<S extends JsonSchema<any>>(schema: S): JsonSchema<SchemaMerge<T, Infer<S>>>;
    addProperty(key: string, schema: AnyJsonSchema): this;
    patternProperties<P extends Record<string, JsonSchema<any>> = Record<string, JsonSchema<any>>>(patternProperties: P): JsonSchema<PropsToShape<P>>;
    additionalProperties<V>(additionalProperties: boolean | AnyJsonSchema | JsonSchema<V>, init?: boolean): JsonSchema<Map<string, V>>;
    unknown(unknown?: boolean): JsonSchema<T & Record<string, unknown>>;
    dependencies(dependencies: {
        [p: string]: JSONSchema7Definition | JsonSchema | string[];
    }): this;
    propertyNames(propertyNames: JSONSchema7Definition | JsonSchema): this;
    enum<E extends Record<string, string | number>>(e: E): JsonSchema<E[keyof E]>;
    enum<E extends readonly T[]>(...e: E): JsonSchema<E[number]>;
    enum<E extends readonly T[]>(e: E): JsonSchema<E[number]>;
    definitions(definitions: Record<string, AnyJsonSchema>): this;
    allOf<S extends Array<AnyJsonSchema | null>>(allOf: S): JsonSchema<UnionToIntersection<Infer<S[number]>>>;
    anyOf<S extends Array<AnyJsonSchema | null>>(anyOf: S): JsonSchema<Infer<S[number]>>;
    oneOf<S extends Array<AnyJsonSchema | null>>(oneOf: S): JsonSchema<Infer<S[number]>>;
    not(not: AnyJsonSchema): this;
    multipleOf(multipleOf: number): this;
    max(maximum: number): this;
    maximum(maximum: number): this;
    exclusiveMaximum(exclusiveMaximum: number): this;
    min(minimum: number): this;
    minimum(minimum: number): this;
    exclusiveMinimum(exclusiveMinimum: number): this;
    maxLength(maxLength: number): this;
    minLength(minLength: number): this;
    pattern(pattern: string | RegExp): this;
    format(format: JsonFormatTypes | ValueOf<JsonFormatTypes>): this;
    type(type: any | JSONSchema7TypeName | JSONSchema7TypeName[]): this;
    any(...types: any[]): this;
    integer(): this;
    title(title: string): this;
    readOnly(readOnly: boolean): this;
    writeOnly(readOnly: boolean): this;
    customKey(key: string, value: any): this;
    vendorKey(key: VendorKeys, value: any): this;
    toObject(options?: JsonSchemaOptions): any;
    toJSON(options?: JsonSchemaOptions): any;
    assign(obj: Partial<JSONSchema7> | JsonSchema | Record<string, unknown>): this;
    set(key: string, value: any, force?: boolean): this;
    getJsonType(): string | string[];
    getTarget(): Type<any>;
    getAllowedGroups(): Set<string> | undefined;
    getAllowedRequiredValues(): any[];
    getGroups(): string[] | undefined;
    getGroupsName(): string | undefined;
    getName(): any;
    clone(): JsonSchema<JSONSchema7Type>;
    getGenericLabels(): string[] | undefined;
    getGenericOf(): GenericsMap | undefined;
    getRefSchema(): JsonSchema<JSONSchema7Type> | undefined;
    propertyKey(s: string): this;
    getPropertyKey(): string | symbol | undefined;
    target(target: any): this;
    isRequiredValue(property: string, value: any): boolean;
    toCollection(): this;
    unsetType(): this;
    protected setManyOf(keyword: "oneOf" | "anyOf" | "allOf", value: (AnyJsonSchema | null)[]): this | undefined;
    protected toSchema(item: any[]): JsonSchema[];
    protected toSchema(item: any): JsonSchema;
    protected mapGenerics(jsonSchema: unknown, generics: GenericValue[][]): GenericsMap;
    protected mapProperties(properties: Record<string, any>): any;
}
```

## Description

Core class representing a JSON Schema with TypeScript type integration.

JsonSchema is the central class in Ts.ED's schema system, providing a Map-based
interface for building and manipulating JSON Schema definitions. It extends the
standard JSON Schema 7 specification with Ts.ED-specific features including:

* TypeScript class and type integration
* Property aliasing and naming strategies
* Group-based conditional schemas
* Discriminator support for polymorphic types
* Generic type parameter handling
* Schema composition (oneOf, allOf, anyOf)
* Hook-based transformation pipeline
* Vendor extension support

### Usage

```typescript
// Create a basic schema
const schema = new JsonSchema({
  type: "string",
  minLength: 1,
  maxLength: 100
});

// Create schema from TypeScript class
class User {
  name: string;
  email: string;
}

const userSchema = s.from(User);

// Generate JSON Schema output
const jsonSchema = userSchema.toJSON();
```

### Key Features

* **Type Safety**: Generic type parameter `T` represents the TypeScript type
* **Composition**: Support for allOf, oneOf, anyOf schema composition
* **Validation**: Full JSON Schema validation keyword support
* **Transformation**: Hook system for custom schema transformations
* **Groups**: Conditional property inclusion based on groups
* **Generics**: Support for generic type parameters in classes

## readonly $kind

```ts
readonly $kind: string;
```

## readonly $isJsonDocument

```ts
readonly $isJsonDocument = true;
```

## readonly $hooks

```ts
readonly $hooks: Hooks;
```

## readonly $allow

```ts
readonly $allow: any[];
```

## $selfRequired

```ts
$selfRequired?: boolean;
```

## $ignore

```ts
$ignore: boolean | IgnoreCallback;
```

## isDiscriminatorKey

```ts
isDiscriminatorKey: boolean;
```

## isDiscriminator

```ts
isDiscriminator: boolean;
```

## get alias

```ts
get alias(): AliasMap;
```

Get the alias map for property name aliases.

The alias map allows bidirectional property name mapping, useful for
serialization/deserialization with different naming conventions.

## get isClass

```ts
get isClass(): boolean;
```

Check if this schema represents a TypeScript class (not a primitive or collection).

## get isCollection

```ts
get isCollection(): boolean;
```

Check if this schema represents a collection (array, Set, Map, etc.).

Collections have an associated item schema that defines the type of elements
they contain.

## get isLocalSchema

```ts
get isLocalSchema(): boolean;
```

Check if this is a local schema reference.

A local schema acts as a reference to link a property or parameter to a class schema.
This is used for type resolution and avoids schema duplication.

## get isGeneric

```ts
get isGeneric(): boolean;
```

Check if this schema represents a generic type.

Generic schemas have a generic label vendor key and are used for parameterized types.

## get discriminatorAncestor

```ts
get discriminatorAncestor(): any;
```

Get the ancestor schema that defines a discriminator.

Searches through the class hierarchy to find a parent class with a discriminator
configuration. This is used for polymorphic type resolution.

## get class

```ts
get class(): Type<any>;
```

Get the computed TypeScript class or type for this schema.

For local schemas, returns the item schema's target.
For recursive models using functions, resolves the function to get the actual type.

## get collectionClass

```ts
get collectionClass(): Type<any>;
```

Get the TypeScript class for collection items.

For collection schemas, returns the type of elements in the collection.
For non-collection schemas, returns the schema's own class.

## get canRef

```ts
get canRef(): boolean;
```

Check if this schema can use a $ref reference.

Schemas with labels can be referenced by $ref to avoid duplication
in generated OpenAPI specifications.

## get isNullable

```ts
get isNullable(): boolean;
```

Check if this schema allows null values.

## get isReadOnly

```ts
get isReadOnly(): any;
```

Check if this property is read-only.

Read-only properties are included in responses but not accepted in requests.

## get isWriteOnly

```ts
get isWriteOnly(): any;
```

Check if this property is write-only.

Write-only properties are accepted in requests but not included in responses.
Useful for sensitive data like passwords.

## get hasDiscriminator

```ts
get hasDiscriminator(): boolean;
```

Check if this schema has a discriminator configuration.

Discriminators enable polymorphic type resolution based on a property value.

## static add

```ts
static add<Keys extends keyof JsonSchema>(property: Keys, method: JsonSchema[Keys]): typeof JsonSchema;
```

* **item** (\`\`): - The input to convert to a JsonSchema

Create a JsonSchema from various input types.

This factory method intelligently converts different input types into JsonSchema instances:

* Existing JsonSchema: returned as-is
* TypeScript classes: retrieves the schema from JsonEntityStore
* Primitive classes (String, Number, etc.) and Date: creates type schema
* Plain objects: creates schema from JSON Schema definition

### Usage

```typescript
// From a class
const schema1 = s.from(User);

// From a primitive
const schema2 = s.from(String);

// From a schema object
const schema3 = s.string().minLength(1);

// From existing schema (no-op)
const schema4 = s.from(schema1);
```

## has

```ts
has(key: string): boolean;
```

* **key** (`string`): - The property key to check

Check if the schema has a property.

Checks multiple locations in order:

1. Standard Map keys
2. Internal keys (prefixed with #)
3. Vendor extension keys

## get

```ts
get<T = any>(key: string, defaultValue: T): T;
```

* **key** (`string`): - The property key to retrieve

* **defaultValue** (`T`): -  default value if key not found

Get a property value from the schema.

Retrieves values from multiple locations in order:

1. Vendor extension keys
2. Standard Map keys
3. Internal keys (prefixed with #)
4. Default value if not found

### Usage

```typescript
const minLength = schema.get("minLength", 0);
const customKey = schema.get("x-custom");
```

## get

```ts
get<T = any>(key: string, defaultValue?: T): T | undefined;
```

## forwardGroups

```ts
forwardGroups(bool?: boolean): this;
```

* **bool** (`boolean`): Optional. - Whether to enable group forwarding (default: true)

Enable group forwarding to nested properties.

When enabled, groups specified at the parent level are forwarded to nested
object properties, allowing hierarchical group filtering.

## groups

```ts
groups(groups?: string[], isProperty?: boolean): this;
```

* **groups** (`string[]`): Optional. - Array of group names this property belongs to

* **isProperty** (`boolean`): Optional. - Whether this is a property schema (enables group matching hooks)

Assign groups to this property or schema.

Groups enable conditional inclusion of properties based on serialization context.
For example, you might have "admin" and "public" groups to control visibility.

### Usage

```typescript
schema.groups(["admin", "internal"]);
```

## groupsName

```ts
groupsName(groupsName?: string): this;
```

* **groupsName** (`string`): Optional. - The groups name suffix

Set a custom name suffix for group-specific schema variations.

This is used to generate unique schema names when the same model is used
with different groups, avoiding conflicts in OpenAPI components.

## allowedGroups

```ts
allowedGroups(groups?: string[]): this;
```

* **groups** (`string[]`): Optional. - Array of group names allowed to access this schema

Specify which groups are allowed access to this schema.

## genericLabels

```ts
genericLabels(genericLabels: string[]): this;
```

* **genericLabels** (`string[]`): - Array of generic type parameter names

Assign generic type parameter labels to a class or schema.

Used for classes with generic type parameters (e.g., `Paginated<T>`)
to track the parameter names for proper schema generation.

### Usage

```typescript
schema.genericLabels(["T", "U"]);
```

## genericLabel

```ts
genericLabel(genericLabel: string): this;
```

* **genericLabel** (`string`): - The generic type parameter name

Assign a single generic type label to this schema.

Marks this schema as representing a generic type parameter.

## genericOf

```ts
genericOf(generics: GenericsMap): this;
```

* **generics** (`GenericsMap`): - Generic bindings to apply

Specify the concrete types for generic parameters.

When using a generic class, this method assigns the actual types that should
replace the generic parameters for this specific instance.

### Usage

```typescript
// For Paginated<User>
schema.genericOf([User]);
schema.genericOf(User);
schema.genericOf({T: [User]});
```

## genericOf

```ts
genericOf(generic: GenericValue): this;
```

## genericOf

```ts
genericOf(...generics: Array<GenericValue[] | GenericValue>): this;
```

## nullable

```ts
nullable(): JsonSchema<T | null>;
```

* **value** (\`\`): - Whether the schema is nullable (default: true)

Mark this schema as nullable or non-nullable.

Nullable schemas can accept `null` values in addition to their base type.
The type parameter is updated to reflect the nullability.

### Usage

```typescript
// Make nullable
schema.nullable(); // or schema.nullable(true)

// Make non-nullable
schema.nullable(false);
```

## nullable

```ts
nullable(value: true): JsonSchema<T | null>;
```

## nullable

```ts
nullable(value: false): JsonSchema<Exclude<T, null>>;
```

## itemSchema

```ts
itemSchema(obj?: AnyJsonSchema): JsonSchema<JSONSchema7Type>;
```

* **obj** (`AnyJsonSchema`): Optional. - Schema definition for items

Get or create the item schema for collections.

For array/collection types, this defines the schema for individual items.
If the schema already has an item schema, it returns the existing one;
otherwise, it creates a new one from the provided definition.

### Usage

```typescript
// Define array items
const arraySchema = new JsonSchema({type: "array"});
arraySchema.itemSchema({type: "string", minLength: 1});

// For class-based items
arraySchema.itemSchema(User);
```

## getAliasOf

```ts
getAliasOf(property: AliasType): AliasType | undefined;
```

* **property** (`AliasType`): - The property name to look up

Get the alias for a property name.

## addAlias

```ts
addAlias(property: AliasType, alias: AliasType): this;
```

* **property** (`AliasType`): - The original property name

* **alias** (`AliasType`): - The alias name

Add a bidirectional alias mapping between property names.

Aliases allow properties to be accessed by alternative names, useful for
supporting different naming conventions (camelCase vs snake\_case, etc.).

### Usage

```typescript
schema.addAlias("userId", "user_id");
// Both "userId" and "user_id" now map to each other
```

## removeAlias

```ts
removeAlias(property: AliasType): this;
```

* **property** (`AliasType`): - The property name to remove aliases for

Remove an alias mapping for a property.

## $id

```ts
$id($id: string): this;
```

* **$id** (\`\`): - The schema identifier URI

Set the `$id` keyword for this schema.

The `$id` keyword is used to identify the schema and establish a base URI
for resolving relative references.

## $ref

```ts
$ref($ref: string): this;
```

* **$ref** (\`\`): - The reference URI (e.g., "#/components/schemas/User")

Set a `$ref` reference to another schema.

The `$ref` keyword creates a reference to a schema defined elsewhere,
enabling schema reuse and avoiding duplication.

## $schema

```ts
$schema($schema: JSONSchema7Version): this;
```

* **$schema** (\`\`): - The JSON Schema version URI

Set the JSON Schema version.

## label

```ts
label(name: string): this;
```

* **name** (`string`): - The label name for the schema

Assign a label to enable schema referencing.

Labeled schemas can be referenced using `$ref` in OpenAPI specifications,
reducing duplication by sharing schema definitions across endpoints.

### Usage

```typescript
schema.label("User");
// Can now be referenced as #/components/schemas/User
```

## name

```ts
name(name: string): this;
```

* **name** (`string`): - The schema name

Set the name of this schema.

Unlike `label()`, this sets the name without enabling referencing.

## ignore

```ts
ignore(cb: boolean | IgnoreCallback): this;
```

* **cb** (`boolean` | `IgnoreCallback`): - Boolean flag or callback function to determine if property should be ignored

Mark this property as ignored during serialization.

Ignored properties are excluded from generated schemas and serialization.
Can be a boolean or a callback function for conditional ignoring.

### Usage

```typescript
// Always ignore
schema.ignore(true);

// Conditionally ignore based on context
schema.ignore((value, ctx) => {
  return ctx.groups?.includes("public");
});
```

## default

```ts
default(value: T | undefined | (() => T)): JsonSchema<T>;
```

This keyword can be used to supply a default JSON value associated with a particular schema.
It is RECOMMENDED that a default value be valid against the associated schema.

## const

```ts
const<V extends T>(value: V): JsonSchema<V>;
```

More readable form of a one-element "enum"

## description

```ts
description(description: string): this;
```

This attribute is a string that provides a full description of the purpose of the instance property.

## discriminator

```ts
discriminator(): Discriminator;
```

## discriminatorKey

```ts
discriminatorKey(propertyName: string): this;
```

## discriminatorValue

```ts
discriminatorValue(...values: string[]): this;
```

## additionalItems

```ts
additionalItems(additionalItems: boolean | AnyJsonSchema): this;
```

This keyword determines how child instances validate for arrays and does not directly validate the immediate instance itself.
If "items" is an array of schemas, validation succeeds if every instance element
at a position greater than the size of "items" validates against "additionalItems".
Otherwise, "additionalItems" MUST be ignored, as the "items" schema
(possibly the default value of an empty schema) is applied to all elements.
Omitting this keyword has the same behavior as an empty schema.

## contains

```ts
contains(contains: JSONSchema7Definition): this;
```

An array instance is valid against "contains" if at least one of its elements is valid against the given schema.

## examples

```ts
examples(examples: JSONSchema7Type[]): this;
```

Array of examples with no validation effect the value of "default" is usable as an example without repeating it under this keyword

## example

```ts
example(...examples: JSONSchema7Type[]): this;
```

Array of examples with no validation effect the value of "default" is usable as an example without repeating it under this keyword

## items

```ts
items<I = JSONSchema7Type>(items: JsonSchema<I> | AnyJsonSchema | AnyJsonSchema[], init?: boolean): JsonSchema<T extends Array<any> ? I[] : T extends Set<any> ? Set<I> : I>;
```

* **items** (`JsonSchema<I>` | `AnyJsonSchema` | `AnyJsonSchema[]`): The schema for array/set items

Set the items' schema for array/set collections

## $comment

```ts
$comment(comment: string): this;
```

## maxItems

```ts
maxItems(maxItems: number): this;
```

Must be a non-negative integer.
An array instance is valid against "maxItems" if its size is less than, or equal to, the value of this keyword.

## minItems

```ts
minItems(minItems: number): this;
```

Must be a non-negative integer.
An array instance is valid against "maxItems" if its size is greater than, or equal to, the value of this keyword.
Omitting this keyword has the same behavior as a value of 0.

## uniqueItems

```ts
uniqueItems(uniqueItems: boolean): this;
```

If this keyword has a boolean value false, the instance validates successfully.
If it has boolean value true, the instance validates successfully if all of its elements are unique.
Omitting this keyword has the same behavior as a value of false.

## maxProperties

```ts
maxProperties(maxProperties: number): this;
```

Must be a non-negative integer.
An object instance is valid against "maxProperties" if its number of properties is less than, or equal to, the value of this keyword.

## minProperties

```ts
minProperties(minProperties: number): this;
```

Must be a non-negative integer.
An object instance is valid against "maxProperties" if its number of properties is greater than,
or equal to, the value of this keyword.
Omitting this keyword has the same behavior as a value of 0.

## allow

```ts
allow(...allow: any[]): this;
```

## optional

```ts
optional(): JsonSchema<T | undefined>;
```

## required

```ts
required(): JsonSchema<Exclude<T, undefined>>;
```

Elements of this array must be unique.
An object instance is valid against this keyword if every item in the array is the name of a property in the instance.
Omitting this keyword has the same behavior as an empty array.

## required

```ts
required(required: true): JsonSchema<Exclude<T, undefined>>;
```

## required

```ts
required(required: false): JsonSchema<T | undefined>;
```

## addRequired

```ts
addRequired(property: string): this;
```

## removeRequired

```ts
removeRequired(property: string): this;
```

## isRequired

```ts
isRequired(property: string): boolean;
```

## getRequiredFields

```ts
getRequiredFields(): string[];
```

## properties

```ts
properties<P extends Record<string, JsonSchema<any>> = Record<string, JsonSchema<any>>>(properties: P): JsonSchema<PropsToShape<P>>;
```

This keyword determines how child instances validate for objects and does not directly validate the immediate instance itself.
Validation succeeds if, for each name that appears in both the instance and as a name within this keyword's value,
the child instance for that name successfully validates against the corresponding schema.
Omitting this keyword has the same behavior as an empty object.

## pick

```ts
pick<K extends SchemaKey<T>>(...keys: K[]): JsonSchema<SchemaPick<T, K>>;
```

## omit

```ts
omit<K extends SchemaKey<T>>(...keys: K[]): JsonSchema<SchemaOmit<T, K>>;
```

## partial

```ts
partial(): JsonSchema<SchemaPartial<T>>;
```

## merge

```ts
merge<S extends JsonSchema<any>>(schema: S): JsonSchema<SchemaMerge<T, Infer<S>>>;
```

## addProperty

```ts
addProperty(key: string, schema: AnyJsonSchema): this;
```

## patternProperties

```ts
patternProperties<P extends Record<string, JsonSchema<any>> = Record<string, JsonSchema<any>>>(patternProperties: P): JsonSchema<PropsToShape<P>>;
```

This attribute is an object that defines the schema for a set of property names of an object instance.
The name of each property of this attribute's object is a regular expression pattern in the ECMA 262, while the value is a schema.
If the pattern matches the name of a property on the instance object, the value of the instance's property
MUST be valid against the pattern name's schema value.
Omitting this keyword has the same behavior as an empty object.

## additionalProperties

```ts
additionalProperties<V>(additionalProperties: boolean | AnyJsonSchema | JsonSchema<V>, init?: boolean): JsonSchema<Map<string, V>>;
```

This attribute defines a schema for all properties that are not explicitly defined in an object type definition.
If specified, the value MUST be a schema or a boolean.
If false is provided, no additional properties are allowed beyond the properties defined in the schema.
The default value is an empty schema that allows any value for additional properties.

## unknown

```ts
unknown(unknown?: boolean): JsonSchema<T & Record<string, unknown>>;
```

This attribute defines a schema for all properties that are not explicitly defined in an object type definition.
If specified, the value MUST be a schema or a boolean.
If false is provided, no additional properties are allowed beyond the properties defined in the schema.
The default value is an empty schema that allows any value for additional properties.

## dependencies

```ts
dependencies(dependencies: {
     [p: string]: JSONSchema7Definition | JsonSchema | string[];
 }): this;
```

This keyword specifies rules that are evaluated if the instance is an object and contains a certain property.
Each property specifies a dependency.
If the dependency value is an array, each element in the array must be unique.
Omitting this keyword has the same behavior as an empty object.

## propertyNames

```ts
propertyNames(propertyNames: JSONSchema7Definition | JsonSchema): this;
```

Takes a schema which validates the names of all properties rather than their values.
Note the property name that the schema is testing will always be a string.
Omitting this keyword has the same behavior as an empty schema.

## enum

```ts
enum<E extends Record<string, string | number>>(e: E): JsonSchema<E[keyof E]>;
```

This provides an enumeration of all possible values that are valid
for the instance property. This MUST be an array, and each item in
the array represents a possible value for the instance value. If
this attribute is defined, the instance value MUST be one of the
values in the array in order for the schema to be valid.

## enum

```ts
enum<E extends readonly T[]>(...e: E): JsonSchema<E[number]>;
```

## enum

```ts
enum<E extends readonly T[]>(e: E): JsonSchema<E[number]>;
```

## definitions

```ts
definitions(definitions: Record<string, AnyJsonSchema>): this;
```

## allOf

```ts
allOf<S extends Array<AnyJsonSchema | null>>(allOf: S): JsonSchema<UnionToIntersection<Infer<S[number]>>>;
```

## anyOf

```ts
anyOf<S extends Array<AnyJsonSchema | null>>(anyOf: S): JsonSchema<Infer<S[number]>>;
```

## oneOf

```ts
oneOf<S extends Array<AnyJsonSchema | null>>(oneOf: S): JsonSchema<Infer<S[number]>>;
```

## not

```ts
not(not: AnyJsonSchema): this;
```

## multipleOf

```ts
multipleOf(multipleOf: number): this;
```

Must be strictly greater than 0.
A numeric instance is valid only if division by this keyword's value results in an integer.

## max

```ts
max(maximum: number): this;
```

Representing an inclusive upper limit for a numeric instance.
This keyword validates only if the instance is less than or exactly equal to "maximum".

## maximum

```ts
maximum(maximum: number): this;
```

Representing an inclusive upper limit for a numeric instance.
This keyword validates only if the instance is less than or exactly equal to "maximum".

## exclusiveMaximum

```ts
exclusiveMaximum(exclusiveMaximum: number): this;
```

Representing an exclusive upper limit for a numeric instance.
This keyword validates only if the instance is strictly less than (not equal to) to "exclusiveMaximum".

## min

```ts
min(minimum: number): this;
```

Representing an inclusive lower limit for a numeric instance.
This keyword validates only if the instance is greater than or exactly equal to "minimum".

## minimum

```ts
minimum(minimum: number): this;
```

Representing an inclusive lower limit for a numeric instance.
This keyword validates only if the instance is greater than or exactly equal to "minimum".

## exclusiveMinimum

```ts
exclusiveMinimum(exclusiveMinimum: number): this;
```

Representing an exclusive lower limit for a numeric instance.
This keyword validates only if the instance is strictly greater than (not equal to) to "exclusiveMinimum".

## maxLength

```ts
maxLength(maxLength: number): this;
```

Must be a non-negative integer.
A string instance is valid against this keyword if its length is less than, or equal to, the value of this keyword.

## minLength

```ts
minLength(minLength: number): this;
```

Must be a non-negative integer.
A string instance is valid against this keyword if its length is greater than, or equal to, the value of this keyword.
Omitting this keyword has the same behavior as a value of 0.

## pattern

```ts
pattern(pattern: string | RegExp): this;
```

Should be a valid regular expression, according to the ECMA 262 regular expression dialect.

## format

```ts
format(format: JsonFormatTypes | ValueOf<JsonFormatTypes>): this;
```

## type

```ts
type(type: any | JSONSchema7TypeName | JSONSchema7TypeName[]): this;
```

A single type, or a union of simple types

## any

```ts
any(...types: any[]): this;
```

## integer

```ts
integer(): this;
```

## title

```ts
title(title: string): this;
```

This attribute is a string that provides a short description of the instance property.

## readOnly

```ts
readOnly(readOnly: boolean): this;
```

## writeOnly

```ts
writeOnly(readOnly: boolean): this;
```

## customKey

```ts
customKey(key: string, value: any): this;
```

## vendorKey

```ts
vendorKey(key: VendorKeys, value: any): this;
```

## toObject

```ts
toObject(options?: JsonSchemaOptions): any;
```

## toJSON

```ts
toJSON(options?: JsonSchemaOptions): any;
```

## assign

```ts
assign(obj: Partial<JSONSchema7> | JsonSchema | Record<string, unknown>): this;
```

## set

```ts
set(key: string, value: any, force?: boolean): this;
```

## getJsonType

```ts
getJsonType(): string | string[];
```

Return the JSON type as string

## getTarget

```ts
getTarget(): Type<any>;
```

## getAllowedGroups

```ts
getAllowedGroups(): Set<string> | undefined;
```

## getAllowedRequiredValues

```ts
getAllowedRequiredValues(): any[];
```

## getGroups

```ts
getGroups(): string[] | undefined;
```

## getGroupsName

```ts
getGroupsName(): string | undefined;
```

## getName

```ts
getName(): any;
```

Get the symbolic name of the entity

## clone

```ts
clone(): JsonSchema<JSONSchema7Type>;
```

## getGenericLabels

```ts
getGenericLabels(): string[] | undefined;
```

## getGenericOf

```ts
getGenericOf(): GenericsMap | undefined;
```

## getRefSchema

```ts
getRefSchema(): JsonSchema<JSONSchema7Type> | undefined;
```

Returns the reference schema for class-based schemas.
Used to get the original schema definition when this schema is a local reference.

## propertyKey

```ts
propertyKey(s: string): this;
```

## getPropertyKey

```ts
getPropertyKey(): string | symbol | undefined;
```

## target

```ts
target(target: any): this;
```

## isRequiredValue

```ts
isRequiredValue(property: string, value: any): boolean;
```

## toCollection

```ts
toCollection(): this;
```

## unsetType

```ts
unsetType(): this;
```

## protected setManyOf

```ts
protected setManyOf(keyword: "oneOf" | "anyOf" | "allOf", value: (AnyJsonSchema | null)[]): this | undefined;
```

## protected toSchema

```ts
protected toSchema(item: any[]): JsonSchema[];
```

## protected toSchema

```ts
protected toSchema(item: any): JsonSchema;
```

## protected mapGenerics

```ts
protected mapGenerics(jsonSchema: unknown, generics: GenericValue[][]): GenericsMap;
```

## protected mapProperties

```ts
protected mapProperties(properties: Record<string, any>): any;
```
