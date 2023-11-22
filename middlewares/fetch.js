const jwt = require("jsonwebtoken")
const fetch = async (req, res, JWT_SECRET) => {
    const token = req.header('token')
    if (!token) {
        res.json({ success: false, message: "Unauthorized!" })
    }
    else {
        const data = jwt.verify(token, JWT_SECRET)
        if (!data) {
            res.json({ success: false, message: "Unauthorized!" })
        } else {
            req.user = data.id
        }

    }
}
module.exports = fetch