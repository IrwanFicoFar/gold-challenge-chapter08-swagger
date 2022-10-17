const express = require('express')
const app = express()
const cors = require("cors");


const swaggerJSON = require('../apiSwagger/swagger.json')
const swaggerUI = require('swagger-ui-express')

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON))

app.get('/home', (req, res) => {
    res.send('im home')
})

app.listen(8081, () => {
    console.log(' running at port 8081')
})