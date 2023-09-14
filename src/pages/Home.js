import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCharacters(data.results);
      });
  }, []);

  return (
    <div>
      <Header />
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Specie</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {characters &&
            characters.map((character) => (
              <tr key={character.id}>
                <td>
                  <img src={character.image} alt={character.name} />
                </td>
                <td>{character.name}</td>
                <td>{character.species}</td>
                <td>{character.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Home;
