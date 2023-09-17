// Importing Character List to display the list of characters
import CharacterList from "./CharactersList";

function Table({
  tableHeading1,
  tableHeading2,
  tableHeading3,
  tableHeading4,
  tableContent,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>{tableHeading1}</th>
          <th>{tableHeading2}</th>
          <th>{tableHeading3}</th>
          <th>{tableHeading4}</th>
        </tr>
      </thead>
      <tbody>
        {/* // Render table body which also includes the CharacterList component  */}
        {tableContent && <CharacterList characters={tableContent} />}
      </tbody>
    </table>
  );
}

export default Table;
