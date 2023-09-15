import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import useFetch from "../components/useFetch";

function Home() {
  const {
    data: characters,
    isPending,
    error,
  } = useFetch(`https://rickandmortyapi.com/api/character`);
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
