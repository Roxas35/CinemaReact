import React from "react"
import { useParams } from "react-router-dom"

export const Detail = () => {

    const [act, setAct] = React.useState({})
    const { id } = useParams()

    const token = localStorage.getItem('jwt');
    const Users = JSON.parse(localStorage.getItem('users'))

    const UsersId = Users.id;
    const showId = act.id;


    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
        .then(res => res.json())
        .then(data => setAct(data))
        .catch(err => console.log(err))
    }, [])

    const handleFavori = (e) => {
        e.preventDefault()
        fetch(`http://localhost:4000/Favori`, {
            method: 'POST',
            headers: {'Content-Type':'application/json', 'x-auth-token' : token},
            body: JSON.stringify({showId, UsersId}),
        })
        .then(res => res.json())
        try {
            alert(`${act.name} a été rajouté à vos favoris !`)
        } catch(err) {
            alert(err.message)
        }
    }


    return(
        <>
        <button onClick={handleFavori}>Favori</button>
        <p>{act.summary}</p>
        {
        act._embedded?.cast.map((a) =>
            
        <div>
            <p>{a.person?.name}</p>
            <img src={a.person.image?.medium}></img>
        </div>
        )
    }
        </>
    )
}