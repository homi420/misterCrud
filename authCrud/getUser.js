const utils = require("../utils");
const theCatchErr = utils.theCatchErr;
const getUser = async (req, model) => {
  try {
    const id = req.user;
    const user = await model.findById(id).select("-password");
    return { success: true, message: "User Founded!", user };
  } catch (error) {
    return theCatchErr();
  }
};
module.exports = getUser;
