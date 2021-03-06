const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secret_key_need_longer");
    next();
  } catch(err){
    res.status(401).json({ message: "Token error...! Auth failed!" });
  }
};
