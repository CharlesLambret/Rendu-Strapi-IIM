import { useNavigate} from 'react-router-dom';

export default function BlocContenus (props){
    const GoRestaurants = () => { useNavigate('/restaurants')};
    const {h2, texte, className} = props;
    return(
         <div className={`row w-100 ${className}`} >
                <div className="col-md-8">
                    <h2>{h2}</h2>
                    <p className="text-justify">{texte}</p>
                </div>
        </div>
    )
}