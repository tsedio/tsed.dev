---
url: /introduction/ai/develop-with-ai.md
description: >-
  Configure any IDE or AI agent to generate correct Ts.ED application code using
  the agents.md standard and the official Ts.ED documentation.
---

# LLM prompts and AI IDE setup

Generating code with large language models (LLMs) is a rapidly growing area of interest for developers.
While LLMs are often capable of generating working code it can be a challenge to generate code for consistently evolving
frameworks like Ts.ED.

Advanced instructions and prompting are an emerging standard for supporting modern code generation details with
domain-specific information.

This section contains curated content and resources to support more accurate code generation for Ts.ED with
LLMs using the [AGENTS.md](https://agents.md) standard.

## Why `AGENTS.md` for your Ts.ED app?

* **One file, any tool:** works with agents that can read repo context (Cursor, Copilot Agents, Codeium, JetBrains AI
  Assistant, custom agents, etc.).
* **Consistent results:** the agent follows the same rules you follow, grounded in Ts.ED docs.
* **Low maintenance:** avoids per‑IDE configuration and keeps guidance close to your app code.

## Quick start

1. Create a file named `AGENTS.md` at the root of your Ts.ED application repository.
2. Paste the "Application `AGENTS.md` template" below and adapt project‑specific names and scripts.
3. Ask your agent:

```
Read AGENTS.md at the repository root and follow it for all changes.
```

::: tip Tip
Keep `AGENTS.md` short, precise, and actionable. Link to Ts.ED docs instead of duplicating them.
:::

## Application `AGENTS.md` template (recommended)

Here is a set of instructions to help LLMs generate correct code that follows Ts.ED best practices.
This file can be included as system instructions to your AI tooling or included along with your prompt as context.

::: tip Note
This file will be updated on a regular basis staying up to date with Ts.ED's conventions.
:::

````md
# Ts.ED AGENTS.md guide

This document provides an overview of the Ts.ED framework for AI assistants.

## Audience

You are an expert in TypeScript, Ts.ED, and scalable Node.js application development. You write functional,
maintainable, performant, and accessible code following Ts.ED and TypeScript best practices.

# Objectives

- Scaffold or extend features using Ts.ED patterns (controllers, services, models/DTOs, middlewares, interceptors,
  pipes, validators, exception filters).
- Generate code that compiles, follows decorators usage, and respects dependency injection.
- Use the official Ts.ED documentation for API details and examples.

## Typical repository layout (adjust to your project)

layout:

```text
src/
  controllers/
  services/
  models/
  middlewares/
  interceptors/
  protocols/ (auth strategies, guards)
  index.ts (server bootstrap)
  test/ or src/**/**.spec.ts
  package.json
```

## Best practices for Ts.ED apps

- Keep controllers small; push logic to services for easier testing.
- Use Model/DTOs and validation decorators to protect your routes.
- Prefer dependency injection over manual singletons.
- Use interceptors and middlewares for cross‑cutting concerns (logging, caching, metrics).
- Document routes with OpenAPI where applicable and keep examples up‑to‑date.

## Troubleshooting

- "Validation doesn’t run" → ensure Model/DTO is used as parameter with `@BodyParams()` and decorators like
  `@Required()` are
  present.
- "DI didn’t inject my service" → annotate with `@Injectable()` and ensure it’s discovered (standard directory
  structure/imports).
- "Custom error shape" → write an exception filter with `@Catch()` or use built‑in exceptions.
- "Types mismatch" → ensure DTOs are classes with explicit types; avoid loose `any` types.

## Conventions & scaffolding (CLI)

cli:
name: @tsed/cli
install: npm i -D @tsed/cli | yarn add -D @tsed/cli | pnpm add -D @tsed/cli | bun add -d @tsed/cli
usage:

- tsed generate <resource>
- The Ts.ED CLI is the canonical source of scaffolding and up-to-date conventions for Ts.ED.
- Prefer using `tsed generate` to create controllers, services, DTOs, middlewares, interceptors, tests, etc.
- When available, agents should call the CLI to ensure files, names, and boilerplate match the current best practices.

## Plugins & extensions

plugins: https://api.tsed.dev/rest/warehouse
notes:

- Discover community and premium plugins to extend the framework (auth, logging, integrations, etc.).
- Agents may query the API to suggest relevant plugins when the task involves external systems or advanced features.

## Authoritative docs (link instead of copying)

links:

- getting_started: https://tsed.dev/introduction/getting-started.md
- controllers: https://tsed.dev/docs/controllers.md
- routing: https://tsed.dev/docs/routing.md
- di_providers: https://tsed.dev/docs/providers.md
- models: https://tsed.dev/docs/model.md
- validation: https://tsed.dev/docs/validation.md
- middlewares: https://tsed.dev/docs/middlewares.md
- pipes: https://tsed.dev/docs/pipes.md
- interceptors: https://tsed.dev/docs/interceptors.md
- authentication: https://tsed.dev/docs/authentication.md
- exceptions: https://tsed.dev/docs/exceptions.md
- request_context: https://tsed.dev/docs/request-context.md
- swagger_openapi: https://tsed.dev/tutorials/swagger.md
- testing: https://tsed.dev/docs/testing.md
- best_practices: https://tsed.dev/introduction/cheat-sheet.md
- cli: https://tsed.dev/docs/commands.md
- plugins list: https://api.tsed.dev/rest/warehouse

## Guardrails for AI

rules:

- Prefer minimal diffs; mirror existing code style and naming.
- Always use Ts.ED decorators and DI patterns (e.g., @Controller, @Injectable, @Inject, @UseBefore, @UseAfter,
  @PathParams, @BodyParams, @QueryParams).
- Create DTOs with validation decorators (@Required, @MinLength, @Email, etc.).
- Keep controllers thin; move business logic to services.
- Keep serialization/validation consistent using Json Mapper and class annotations.
- Update or add unit/integration tests near changed files.
- When adding routes, include types, status codes, and example responses; update OpenAPI annotations when applicable.
- Do not change package manager or framework choices.

## How the agent should operate

process:

- Read relevant sections in the links above before generating code.
- Propose the smallest viable change and show a summary of edits.
- Provide follow‑up commands to validate locally (build/test/start).
- When adding new files, include short TSDoc comments and example usage where helpful.

## Common tasks (examples)

examples:

- title: Add a controller with CRUD endpoints
  prompt: |
  Create a Ts.ED controller `UsersController` under `src/controllers`. Use `@Controller("/users")`. Add `GET /:id`,
  `POST /`, and `PUT /:id` endpoints. Validate body with DTOs under `src/models` using Ts.ED validation decorators.
  Inject a `UsersService` for logic.
- title: Create a DTO with validation
  prompt: |
  Create `UserModel` in `src/models` with `id?: string`, `email: string`, `password: string`. Use `@Email()` and
  `@MinLength(8)` as appropriate. Ensure it’s compatible with Ts.ED Json Mapper.
- title: Add a service and inject it in a controller
  prompt: |
  Create `UsersService` in `src/services` annotated with `@Injectable()`. Provide methods `findById`, `create`,
  `update`. Inject it in `UsersController` via constructor and call methods.
- title: Add middleware or interceptor
  prompt: |
  Create a logging middleware using `@Middleware()` and `@UseBefore()` on specific routes. Or create an interceptor with
  `@Interceptor()` and apply via `@UseAfter()`.
- title: Exception handling
  prompt: |
  Use built‑in exceptions (e.g., `BadRequest`, `NotFound`) or create a custom `@Catch()` filter. Ensure consistent error
  response shape.
- title: Tests
  prompt: |
  Add unit tests with your chosen test runner (Jest/Vitest). Co‑locate `*.spec.ts` near the code or under `test/`. Mock
  services and test controller logic.

````

[Click here to download the AGENTS.md file.](https://tsed.dev/ai/AGENTS.md)

::: warning
This file is a work in progress. Any feedback or PR is welcome!
:::

## How to use with IDEs or agents

* Ask your tool to index the repository and follow `AGENTS.md` at the root.
* Share the task in a natural language and let the agent reference Ts.ED docs for API details.
* Prefer incremental changes; review and run the suggested validation commands.

## Common tasks and ready‑to‑use prompts

Use or adapt these prompts directly in your IDE/agent:

| Task                      | Prompt                                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Create a controller       | Follow `AGENTS.md` and the Ts.ED Controllers guide to add `ProductsController` with `GET /products` and `GET /products/:id`.         |
| Create a DTO + validation | Add `ProductModel` with `@Required() name`, `@Required() price: number`, and validation constraints.                                 |
| Add a service             | Create `ProductsService` with `findAll()` and `findById(id)` and inject it into `ProductsController`.                                |
| Middleware                | Add a `RequestIdMiddleware` that attaches an `x-request-id` header and logs it; apply it with `@UseBefore()` on the products routes. |
| Auth                      | Add a guard ensuring `Bearer` token is present; return `Unauthorized` otherwise.                                                     |
| Exception filter          | Create a `@Catch(NotFound)` filter to standardize 404 responses.                                                                     |
| Tests                     | Add unit tests for `ProductsService` and basic integration tests for `ProductsController`.                                           |
