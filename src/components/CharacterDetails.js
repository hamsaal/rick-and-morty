import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { ReactComponent as BackButton } from "../assets/arrow-left-solid.svg";

const CharacterDetails = () => {
  const { id } = useParams();
  const {
    data: character,
    isPending,
    error,
  } = useFetch(`https://rickandmortyapi.com/api/character/${id}`);
  return (
    <div>
      <h2 className="character-details ">Character Profile</h2>
      {isPending && (
        <div style={{ color: "black", fontSize: "20px", textAlign: "center" }}>
          Loading ...
        </div>
      )}
      {error && (
        <div style={{ color: "red", fontSize: "20px", textAlign: "center" }}>
          {error}
        </div>
      )}
      {character && (
        <div className="character-details-box">
          <img
            className="character-image"
            src={character.image}
            alt={character.name}
          />
          <p className="character-details ">
            <span className="details">Name: </span>
            {character.name}
          </p>
          <p className="character-details ">
            <span className="details">Specie: </span>
            {character.species}
          </p>
          <p className="character-details ">
            <span className="details">Status: </span>
            {character.status}
          </p>
          <p className="character-details ">
            <span className="details">Gender: </span>
            {character.gender}
          </p>
          <div className="button-container">
            <Link to="/" className="back-button">
              <BackButton className="back-button-icon" />
              <span className="back-button-text">Go Back</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
