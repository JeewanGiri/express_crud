const z = require("zod");

exports.userPostSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(1).max(100),
});
