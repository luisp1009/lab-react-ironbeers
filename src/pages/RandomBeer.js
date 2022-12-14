import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NavHome from "../components/NavHome";

function RandomBeer() {
  let { beerId } = useParams();
  console.log(beerId);

  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((axiosresponse) => {
        setBeer(axiosresponse.data);
      })
      .catch((err) => console.log(err));
  }, [beerId]);

  return (
    <div>
      <NavHome />
      <h1 className="title">Random Beer</h1>
      {beer ? (
        <div className="oneBeer">
          <img src={beer.image_url} alt="Beers" className="imageBeer" />

        <div className="beerFirstLine">
          <h4 className="beerName">{beer.name}</h4>
          <h5 className="beerAttenuation">{beer.attenuation_level}</h5>
          
          </div>

 <div className="beerSecondLine">
          <p className="beerTagline">{beer.tagline}</p>
          <p className="beerBrewed">{beer.first_brewed}</p>
</div>
          <p className="beerDescription">{beer.description}</p>
          <p className="beerContributed">{beer.contributed_by}</p>
        </div>
      ) : (
        <p>loading ...</p>
      )}
    </div>
  );
}

export default RandomBeer;
