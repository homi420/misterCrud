const utils = require("../utils");
const theCatchErr = utils.theCatchErr;
async function updateItem(req, model) {
  try {
    const id = req.params.id;
    const item = await model.findById(id);

    if (!item) {
      return { success: false, message: "No Item Found!" };
    }

    // Update the item with the data from req.body
    await model.findByIdAndUpdate(id, req.body, { new: true });

    return { success: true, message: "Item updated successfully." };
  } catch (error) {
    console.error("Error updating item:", error);
    return { success: false, message: "Internal Server Error" };
  }
}
module.exports = updateItem;
