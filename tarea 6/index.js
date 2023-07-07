const express = require('express')

require('dotenv').config()

const path = require('path')
const cors = require('cors')
const app = express()

console.log(process.env.PORT)

const PORT= process.env.PORT || 5050

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors())

app.get('/example', (req, res, err) => {
  return res.send({
    "Nombre": "Jenny Grajales",
    "Edad": 36,
    "Altura": 1.65,
    "Casada": false,
  })
})

app.set("port", PORT)

app.listen(app.get('port'), () => {
    console.log('[SERVER]: App running on port on http://localhost:', app.get("port"), '/')
})
