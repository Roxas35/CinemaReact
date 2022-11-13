const express = require('express');
const router = express.Router();
const token = require('../middleware/token');
const Favori = require('../Models/Favori');

router.get(':/UsersId', [token], async (req, res) => {
    const UsersId = req.params.UsersId;
    const Favori = await Favori.getFavori(UsersId)
    res.send(Favori)
})

router.post('/', [token], async (req, res) => {
    try {
        await Favori.AddFavori({
            "showId": req.body.showId,
            "UsersId": req.Users.id
        });
    } catch(err) {
        console.log(err.message);
    }
});

router.delete('/:id', [token], async (req, res) => {
    try {
        await Favori.deleteFavori(req.params.id);
    } catch(err) {
        console.log(err.message);
    }
})

module.exports = router