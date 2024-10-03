import { BannerStyle } from "./BannerStyle";
import { Container } from "./Container";
import { TextDescription } from "./TextDescription";
import { TitleCorpo } from "./TitleCorpo";

export function Contato() {
  return (
    <Container>
      <BannerStyle height="40vh">
        <TitleCorpo>Contato</TitleCorpo>
        <TextDescription paddingTop="30px">(51) 99799-7621</TextDescription>
      </BannerStyle>
    </Container>
  );
}
