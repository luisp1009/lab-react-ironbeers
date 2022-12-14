import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavHome from "../components/NavHome";

function NewBeer() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const updateState = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: state.name,
        tagline: state.tagline,
        description: state.description,
        first_brewed: state.first_brewed,
        brewers_tips: state.brewers_tips,
        attenuation_level: Number(state.attenuation_level),
        contributed_by: state.contributed_by,
      })
      .then((axiosResponse) => {
        console.log(axiosResponse.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
    <NavHome />
    
    <div className="newBeerInfo">
    
    
    
      <form onSubmit={handleSubmit}>
        <br></br>
        <div>
        <h3>Add New Beer</h3>
        <label>Name:</label>
        <br></br>
        <input name="name" value={state.name} onChange={updateState} />
        </div>
        <br></br>
        <div>
        <label>Tagline:</label>
        <br></br>
        <input name="tagline" value={state.tagline} onChange={updateState} />
        </div>
        <br></br>
        <div>
        <label>Description:</label>
        <br></br>
        <textarea rows="10" cols="48"
          name="description"
          value={state.description}
          onChange={updateState}
        />
        </div>
        <br></br>
        <div>
        <label>First Brewed:</label>
        <br></br>
        <input
          name="first_brewed"
          value={state.first_brewed}
          onChange={updateState}
        />
        </div>
        <br></br>
        <div>
        <label>Brewer Tips:</label>
        <br></br>
        <input
          name="brewers_tips"
          value={state.brewers_tips}
          onChange={updateState}
        />
        </div>
        <br></br>
        <div>
        <label>Attenuation Level:</label>
        <br></br>
        <input
          name="attenuation_level"
          value={state.attenuation_level}
          onChange={updateState}
        />
        </div>
        <br></br>
        <div>
        <label>Contributed by:</label>
        <br></br>
        <input
          name="contributed_by"
          value={state.contributed_by}
          onChange={updateState}
        /></div>
        <br></br>
        <button className="newBeer">ADD NEW</button>
      </form>
    </div>
    </div>
  );
}

export default NewBeer;