import Table from "./Table";
function Content({ content }) {
  return (
    <>
      <Table
        tableHeading1="Avatar"
        tableHeading2="Name"
        tableHeading3="Specie"
        tableHeading4="Status"
        tableContent={content}
      />
    </>
  );
}

export default Content;
