import React from "react"

export const Favori = (show) => {

    const [fav, setFav] = React.useState([])

    const token = localStorage.getItem('jwt');
    const Users = JSON.parse(localStorage.getItem('users'))

    const UsersId = Users.id;

    React.useEffect(() => {
        fetch(`http://localhost:4000/Favori/${UsersId}`, {
            method: 'GET',
            headers: {'x-auth-token' : token},
        })
        .then(res => res.json())
        .then(data => setFav(data))
        .catch(e => console.log(e))
    }, [])

    return(
        <>
            <div>
                <h1>Favori</h1>
                {
                        fav.map(a => 
                            <a href={show.id}><img src={show.image.medium} /></a>
                        )
                }
            </div>
        </>
    )
}