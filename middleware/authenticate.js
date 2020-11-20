const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split("")[1];
    const decode = jwt.verify(token, proccess.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    res.json({
      message: "Authentication Failed",
    });
  }
};
