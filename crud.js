// Simple Crud Functions...
const createItem = require('./simpleCrud/createItem')
const getItem = require('./simpleCrud/getItem')
const getItems = require('./simpleCrud/getItems')
const updateItem = require('./simpleCrud/updateItem')
const deleteItem = require("./simpleCrud/deleteItem")

// MiddleWares...
const fetch = require("./middlewares/fetch")
const upload = require("./middlewares/upload")
// Auth Crud Functions...
const signUp = require("./authCrud/signUp");
const login = require("./authCrud/login")
const getUser = require('./authCrud/getUser')



module.exports = {
    signUp, login, getUser,
    getItem, getItems, updateItem, deleteItem, createItem,
    fetch, upload
}
