const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res) => {
    const { getAccount } = require('../models/account');

    const user = await getAccount(req.params.id);

    res.status(200).send(user);
})

module.exports = router;