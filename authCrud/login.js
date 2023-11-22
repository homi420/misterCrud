const utils = require("../utils");
const theCatchErr = utils.theCatchErr;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function login(req,  model, JWT_SECRET) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return { success: false, message: "Email and password is must to login" };
    }
    const user = await model.findOne({ email });
    if (!user) {
      return { success: false, message: "User Not Found" };
    } else {
      let userPassword = await bcrypt.compare(password, user.password);
      if (userPassword) {
        let data = {
          user: {
            id: user._id,
          },
        };
        let token = jwt.sign(data.user, JWT_SECRET);
        return { success: true, message: "Loginned Successfull!", token };
      } else {
        return {
          success: false,
          message: "Please write correct credentials to login",
        };
      }
    }
  } catch (error) {
   return theCatchErr();
  }
}
module.exports = login;
