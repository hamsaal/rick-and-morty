import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

function Home() {
  const [characters, setCharacters] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((res) => {
          if (res.ok) return res.json();
          else {
            throw Error(`could not fetch the data from the resource provided`);
          }
        })
        .then((data) => {
          setPending(false);
          setCharacters(data.results);
          setError(null);
        })
        .catch((err) => {
          setPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div>
      <Header />
      {error && <div>{error}</div>}
      {isPending && <div> Loading ... </div>}
      <Content content={characters} />
      <Footer />
    </div>
  );
}

export default Home;
