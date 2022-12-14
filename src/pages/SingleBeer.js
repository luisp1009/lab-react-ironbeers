import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import NavHome from "../components/NavHome";
import { useParams } from "react-router-dom";

const SingleBeer = () => {
  let { id } = useParams();
  const [oneBeer, setOneBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((axiosResponse) => {
        setOneBeer(axiosResponse.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <NavHome />
      <h1 className="title">Single Beer: </h1>
      {oneBeer ? (
        <div key={oneBeer._id} className="oneBeer">
          <img className="imageBeer" src={oneBeer.image_url} alt="beerpic" />

          <div className="beerFirstLine">
          <h4 className="beerName">{oneBeer.name}</h4>
          <h5 className="beerAttenuation">{oneBeer.attenuation_level}</h5>
          
          </div>


          <div className="beerSecondLine">
          <p className="beerTagline">{oneBeer.tagline}</p>
          <p className="beerBrewed">{oneBeer.first_brewed}</p>
</div>

          
          <p className="beerDescription">{oneBeer.description}</p>
          <p className="beerContributed">{oneBeer.contributed_by}</p>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default SingleBeer;
