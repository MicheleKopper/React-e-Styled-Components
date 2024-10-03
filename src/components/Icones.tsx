import dev from "../assets/dev.png";
import design from "../assets/design.png";
import site from "../assets/site.png";
import { Container } from "./Container";
import { Card } from "./Card";
import { IconesAvatar } from "./IconesAvatar";
import { TitleCorpo } from "./TitleCorpo";
import { TextDescription } from "./TextDescription";

type IconesConteudo = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
};

const iconesConteudo: IconesConteudo[] = [
  {
    iconSrc: dev,
    iconAlt: "Dev Full Stack",
    title: "Dev Full Stack",
    description: "Criação de aplicações web completas, do backend ao frontend",
  },
  {
    iconSrc: design,
    iconAlt: "Design Gráfico",
    title: "Design Gráfico",
    description: "Logotipos, papelaria e branding que representam sua marca",
  },
  {
    iconSrc: site,
    iconAlt: "UI/UX Design",
    title: "UI/UX Design",
    description: "Sites otimizados, modernos e responsivos, feitos sob medida",
  },
];

export function Icones() {
  return (
    <Container backgroundColor="#f9f9f9" flexDirection = "row" paddingLeft = "90px" paddingRight = "90px">
      {iconesConteudo.map((card) => (
        <Card>
          <IconesAvatar src={card.iconSrc} alt={card.iconAlt} />
          <TitleCorpo>{card.title}</TitleCorpo>
          <TextDescription>{card.description}</TextDescription>
        </Card>
      ))}
    </Container>
  );
}
