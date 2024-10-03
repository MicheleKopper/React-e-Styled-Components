import { BannerStyle } from "./BannerStyle";
import { Container } from "./Container";
import { TextDescription } from "./TextDescription";
import { Title } from "./Title";

export function Banner() {
  return (
    <Container>
      <BannerStyle>
        <Title>Transformando ideias em soluções digitais</Title>

        <TextDescription
          textAlign="center"
          paddingLeft="400px"
          paddingRight="400px"
          paddingTop = "30px"
        >
          Olá, sou Michele Kopper, Desenvolvedora Full Stack e Designer, apaixonada
          por criar experiências digitais únicas. <br></br> Do conceito ao código, minha
          missão é transformar projetos funcionais e visualmente impactantes.
        </TextDescription>
      </BannerStyle>
    </Container>
  );
}
