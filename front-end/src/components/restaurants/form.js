

export default function Restaurantform (props){
  const{handleSubmit, inputNomvalue,inputNomonChange,inputDescriptionvalue, inputDescriptiononChange, inputphotovalue, inputphotoonChange, inputAdressevalue, inputAdresseonChange} = props;
  return (
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-stretch container justify-content-center">
        <h1>Créer un restaurant</h1>
          <input
          type="text"
          name="Nom"
          placeholder="Nom"
          value={inputNomvalue}
          onChange={inputNomonChange}
          />
          <input
          type="text"
          name="Description"
          placeholder="Description"
          value={inputDescriptionvalue}
          onChange={inputDescriptiononChange}
          />
        
          <input
          type="text"
          name="Adresse"
          placeholder="Adresse"
          value={inputAdressevalue}
          onChange={inputAdresseonChange}
          />
          <button className="btn btn-primary" type="submit">Confirmer</button>
    </form>
  )
}