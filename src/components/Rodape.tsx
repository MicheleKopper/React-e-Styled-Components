import { RodapeStyle } from "./RodapeStyle";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

const links = [
  { img: facebook, alt: "Facebook", to: "https://pt-br.facebook.com/" },
  { img: instagram, alt: "Instagram", to: "https://www.instagram.com/" },
  { img: linkedin, alt: "Linkedin", to: "https://www.linkedin.com/" },
];


export function Rodape() {
  return (
    <RodapeStyle>
      <div className="text-container">
        <p> About &bull; Contact &bull; Terms of Use &bull; Privacy Policy</p>
        <p>Criado por Michele Kopper - 2024</p>
      </div>

      <nav>
        {links.map((link) => {
          return (
            <Link to={link.to} target="_blank">
              <img src={link.img} alt={link.alt} />
            </Link>
          );
        })}
      </nav>
    </RodapeStyle>
  );
}
