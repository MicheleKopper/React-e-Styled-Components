import { Banner } from "../components/Banner";
import { Contato } from "../components/Contato";
import { Icones } from "../components/Icones";
import { Rodape } from "../components/Rodape";
import { SectionConteudo } from "../components/SectionConteudo";


function Home() {
  return (
    <>
      <Banner />

      <Icones />

      <SectionConteudo />

      <Contato />

      <Rodape />
    </>
  );
}

export default Home;
