import { Link } from "react-router-dom";

const CharacterList = ({ characters }) => {
  return characters.map((character) => (
    <Link className="character-link" to={`/profile/${character.id}`}>
      <tr key={character.id}>
        <td>
          <img src={character.image} alt={character.name} />
        </td>
        <td>{character.name}</td>
        <td>{character.species}</td>
        <td>{character.status}</td>
      </tr>
    </Link>
  ));
};

export default CharacterList;
