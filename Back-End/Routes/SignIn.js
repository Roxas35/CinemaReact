const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


router.post('/', async (req, res) => {

    try {
        const { Connexion } = require('../Models/Account')

        const result = await Connexion(req.body.Pseudo, crypto.createHash('sha256').update(req.body.PassWord).digest('hex'));
        if(result.length === 0) {
            res.status(404).send('Pas de compte !')
        } else {
            const users = { 
                id: result[0].id,
                Pseudo: result[0].Pseudo,
                PassWord: result[0].PassWord,
            };

            const token = jwt.sign(users, "secretkey");
            res.status(200).send({users, token});
        }

    } catch (err) {
        res.send(err.message)
    }
})

module.exports = router;