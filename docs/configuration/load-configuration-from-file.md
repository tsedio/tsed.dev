---
url: /docs/configuration/load-configuration-from-file.md
description: Ts.ED doesn't provide solution to load configuration from files.
---

# Load configuration from file

Ts.ED doesn't provide solution to load configuration from files. Because, there is many solution to achieve this,
we consider this part as the developer responsibility.

By using [node-config](https://www.npmjs.com/package/config) or [dotenv](https://www.npmjs.com/package/dotenv), it's
possible to load your configuration from file
as following:

::: code-group

```ts \[dotenv]
import {$log} from "@tsed/logger";
import {PlatformExpress} from "@tsed/platform-express";
import dotenv from "dotenv";
import {Server} from "./Server.js";

dotenv.config({path: "/full/custom/path/to/your/env/vars"});

async function bootstrap() {
  try {
    $log.debug("Start server...");
    const platform = await PlatformExpress.bootstrap({
      rootModule: Server,
      envs: process.env
    });

    await platform.listen();
    $log.debug("Server initialized");
  } catch (er) {
    $log.error(er);
  }
}

bootstrap();

```

```ts \[dotenv-flow]
import {$log} from "@tsed/logger";
import {PlatformExpress} from "@tsed/platform-express";
import dotenv from "dotenv-flow";
import {Server} from "./Server.js";

dotenv.config();

async function bootstrap() {
  try {
    $log.debug("Start server...");
    const platform = await PlatformExpress.bootstrap({
      rootModule: Server,
      envs: process.env
    });

    await platform.listen();
    $log.debug("Server initialized");
  } catch (er) {
    $log.error(er);
  }
}

bootstrap();

```

```ts \[node-config]
import {$log} from "@tsed/logger";
import {PlatformExpress} from "@tsed/platform-express";
import {Server} from "./Server.js";

const rootDir = __dirname;

// /!\ configuration file must be outside of your src directory
process.env["NODE_CONFIG_DIR"] = `${rootDir}/../config`;
const config = require("config");

async function bootstrap() {
  try {
    $log.debug("Start server...");
    const platform = await PlatformExpress.bootstrap({rootModule: Server, ...config /* or config.util.toObject() */});

    await platform.listen();
    $log.debug("Server initialized");
  } catch (er) {
    $log.error(er);
  }
}

bootstrap();

```

:::
