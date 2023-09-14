const CharacterList = ({ characters }) => {
  return characters.map((character) => (
    <tr key={character.id}>
      <td>
        <img src={character.image} alt={character.name} />
      </td>
      <td>{character.name}</td>
      <td>{character.species}</td>
      <td>{character.status}</td>
    </tr>
  ));
};

export default CharacterList;
