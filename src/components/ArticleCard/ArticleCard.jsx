import { NavLink } from "react-router-dom";
import style from "./ArticleCard.module.scss";

export const ArticleCard = ({
  headline,
  text,
  date,
  author,
  imgUrl,
  imgAlt,
  id,
}) => {
  return (
    <div className={style.articleCard}>
      <h2>{headline}</h2>
      <p>{text.substring(0, 120) + "...."}</p>
      <p>
        {date} - {author}
      </p>
      <NavLink to={`/details/` + id}>Læs mere</NavLink>
      <img src={imgUrl} alt={imgAlt}></img>
    </div>
  );
};
