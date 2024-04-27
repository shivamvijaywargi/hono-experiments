import { Hono } from "hono";
import { poweredBy } from "hono/powered-by";
import { logger } from "hono/logger";
import { showRoutes } from "hono/dev";

import { HealthCheck } from "./pages/HealthCheck";
import { userRoutes } from "./users/user.routes";

const app = new Hono({ strict: false });

app.use(poweredBy());
app.use(logger());

app.get("/health-check", (c) => {
  return c.html(<HealthCheck />);
});

app.route("/api/v1/auth", userRoutes);

app.get("/:id", (c) => {
  const id = c.req.param("id");

  return c.json({
    success: true,
    message: `Fetched the post with id: ${id}`,
  });
});

// Displays all the routes in the terminal
showRoutes(app);

export default {
  port: 4000,
  fetch: app.fetch,
};
