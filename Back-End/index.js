require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

const Connexion = require('../Back-End/Routes/SignIn');
const Inscription = require('../Back-End/Routes/SignUp');
const getAccount = require('../Back-End/Routes/Account');
const Favori = require('../Back-End/Routes/Favori')

app.use('/Connexion', Connexion)
app.use('/Inscription', Inscription)
app.use('/', getAccount)
app.use('/Favori', Favori)


app.listen(port , () => {console.log(`Server app listening on port ` + port)})