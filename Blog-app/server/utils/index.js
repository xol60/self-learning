const jwt = require('jsonwebtoken')

function authentication(req, res, next) {
    var token = req.header("Authorization");
    if (!token)
        return res
            .status(400)
            .send({ message: "Access denied." });
    token = token.slice(7)
    jwt.verify(token, process.env.JWTPRIVATEKEY, (err, validToken) => {
        if (err) {
            return res.status(400).send({ message: "Access denied." });
        } else {
            req.user = validToken;
            next();
        }
    });
};

module.exports = authentication