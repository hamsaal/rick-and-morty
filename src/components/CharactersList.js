import { Link } from "react-router-dom";

const CharacterList = ({ characters }) => {
  // use the map function to iterate over each character object and then object keys to render data in the table
  return characters.map((character) => (
    <tr key={character.id}>
      <td>
        <img src={character.image} alt={character.name} />
      </td>
      <td>
        {/* Link to character's profile on click */}
        <Link className="character-link" to={`/profile/${character.id}`}>
          {character.name}
        </Link>
      </td>
      <td>{character.species}</td>
      <td>{character.status}</td>
    </tr>
  ));
};

export default CharacterList;
