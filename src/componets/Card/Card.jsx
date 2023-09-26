import { FaCalendar, FaUser } from "react-icons/fa6";
import formattedDate from "../../util/formattedDate";
import formattedText from "../../util/formattedText";
import style from "./Card.module.scss";
import PropTypes from "prop-types";

export default function Card({ noticia }) {
  const newDate = formattedDate(noticia?.publishedAt);
  const title = formattedText(noticia?.title);

  if (noticia && noticia.title === "[Removed]") return;

  return (
    <li className={style.card}>
      <div className={style.wrapper}>
        <div
          className={style.thumb}
          style={{ backgroundImage: `url(${noticia?.urlToImage})` }}
        ></div>
        <div className={style.content}>
          <h2 className={style.title}>{title}</h2>
          <div className={style.info}>
            {newDate && (
              <span>
                <FaCalendar /> {newDate}
              </span>
            )}
            {noticia.author && (
              <span>
                <FaUser /> {noticia.author}
              </span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

Card.propTypes = {
  noticia: PropTypes.object.isRequired,
};
