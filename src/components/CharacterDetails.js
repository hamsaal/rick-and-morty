import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const CharacterDetails = () => {
  const { id } = useParams();
  const {
    data: character,
    isPending,
    error,
  } = useFetch(`https://rickandmortyapi.com/api/character/${id}`);
  return (
    <div>
      <h2 className="character-details ">Character Details</h2>
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {character && (
        <div className="character-details-box">
          <img
            className="character-image"
            src={character.image}
            alt={character.name}
          />
          <h2 className="character-details ">{character.name}</h2>
          <p className="character-details ">{character.specie}</p>
          <p className="character-details ">{character.status}</p>
          <p className="character-details ">{character.gender}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
