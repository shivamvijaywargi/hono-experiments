import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { registerSchema } from "./user.validation";

const userRoutes = new Hono();

userRoutes.post("/register", zValidator("json", registerSchema), (c) => {
  const { name, email, password, rememberMe } = c.req.valid("json");

  console.log(typeof rememberMe);

  return c.json(
    {
      success: true,
      message: "Registered successfully",
    },
    201,
  );
});

userRoutes.post("/login", async (c) => {
  const body = await c.req.json();

  console.log(typeof body.rememberMe);

  return c.json({
    signed: "signed",
  });
});

export { userRoutes };
