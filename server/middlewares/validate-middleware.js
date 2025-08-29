const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    if (error && error.issues && Array.isArray(error.issues)) {
      return res.status(400).json({ 
      status : false,
      message :  error.issues[0].message
     });

      const messages = error.issues.map(err => err.message);
      return res.status(400).json({ errors: messages });
    }
    return res.status(400).json({ errors: ["Invalid input"] });
  }
};

module.exports = validate;
