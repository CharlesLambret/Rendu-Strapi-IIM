import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoadingContext } from '../../../contexts/loading/loadingcontext';
import LoadingMessage from '../../chargement/loadingmessage';
function RepeatingRestaurantCard () {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useContext(LoadingContext); 
  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:1337/api/restaurants?populate=*", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer f8e3071f5b26bf36d60fdc669a5806b763c128bfb408391ad1a80b2a57009dd024144eb757504d83598e4338115277f6f2e42333b2f8d258eb34699a18f1bcc97da5e4ee6528cdab2658972ab8785cb380132ad6bd0425b383b31144adc9ea08c3dda1e5e424bc357555e45e81449cad715e80a27536840440c1b1845d8c4811"
        },
      })
        .then((response) => response.json())

        .then((data) => {
          setRestaurants(data.data);
          setLoading(false)
        })
        
        .catch((error) => setError(error))
  }, []);

  
  return (
    <div className="container">
      {loading ? (
                <LoadingMessage message ='Chargement de la page' />
              ) : (
                <div className="row">
                      {restaurants.map(({id, attributes}) => (
                      <div key={id} className=" col-12 col-md-4 col-lg-4 mb-4 m-top-1 ">
                        <div className="card h-100" style={{ width: '75%' }}>
                          {/* <img
                            src={attributes.Photo.data.attributes.url || 'https://via.placeholder.com/150'}
                            className="card-img-top"
                            alt={attributes.Nom || 'Image indisponible'}
                          /> */}
                          <div className="card-body" style={{ textAlign: 'left' }}>
                            <h5 className="card-title couleur-rouge">
                              {attributes.Nom || 'Nom du restaurant non disponible'}
                            </h5>
                            <p className="card-text">{attributes.Description || 'Description non disponible'}</p>
                            <p>  {attributes.Adresse || 'Adresse non disponible'} </p>
                          </div>
                          <div className="card-footer fond-bleu" style={{ textAlign: 'left' }}>
                            <Link to={`/restaurant-details/${id}` }className="couleur-blanc" >Voir plus</Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                </div>
                )
              }
    

export default RepeatingRestaurantCard;
