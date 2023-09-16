import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import useFetch from "../components/useFetch";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
function Home() {
  const { data, isPending, error } = useFetch(
    `https://rickandmortyapi.com/api/character`
  );
  const [inputSearch, setInputSearch] = useState(" ");
  const characters = data ? data.results : null;

  const requiredCharacters = characters
    ? characters.filter((character) => {
        return character.name.toLowerCase().includes(inputSearch.toLowerCase());
      })
    : null;

  return (
    <div>
      <Header />
      {error && <div>{error}</div>}
      {isPending && <div> Loading ... </div>}
      <SearchBar
        value={inputSearch}
        onChange={(event) => {
          setInputSearch(event.target.value);
        }}
      ></SearchBar>
      <Content content={requiredCharacters} />
      <Footer />
    </div>
  );
}

export default Home;
