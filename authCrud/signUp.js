const utils = require("../utils");
const theCatchErr = utils.theCatchErr;
const bcrypt = require("bcrypt");

async function signUp(req, model) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return {
        success: false,
        message: "Email and password is must for signing up!",
      };
    }
    const user = await model.find({ email });
    console.log(user);
    if (user.length !== 0) {
      return { success: false, message: "User Already Exists!" };
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new model({
        ...req.body,
        password: hashedPassword,
      });
      newUser
        .save()
        .then(() => {
          return { success: true, message: "User Registered!" };
        })
        .catch((error) => {
          console.log(error);
          return { success: false, message: "Registration Failed!" };
        });
    }
  } catch (error) {
    return theCatchErr();
  }
}
module.exports = signUp;
