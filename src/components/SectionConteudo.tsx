import { Container } from "./Container";
import { ImgAvatar } from "./ImgAvatar";
import { SectionCard } from "./SectionCard";
import { SectionText } from "./SectionText";
import { TextDescription } from "./TextDescription";
import { TitleCorpo } from "./TitleCorpo";
import mockupDesign from "../assets/mockupDesign.png";
import mockupDev from "../assets/mockupDev.png";
import mockupSite from '../assets/mockupSite.png'

type SectionType = {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  reverse?: boolean;
};

const sections: SectionType[] = [
  {
    title: "Dev Full Stack",
    description:
      "No desenvolvimento Full Stack, meu trabalho vai além de apenas codificar. Eu crio soluções digitais completas, integrando backend e frontend para oferecer experiências excepcionais aos usuários. Seja uma plataforma complexa ou um site dinâmico, cada linha de código é projetada com eficiência e inovação em mente. Da estrutura de dados à interface do usuário, garanto que todos os aspectos da aplicação se comuniquem perfeitamente, resultando em um produto final robusto, funcional e pronto para crescer junto com seu negócio.",
    iconSrc: mockupDev,
    iconAlt: "alt 01",
    reverse: false,
  },
  {
    title: "Design Gráfico",
    description:
      "Um bom design é mais do que estética — ele cria uma conexão emocional e comunica a essência da sua marca. No meu trabalho de design gráfico, desenvolvo identidades visuais que contam histórias e refletem os valores da sua empresa. Desde a criação de logotipos únicos e reconhecíveis até a produção de materiais de papelaria e branding consistentes, meu foco é transmitir profissionalismo e criatividade, ajudando sua marca a se destacar no mercado e construir uma imagem memorável.",
    iconSrc: mockupDesign,
    iconAlt: "alt 02",
    reverse: true,
  },
  {
    title: "UI/UX Design",
    description:
      "Sites e aplicações devem ser intuitivos, bonitos e funcionais — e é exatamente isso que eu entrego com meu serviço de UI/UX Design. Utilizo as melhores práticas de design centrado no usuário para criar interfaces otimizadas e responsivas, que não apenas atraem visualmente, mas também proporcionam uma experiência de navegação fluida e agradável. Cada projeto é feito sob medida para atender às necessidades específicas do seu público-alvo, garantindo que seu site não só impressione, mas também converta visitantes em clientes satisfeitos.",
    iconSrc: mockupSite,
    iconAlt: "alt 03",
    reverse: false,
  },
];

export function SectionConteudo() {
  return (
    <Container>
      {sections.map((section, index) => (
        <SectionCard key={index} reverse={section.reverse}>
          <SectionText>
            <TitleCorpo textAlign="left" paddingLeft="100px">
              {section.title}
            </TitleCorpo>
            <TextDescription
              textAlign="left"
              paddingTop="30px"
              paddingLeft="100px"
              paddingRight="100px"
            >
              {section.description}
            </TextDescription>
          </SectionText>
          <ImgAvatar src={section.iconSrc} alt={section.iconAlt} />
        </SectionCard>
      ))}
    </Container>
  );
}

// key no .map(): É uma boa prática uma chave única para cada item mapeado, melhora a performance e evita problemas com a renderização no React
