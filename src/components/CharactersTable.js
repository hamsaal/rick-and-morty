import Table from "./Table";
function CharactersTable({ content }) {
  return (
    <div className="table-container">
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
