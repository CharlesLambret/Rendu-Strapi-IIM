import { useEffect, useState } from "react";

export default function EtatConnexion(props) {
  const { erreur } = props;
  const [showErreur, setShowErreur] = useState(false);

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
          <p className="couleur-rouge">Erreur dans la rentrée des identifiants</p>
        </div>
      ) : (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <span className="couleur-bleu">&#10003;</span>
          <p className="couleur-bleu">Connexion validée !</p>
        </div>
      )}
    </>
  );
}
