const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.post('/', async(req, res) => {
    try {
        const { Inscription } = require('../models/Account')

        await Inscription({
            "FirstName" : req.body.FirstName,
            "LastName" : req.body.LastName,
            "Pseudo": req.body.Pseudo,
            "Email": req.body.Email,
            "PassWord": crypto.createHash('sha256').update(req.body.PassWord).digest('hex'),
            
        })
        res.send('Compte Crée !') 
            } catch(err) {
                console.log(err.message); 
        }
    })


module.exports = router