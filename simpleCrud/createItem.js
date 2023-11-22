const utils = require("../utils");
const theCatchErr = utils.theCatchErr;
const path = require("path");
async function createItem(req, model) {
  try {
    let newItem;
    if (!req.file) {
      newItem = new model({ ...req.body });
    } else {
      newItem = new model({
        ...req.body,
        image: {
          url: `${req.protocol}://${req.get(
            "host"
          )}/uploads/${req.file.filename.replace(/\s/g, "")}`,
          filePath: path.join(process.cwd(), req.file.path),
        },
      });
    }
    await newItem.save();

    return { success: true, message: "Data Added!" };
  } catch (error) {
    return theCatchErr();
  }
}
module.exports = createItem;
