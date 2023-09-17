import Table from "./Table";
function CharactersTable({ content }) {
  return (
    <div className="table-container">
      {/* Render table components with predefined table heading and content passed as prop */}
      <Table
        tableHeading1="Avatar"
        tableHeading2="Name"
        tableHeading3="Specie"
        tableHeading4="Status"
        tableContent={content}
      />
    </div>
  );
}

export default CharactersTable;
