import "./Intship.css";
import Heart from "./Heart/Heart";
import { Link } from "react-router-dom";

export default function Intship({ id, isFavorite, company, title, format, salary, info, skills, link, onFavoriteChange }) {
  return(
    <>
      <div className="intship">
        <div className="intshipHeader">
          <p className="header--company">{company}</p>
          <Heart
            intshipID={id}
            isLiked={isFavorite}
            toggleHeart={onFavoriteChange}
          />
        </div>
        <p className="intshipTitle">{title}</p>
        <div className="extra">
          <p className="intshipExtra">{format}</p>
          <p className="intshipExtra">{salary}</p>
        </div>
        <p className="intshipText">{info}</p>
        <div className="intshipSkillsContainer">
          <p className="intshipText">Навыки:</p>
          <p className="intshipText skills">{skills}</p>
        </div>
        <Link to={link} className="intshipLink">
          <p className="intshipText more">Подробнее</p>
        </Link>
      </div>
    </>
  );
}
