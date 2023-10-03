import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';

export default function HeroPart (props){
    const navigate= useNavigate();
    const GoRestaurants = () => { navigate('/restaurants')};
    const {h1, texte, texte_bouton, showcontenu, couleurfond } = props;

    const [montrercontenus, setMontrerBouton] = useState(false)
    useEffect(() => {
        if (showcontenu===true){
            setMontrerBouton(true)
        }
    }, [])

    return(
     
                <div className={`col-md-8 px-1 w-100 pt-3 pb-3 ${couleurfond}`}>
                    <h1 className="couleur-blanc">{h1}</h1>
                    {montrercontenus ? <><p className="couleur-blanc">{texte}</p>  <button className="btn btn-dark" onClick={GoRestaurants}>{texte_bouton}</button></> : null}
                  
                </div>
          
    )
}