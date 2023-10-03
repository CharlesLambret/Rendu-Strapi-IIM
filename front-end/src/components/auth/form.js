
import { useState } from "react";
import {useAuthContext} from "../../contexts/Auth/authcontext";

export default function Authform (props){
    const {handleNomChange, handlePrenomChange, handleEmailChange, handlePasswordChange, nom, prenom, email, password} = useAuthContext();
    const{handleSubmit, showInputs} = props;
    const [showInputsSup, setShowInputsSup] = useState(showInputs);
    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-stretch justify-content-center">
            {showInputsSup?(
                 <>
                 <input 
                     type="text"
                     name="Nom"
                     placeholder="Nom"
                     value={nom}
                     onChange={handleNomChange}
                 />
                 <input 
                     type="text"
                     name="Prenom"
                     placeholder="Prenom"
                     value={prenom}
                     onChange={handlePrenomChange}
                 />
             </>
            ) 
           
             : null
            }
            <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            />
            <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            />
            <button className="btn btn-primary" type="submit">Confirmer</button>
      </form>
    )
}