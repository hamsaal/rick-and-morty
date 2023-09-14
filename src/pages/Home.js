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
        setCharacters(data);
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
          <tr>
            <td>
              <td>
                <td>
                  <td></td>
                </td>
              </td>
            </td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Home;
