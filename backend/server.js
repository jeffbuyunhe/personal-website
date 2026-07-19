import { app } from "./app.js";
import { env } from "./lib/env.js";
import { logger } from "./lib/logger.js";

app.listen(env.PORT, () => {
    logger.info({ port: env.PORT }, "server listening");
});
