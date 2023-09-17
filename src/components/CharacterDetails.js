import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { ReactComponent as BackButton } from "../assets/arrow-left-solid.svg";
import Error from "./Error";
import Loading from "./Loading";

const CharacterDetails = () => {
  // grab the character id so that request can be made to api end point for the character's profile
  const { id } = useParams();
  /* using custom hook to fetch character data as well as manage the errors and manage if the data is being fetched
   or still being fetched */
  const {
    data: character,
    isPending,
    error,
  } = useFetch(`https://rickandmortyapi.com/api/character/${id}`);
  return (
    <div>
      <h2 className="character-details ">Character Profile</h2>
      {isPending && <Loading />}
      {error && <Error message={error} />}
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
            {/* Back button to go back to home page  */}
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
