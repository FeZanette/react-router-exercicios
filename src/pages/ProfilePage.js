import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProfilePage() {

  const {name, id} = useParams()

  return (
    <section>
      <Header/>
      <h1>Página de {name}</h1>
      <h3> O id de {name} é {id} </h3>
    </section>
  );
}

export default ProfilePage;
