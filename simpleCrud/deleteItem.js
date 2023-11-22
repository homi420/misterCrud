const utils = require("../utils");
const theCatchErr = utils.theCatchErr;
const path = require("path");
const fs = require("fs");
async function deleteItem(req, model) {
  try {
    const id = req.params.id;

    const item = await model.findById(id);
    if (!item) {
      return { success: false, message: "No Item Found!" };
    } else {
      if (item.image) {
        const normalizedFilePath = path.normalize(item.image.filePath);
        fs.unlinkSync(normalizedFilePath);
      }
      await model.findByIdAndDelete(id);
      return { success: true, message: "Item Deleted!" };
    }
  } catch (error) {
    return theCatchErr();
  }
}
module.exports = deleteItem;
