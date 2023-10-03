import Authform from "./form.js";
import { useAuthContext } from "../../contexts/Auth/authcontext.js";
import LoadingMessage from "../chargement/loadingmessage.js";
import Loader from "../chargement/loader.js";
import EtatConnexion from "../chargement/connexion.js";
import { useState } from "react";

export default function AuthPopin (){
    const {email ,password, setUser  } = useAuthContext();
    const [erreur, setErreur] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showEtatConnexion, setShowEtatConnexion] = useState(false);

    
    const handleSubmit = async (event) => {
        event.preventDefault();
       
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:1337/api/auth/local`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer f8e3071f5b26bf36d60fdc669a5806b763c128bfb408391ad1a80b2a57009dd024144eb757504d83598e4338115277f6f2e42333b2f8d258eb34699a18f1bcc97da5e4ee6528cdab2658972ab8785cb380132ad6bd0425b383b31144adc9ea08c3dda1e5e424bc357555e45e81449cad715e80a27536840440c1b1845d8c4811",
            },
            body: JSON.stringify({
              password: password,
              identifier: email,
            }),
          });
      
          const data = await response.json();
      
          if (data.error) {
            setLoading(false);
            setShowEtatConnexion(true);
            setErreur(true);
            throw data.error;
            
          } else {
          setLoading(false);
          setUser(data.user);
          setShowEtatConnexion(true);
          setErreur(false);
          

          }
        } catch (error) {
         
        }
      };
    return(
        <div class="modal"  id="loginModal" tabindex="-1" aria-labelledby="loginModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Connexion</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                {!loading && !showEtatConnexion && (
              <Authform handleSubmit={handleSubmit} showInputs={false} />
            )}
                </div>
                {loading && !showEtatConnexion && (<LoadingMessage message="Connexion en cours..."/>)}
                {!loading && showEtatConnexion && (<EtatConnexion erreur ={erreur} />)}
              
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
                </div>
            </div>
        </div>
    )
}