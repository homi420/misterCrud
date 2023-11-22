const utils = require("../utils");
const theCatchErr = utils.theCatchErr;
async function getItems(model, fieldsToPopulate) {
  try {
    const query = model.find();
    if (
      fieldsToPopulate &&
      Array.isArray(fieldsToPopulate) &&
      fieldsToPopulate.length > 0
    ) {
      for (const field of fieldsToPopulate) {
        query.populate(field);
      }
    }
    const data = await query.exec();
    return { data };
  } catch (error) {
    return theCatchErr();
  }
}
module.exports = getItems;
