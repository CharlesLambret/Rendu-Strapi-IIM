import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RestaurantCard() {
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:1337/api/restaurants/${id}?populate=*`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer f8e3071f5b26bf36d60fdc669a5806b763c128bfb408391ad1a80b2a57009dd024144eb757504d83598e4338115277f6f2e42333b2f8d258eb34699a18f1bcc97da5e4ee6528cdab2658972ab8785cb380132ad6bd0425b383b31144adc9ea08c3dda1e5e424bc357555e45e81449cad715e80a27536840440c1b1845d8c4811"
      },
    })
      .then((response) => response.json())
      .then((data) => setRestaurant(data.data))
      .catch((error) => setError(error));
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }


  const { attributes } = restaurant;

  return (
    <>
        <div className="w-100 h-100 d-flex align-items-center justify-content-center col-9 col-md-9 mb-9">
          <div className="card h-100" style={{ width: '75%' }}>
            <div className="card-body" style={{ textAlign: 'left' }}>
              <h5 className="card-title couleur-rouge">
                {attributes.Nom || 'Nom du restaurant non disponible'}
              </h5>
              <p>{attributes.Description}</p>
            </div>
            <div className="card-footer fond-bleu" style={{ textAlign: 'left' }}>
              <small className="couleur-blanc ">
                {attributes.Adresse || 'Adresse non disponible'}
              </small>
            </div>
          </div>
        </div>
    </>
  );
}

export default RestaurantCard;
