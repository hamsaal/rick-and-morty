import { Link } from "react-router-dom";

const CharacterList = ({ characters }) => {
  return characters.map((character) => (
    <tr key={character.id}>
      <td>
        <img src={character.image} alt={character.name} />
      </td>
      <td>
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
