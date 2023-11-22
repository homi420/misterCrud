const utils = require("../utils");
const theCatchErr = utils.theCatchErr;
async function getItem(req, model, fieldsToPopulate) {
  try {
    const id = req.params.id;
    const query = model.findById(id);

    if (
      fieldsToPopulate &&
      Array.isArray(fieldsToPopulate) &&
      fieldsToPopulate.length > 0
    ) {
      for (const field of fieldsToPopulate) {
        query.populate(field);
      }
    }
    const item = await query.exec();
    if (!item) {
      return { success: false, message: "No Item Found!" };
    }
    return { success: true, message: "Item Found!", item };
  } catch (error) {
    return theCatchErr();
  }
}
module.exports = getItem;
