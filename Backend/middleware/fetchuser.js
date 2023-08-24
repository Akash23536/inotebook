const jwt = require('jsonwebtoken'); //importing JWT package
const JWT_SECRET = 'akashisagoodb$oy'; // creating signature of authtoken



const fetchuser = (req, res, next) => {
    //get the user from jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "please authenticate using valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next()
    } catch (error) {
        res.status(401).send({ error: "please authenticate using valid token" })
    }
}
module.exports = fetchuser;