import { useState } from "react";
import RestaurantForm from "../form"
import EtatCreationrestaurant from "../../chargement/restaurant";
import LoadingMessage from "../../chargement/loadingmessage";

export default function FormCreateRestaurant (){
   
    const [nom, setNom] = useState(null);
    const [description, setDescription] = useState(null);
    const [adresse, setAdresse] = useState(null);
    const [erreur, setErreur] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showCreation, setshowCreation] = useState(false);

    const handleNomChange = (event) => {
      setNom(event.target.value);
     
    };
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
     
    };
  
    const handleAdresseChange = (event) => {
      setAdresse(event.target.value);
    
    };
  
    // const handlePhotoChange = (event) => {
    //   setPhoto(event.target.files[0]);
    //   console.log(photo)
    // };
  
  function PostRestaurant(event) {
    setLoading(true);
    event.preventDefault();
    fetch("http://localhost:1337/api/restaurants", {
      
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Authorization": "Bearer f8e3071f5b26bf36d60fdc669a5806b763c128bfb408391ad1a80b2a57009dd024144eb757504d83598e4338115277f6f2e42333b2f8d258eb34699a18f1bcc97da5e4ee6528cdab2658972ab8785cb380132ad6bd0425b383b31144adc9ea08c3dda1e5e424bc357555e45e81449cad715e80a27536840440c1b1845d8c4811",
      },
      body: JSON.stringify({
        data:{
          Nom: nom,
          Description: description,
          Adresse: adresse,
        }
      }),
      
    })
      .then((response) => {
   
      return response.json();
    })
    .then((data) => {
      setLoading(false);
      setshowCreation(true);
      setErreur(false);
    })
    .catch((error) => {
      setLoading(false);
      setshowCreation(true);
      setErreur(true);
    });
  }

    return(
        <>
        {!loading && !showCreation &&(
            <RestaurantForm 
            handleSubmit= {PostRestaurant}
            inputNomvalue= {nom}
            inputNomonChange= {handleNomChange}
            inputDescriptionvalue= {description}
            inputDescriptiononChange= {handleDescriptionChange}
            inputAdressevalue= {adresse}
            inputAdresseonChange= {handleAdresseChange}
        />
        )}
          {loading && !showCreation &&(
            <LoadingMessage message='Création de votre restaurant...'/>
          )}
          {!loading && showCreation &&(
            <EtatCreationrestaurant erreur={erreur}/>
          )
}
        </>
    )
    
}
