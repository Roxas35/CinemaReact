import React from "react";
import {useNavigate} from "react-router-dom"

export const SignInUp = () => {

    const navigate = useNavigate()


    const handleClick = e => {
        e.preventDefault()
        navigate('/Connexion')
    }

    const handleClick2 = e => {
        e.preventDefault()
        navigate('/Inscription')
    } 

    const handleClick3 = e => {
        e.preventDefault()
        navigate('/Favori')
    } 

    return(
        <form className="form">
            <label>
                <a href="/Connexion" onClick={handleClick}>Sign In</a>
            </label>
            <br>
            </br>
            <label>
                <a href="/Inscription" onClick={handleClick2}>Sign Up</a>
            </label>
            <br>
            </br>
            <label>
                <a href="/Favori" onClick={handleClick3}>Favori</a>
            </label>
        </form>
    )


}