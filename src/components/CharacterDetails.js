import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>CharacterDetails - {id}</h2>
    </div>
  );
};

export default CharacterDetails;
