import Breadcrumb from "../Breadcrumb/Breadcrumb";
import PropTypes from "prop-types";
import style from "./Hero.module.scss";
import PostInfo from "../PostInfo/PostInfo";

export default function Hero({
  author,
  publishedAt,
  title,
  urlToImage,
  likes,
}) {
  return (
    <section
      className={style.hero}
      style={{ backgroundImage: `url(${urlToImage})` }}
      aria-label="hero section"
    >
      <div className={`container ${style.container}`}>
        <div>
          <h1>{title}</h1>
          <Breadcrumb className={style.breadCrumb} title={title} />
          <PostInfo
            author={author}
            publishedAt={publishedAt}
            likes={likes}
            className={style.info}
          />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
  urlToImage: PropTypes.string,
  likes: PropTypes.bool,
};
