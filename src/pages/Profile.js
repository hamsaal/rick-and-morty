import Header from "../components/Header";
import Footer from "../components/Footer";
import useFetch from "../components/useFetch";
import CharacterDetails from "../components/CharacterDetails";

function Profile() {
  return (
    <div>
      <Header />
      <CharacterDetails />
      <Footer />
    </div>
  );
}

export default Profile;
