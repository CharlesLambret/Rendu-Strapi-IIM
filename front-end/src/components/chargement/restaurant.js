import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
export default function EtatCreationrestaurant(props) {
  const { erreur } = props;
  const [showErreur, setShowErreur] = useState(false);
    const navigate = useNavigate();
    const navigateListe = () => {
      navigate("/restaurants");
    };
  useEffect(() => {
    if (erreur === true) {
      setShowErreur(true);
    } else {
      setShowErreur(false);
    }
  }, [erreur]);

  return (
    <>
      {showErreur ? (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <span className="couleur-rouge">&#9587;</span>
          <p className="couleur-rouge">Une erreur est survenue pendant la création de votre restaurant.</p>
        </div>
      ) : (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <span className="couleur-bleu">&#10003;</span>
          <p className="couleur-bleu!">Votre restaurant a été créé !</p>
          <button className="btn btn-primary" onClick={navigateListe}>Le voir sur la liste</button>
        </div>
      )}
    </>
  );
}
