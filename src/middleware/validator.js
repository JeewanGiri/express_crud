const { ZodAny } = require("zod");

function validator(schema) {
  return async (req, res, next) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      res.status(400).json({ error: JSON.parse(error)?.[0]?.message });
    }
  };
}

module.exports = validator;
