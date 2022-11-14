import React from "react"
import { Link, useNavigate } from "react-router-dom";

export const Connexion = (props) => {

    const navigate = useNavigate()

    const [Pseudo, setPseudo] = React.useState("");
    const [PassWord, setPassword] = React.useState("");

    const setMe = props.setMe
    const form = props.form
    const isActive = props.isActive;
    const setCheck = props.setCheck;
    const check = props.check;
    const setConnected = props.setConnected;
    
    const handleCreate = () => {
        if (check) {
            setCheck(false);
            isActive('');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (check) {
            setCheck(false);
            isActive('');
        }

        fetch("http://localhost:4000/Connexion", {
          method: "POST",
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({ Pseudo, PassWord }),
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('jwt', data.token)
            localStorage.setItem('users', JSON.stringify(data.users));
            Object.keys(data.users).map(users => {
                console.log(users, ':',data.users[users])
            })
            setConnected(true);
            setMe(data.users);
            navigate('/')
        })
        try {
            alert('Connecté ! Vous allez être redirigé vers la page d\'accueil.')
            navigate('/')
        } catch(err) {
            alert(err.message)
        }
      };

    return(
        <form id='connection' className="connection" ref={form} onSubmit={handleSubmit}>
            <h1>Connexion</h1>
            <div className="inputs">
                <div className="col">
                    <div className='Pseudo'>
                        <label htmlFor="Pseudo">Pseudo</label>
                        <input type="text" name="Pseudo" id="Pseudo" onChange={(e) => setPseudo(e.target.value)}/>
                    </div>
                    <div className='password'>
                        <label htmlFor="PassWord">Mot de passe</label>
                        <input type="password" name="PassWord" id="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="switch-check">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider"></span>
                    </label>
                    <p>Restez connecté ?</p>
                </div>
            </div>
            <button type="submit" className='connect-btn' onClick={handleSubmit}>Connexion</button>
            <div className='inscription' >
                <Link to='/inscription' onClick={handleCreate}>Vous n'avez pas encore de compte ? <br/> Cliquez ici pour vous inscrire.</Link>
            </div>
        </form>
    )
}