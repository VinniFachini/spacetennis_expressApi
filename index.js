const express = require('express')
const products = require('./api/products')

const app = express()

const PORT = process.env.PORT || 5000

app.use("/api/products", products)

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`))
