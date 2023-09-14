const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const authentication = require('../utils')
const router = express.Router()
router.post('/register', async (req, res) => {

    const user = await User.findOne({ username: req.body.username });
    if (user)
        return res
            .status(403)
            .send({ message: "User with given username already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    let newUser = await new User({
        ...req.body,
        password: hashPassword,
    }).save();

    newUser.password = undefined;
    newUser.__v = undefined;
    res
        .status(200)
        .send({ message: "Account created successfully" });
})
router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user)
        return res.status(400).send({ message: "invalid email or password!" });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
        return res.status(400).send({ message: "Invalid email or password!" });

    const token = jwt.sign(
        { _id: user._id, username: user.username },
        process.env.JWTPRIVATEKEY,
        { expiresIn: "7d" }
    );
    res.status(200).send({ token: token })
})
module.exports = router