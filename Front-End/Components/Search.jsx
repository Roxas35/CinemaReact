import React from "react"

export const Search = ({input, setInput, setFilm}) => {
    
        const handleChange = e => {
            setInput(e.target.value)
        }

        const handleSubmit = e => {
            e.preventDefault()
            fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
            .then(res => res.json())
            .then(data => setFilm(data))
            .catch(err => console.log(err))
        }


    return(
        <>
        <div className="barre">
            <input className="recherche" placeholder="Votre Film ?" value={input} onChange={handleChange} />
            <button className="search" onClick={handleSubmit} type="submit">Recherche</button>
        </div>
        </>
    )
}