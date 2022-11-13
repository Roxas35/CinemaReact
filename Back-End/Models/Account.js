const db = require('./ClientDB')

const Inscription = async infos => {
    return await db('users').insert(infos);
}


const Connexion = async (Pseudo, PassWord) => {
    return await db('users').where({
        Pseudo: Pseudo,
        PassWord: PassWord
    }).select()
}

const getAccount = async (userID) => {

    const res = await db('users').where('id', '=', userID);

    return res
}

module.exports = {
    Connexion,
    Inscription,
    getAccount
}