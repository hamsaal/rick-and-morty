// Importing necessary components and hooks
import Header from "../components/Header";
import Footer from "../components/Footer";
import CharactersTable from "../components/CharactersTable";
import useFetch from "../components/useFetch";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PageButtons from "../components/PageButtons";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Home() {
  // State Variables for managing page numbers
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [currentPage, setCurrentPage] = useState(1);

  // Functions to Update the Page Number Button Labels upon clicking next and prev button
  const UpdateNextButtons = () => {
    setPageNumbers((currentPageNumbers) =>
      currentPageNumbers.map((page) => page + 5)
    );
  };

  const UpdatePreviousButtons = () => {
    setPageNumbers((currentPageNumbers) =>
      currentPageNumbers.map((page) => page - 5)
    );
  };
  /* using custom hook to fetch data as well as manage the errors and manage if the data is being fetched
   or still being fetched */
  const { data, isPending, error } = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${currentPage}`
  );

  // State variable to store the user's search input
  const [inputSearch, setInputSearch] = useState("");

  // Extracting characters data from the fetched data
  const characters = data ? data.results : null;

  // Function to filter characters based on the search input
  const requiredCharacters = characters
    ? characters.filter((character) => {
        return character.name.toLowerCase().includes(inputSearch.toLowerCase());
      })
    : null;

  return (
    <div>
      <Header />
      <SearchBar
        value={inputSearch}
        onChange={(event) => {
          setInputSearch(event.target.value);
        }}
      ></SearchBar>

      {/* Loading and error component displayed if needed*/}

      {isPending && <Loading />}

      {error && <Error message={error} />}

      <div className="home-buttons-container">
        <PageButtons
          label={`PREV`}
          disabled={pageNumbers[0] === 1}
          onClick={UpdatePreviousButtons}
        ></PageButtons>

        {/* Mapping through the array to create individual page buttons */}
        {pageNumbers.map((pageNumber) => (
          <PageButtons
            key={pageNumber}
            label={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
          ></PageButtons>
        ))}

        <PageButtons
          label={`NEXT`}
          disabled={pageNumbers[6] === 42}
          onClick={UpdateNextButtons}
        ></PageButtons>
      </div>
      <CharactersTable content={requiredCharacters} />

      <Footer />
    </div>
  );
}

export default Home;
