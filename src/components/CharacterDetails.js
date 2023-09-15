import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

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
          <h2 className="character-details ">Name:{character.name}</h2>
          <p className="character-details ">Specie:{character.species}</p>
          <p className="character-details ">Status:{character.status}</p>
          <p className="character-details ">Gender:{character.gender}</p>
          <Link to="/">
            <Button
              style={{
                backgroundColor: "yellow",
                textColor: "white",
                color: "black",
              }}
              variant="outlined"
              startIcon={<ArrowBackIosIcon style={{ color: "black" }} />}
            >
              Back
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
