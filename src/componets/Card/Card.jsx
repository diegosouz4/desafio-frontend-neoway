import formattedText from "../../util/formattedText";
import style from "./Card.module.scss";
import PropTypes from "prop-types";
import PostInfo from "../PostInfo/PostInfo";
import { Link } from "react-router-dom";
import { SetLocalStore } from "../../hooks/useLocalStore";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addLikesItem } from "../../redux/noticias/noticias";

export default function Card({ noticia }) {
  const title = formattedText(noticia?.title);
  const dispatch = useDispatch();

  const handleClick = () => {
    SetLocalStore("post", noticia);
  };

  const handleLikesClick = (e) => {
    e.preventDefault();
    dispatch(addLikesItem(noticia));
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

        <button className={style.likes} onClick={handleLikesClick}>
          {noticia.likes ? (
            <>
              {" "}
              <span className="sronly"> remover dos favorito</span>
              <FaHeart className={style.icon} />
            </>
          ) : (
            <>
              {" "}
              <span className="sronly">salvar nos favorito</span>
              <FaRegHeart className={style.icon} />
            </>
          )}
        </button>
      </Link>
    </li>
  );
}

Card.propTypes = {
  noticia: PropTypes.object.isRequired,
};
