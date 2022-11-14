import React from "react"
import { useNavigate } from "react-router";

export const Inscription = () => {

    const navigate = useNavigate();



    const [LastName, setLastname] = React.useState("");
    const [FirstName, setFirstname] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [PassWord, setPassword] = React.useState("");
    const [Pseudo, setPseudo] = React.useState("");

    const [show, setShow] = React.useState(false)
    const [active, isActive] = React.useState('');

    

    const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/Inscription", {
      method: "POST",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ FirstName, LastName, Pseudo, Email, PassWord }),
    }).then((res) => console.log(res));

    try {
      alert("Compte créé ! Vous allez être redirigé vers la page d'accueil. Connectez vous pour accédez à votre compte.");

      navigate('/');
    } catch(err) {
      alert(err.message);
    }
}

  return(  
    <form className="box_form" id="Form" onSubmit={handleSubmit}>
        <h1>Inscription</h1>
    <div className="box_for_top_input">
    <div className="left-c">
      <div className="box_name">
        <label htmlFor="LastName" className="label_for_association">
          Nom
        </label>
        <input type="text" id="Name" className="input_for_name" onChange={(e) => setLastname(e.target.value)}></input>
      </div>
      <div className="box_firstname">
        <label htmlFor="Firstname" className="label_for_firstname">
          Prénom
        </label>
        <input
          type="text"
          id="Firstame"
          className="input_for_firstname"
          onChange={(e) => setFirstname(e.target.value)}
        ></input>
      </div>
      <div className="box_pseudo">
        <label htmlFor="Pseudo" className="label_for_pseudo">
          Pseudo
        </label>
        <input
          type="text"
          id="Pseudo"
          className="input_for_pseudo"
          onChange={(e) => setPseudo(e.target.value)}
        ></input>
      </div>
      <div className="other-inputs">
        <div className="box_for_email">
          <label htmlFor="Email" className="label_for_email">
            Adresse mail
          </label>
          <input type="text" id="Email" className="input_for_email" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="box_for_first_password">
          <label htmlFor="PassWord" className="label_for_password">
            Mot de passe
          </label>
          <input
            type="password"
            id="Password"
            className="input_for_password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="box_for_confirm_password">
          <label
            htmlFor="ConfirmPassword"
            className="label_for_confirm_password"
          >
            Confirmer le mot de passe
          </label>
          <input
            type="password"
            id="ConfirmPassword"
            className="input_for_corfirm_password"
          ></input>
        </div>
      </div>
    </div>
    <button form="Form" className={"btn_inscription"+active} type="submit">S'inscrire</button>
  </div>
  </form>
  )
}