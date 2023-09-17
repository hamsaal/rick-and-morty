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
  const { data, isPending, error } = useFetch(
    `https://rickandmortyapi.com/api/character`
  );
  const [inputSearch, setInputSearch] = useState("");
  const characters = data ? data.results : null;

  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5, 6, 7]);

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
      {isPending && <Loading />}
      {error && <Error message={error} />}
      <CharactersTable content={requiredCharacters} />

      <PageButtons
        label={`<<<<`}
        disabled={pageNumbers[0] === 1}
        onClick={UpdatePreviousButtons}
      ></PageButtons>

      {pageNumbers.map((pageNumber) => (
        <PageButtons label={pageNumber}></PageButtons>
      ))}

      <PageButtons
        label={`>>>>`}
        disabled={pageNumbers[6] === 42}
        onClick={UpdateNextButtons}
      ></PageButtons>

      <Footer />
    </div>
  );
}

export default Home;
