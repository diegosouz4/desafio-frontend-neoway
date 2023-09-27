import formattedText from "../../util/formattedText";
import style from "./Card.module.scss";
import PropTypes from "prop-types";
import PostInfo from "../PostInfo/PostInfo";
import { Link } from "react-router-dom";
import { SetLocalStore } from "../../hooks/useLocalStore";

export default function Card({ noticia }) {
  const title = formattedText(noticia?.title);

  const handleClick = () => {
    SetLocalStore("post", noticia);
  };

  return (
    <li className={style.card}>
      <Link
        className={style.wrapper}
        to={`/noticia/${noticia.title}`}
        onClick={handleClick}
      >
        <div
          className={style.thumb}
          style={{ backgroundImage: `url(${noticia?.urlToImage})` }}
        ></div>
        <div className={style.content}>
          <h2 className={style.title}>{title}</h2>

          <PostInfo
            publishedAt={noticia?.publishedAt}
            author={noticia?.author}
            className={style.info}
          />
        </div>
      </Link>
    </li>
  );
}

Card.propTypes = {
  noticia: PropTypes.object.isRequired,
};
