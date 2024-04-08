const express = require("express")
const router = express.Router()
const product = require("../Controllers/Products")


router.post("/create-products", product.createProduct)

module.exports = router
