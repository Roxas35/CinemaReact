import React from "react"
import { SignInUp } from "./SignIn-Up"
import { Film } from "./Film"
import { Search } from "./Search"
import { Favori } from "./Favori"


export const Home = () => {

    const [input, setInput] = React.useState('')
    const [load, setLoad] = React.useState(false)
    const [film, setFilm] = React.useState([])


    return(
        <>
        <h1>Accueil</h1>
        <SignInUp />
        <Search input={input} setInput={setInput} setFilm={setFilm}/>
        {
            load ?
                <h2>Not Found</h2>
                :
                film.map((f, i) => <Film key={i} data={f} />)
        }
        
        </>
    )
}