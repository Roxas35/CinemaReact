const db = require('./ClientDB')

const AddFarovi = async (content) => {
    return await db('users').select(content)
}

const getFavori = async (userID) => {

    const res = await db('users').where('id', '=', userID);

    return res
}

const deleteFavori = async (id) => {

    const res = await db('users').where(id);

    return res
}