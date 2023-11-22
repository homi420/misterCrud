# Mister-Crud

A simple CRUD package for handling data operations. This package provides functions for creating, reading, updating, and deleting items in a data model.

Note: Use "express.js" Only while using this package.

## v1.0.6

Now I have done some minor changes in this version now you can use the mister-crud functions to get the response and send it to the client according to your needs.
The example for doing this is shown in the usage section down below...

Additionally, I have added the functionality for populating fields of the model, such as if your Mongoose model contains the field with the type of mongoose.Schema.Types.ObjectId, you can easily populate it by adding the array of strings to the second argument of getItems() function and to the third argument of getItem() function...

## v1.0.5

Added File Uploading Option.

## v1.0.4

Fixed some readme info's.

## v1.0.3

Added The Authentication Crud options.

## Installation

To install this package in your project, run:

npm install mister-crud

## Usage

## v1.0.6 (Usage):

```javascript
const crud = require("mister-crud");
const express = require("express");
const Model = require("location/to/the/model");
const app = express();
const crud = require("mister-crud");

app.get("/getItems", async (req, res) => {
  const response = await crud.getItems(res, Model);
  if (response.success === false) {
    res.status(404).json(response);
  } else {
    res.json(response);
  }
});
```

# For Populating The Fields:

```javascript
app.get("/getItems", async (req, res) => {
  const response = await crud.getItems(Model, ["field1", "field2"]);
  if (response.success === false) {
    res.status(404).json(response);
  } else {
    res.json(response);
  }
});
app.get("/getItem/:id", async (req, res) => {
  const response = await crud.getItems(Model, ["field1", "field2"]);
  if (response.success === false) {
    res.status(404).json(response);
  } else {
    res.json(response);
  }
});
```

### Updated Usage Of Functions IN NEW VERSION v1.0.6:

```javascript
app.post("/addItem", async (req, res) => {
  const response = await crud.createItem(req, Model);
});
app.delete("/deleteItem/:id", async (req, res) => {
  const response = await crud.deleteItem(req, Model);
});
app.put("/updateItem/:id", async (req, res) => {
  const response = await crud.updateItem(req, Model);
});
app.get("/getItem/:id", async (req, res) => {
  const response = await crud.getItems(Model, ["field1", "field2"]);
});
app.get("/getItems/", async (req, res) => {
  const response = await crud.getItems(Model, ["field1", "field2"]);
});
```

### Importing the Package

```javascript
const crud = require("mister-crud");
```

## Creating_Item

```javascript
crud.createItem(req, res, model);
```

req: The request object containing the data for the new item.
res: The response object to send back the result.
model: The Mongoose model to interact with.

## Uploading Files

     This is the function for uploading the image...

```javascript
crud.upload.single("image");
```

     if u  want to upload the image then just write this inside the function e.g: app.post() in this case, this will work as middleware.

```javascript
app.post("/createItem", crud.upload.single("image"), (req, res) => {
  {
    crud.createItem(req, res, model);
  }
});
```

    Make sure to use the enctype="multipart/form-data" in your html form. and make sure that the name of the field in the form used for getting the image file, is same as using in the crud.upload.single('image') like in this case it's "image". Make sure that the field in your mongoose model for storing image's links are image not img or any other.

    // note : your model must have image field in it to order to save the link of image. e.g:

```javascript
    const myModel  =new mongoose.Schema({
        image:{
            url:{
                type:String,
                required:true
            }
            filePath:{
                type:String,
                required:true
            }
        }
        // other fields...
    });
```

## Reading Items

```javascript
crud.getItems(res, model);
```

res: The response object to send back the result.
model: The Mongoose model to interact with.

## Reading Single Item

```javascript
crud.getItem(req, res, model);
```

req: The request object containing the item's ID.
res: The response object to send back the result.
model: The Mongoose model to interact with.

## Updating Item

```javascript
crud.updateItem(req, res, model);
```

req: The request object containing the item's ID and updated data.
res: The response object to send back the result.
model: The Mongoose model to interact with.

## Deleting Item

```javascript
crud.deleteItem(req, res, model);
```

req: The request object containing the item's ID.
res: The response object to send back the result.
model: The Mongoose model to interact with.

## Signing Up

```javascript
crud.signUp(req, res, model);
```

req: The request object containing the user information, Email And Password Are must.
res: The response object to send back the result.
model: The Mongoose model to interact with.

## Login

```javascript
crud.login(req, res, model, JWT_SECRET);
```

req: The request object containing the user information, Email And Password Are must.
res: The response object to send back the result.
model: The Mongoose model to interact with.
JWT_SECRET: The secret key to encrypt the user id.

## Get User

```javascript
crud.getUser(req, res, model);
```

req: The request object containing the id of the user decrypted by the fetch();

res: The response object to send back the result.

Note: Dont forget to use fetch() before using this getUser() function

## Fetch

```javascript
crud.fetch(req, res, JWT_SECRET);
```

req: The request object containing the token returned by login function; you need to store the token in the headers with the name of "token";

res: The response object to send back the result.
JWT_SECRET: The secret key to decrypt the user id, The Key should be same like used in the login function.

Note: You have to use this fetch function; where ever the login is required for Example before using getUser()

## Contributions

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the ISC License - see the LICENSE.md file for details.

Feel free to use this template and adjust any details based on your specific package and preferences!
