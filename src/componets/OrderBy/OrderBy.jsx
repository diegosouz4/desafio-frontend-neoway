import React from "react";
import style from "./OrderBy.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateNewsByOrder } from "../../redux/noticias/noticias";
import PropTypes from "prop-types";

export default function OrderBy({ origin }) {
  const [sortBy, setSortBy] = React.useState("");
  const dispatch = useDispatch();
  const { news } = useSelector((rootReducer) => rootReducer.noticias);

  const handleChange = ({ target }) => {
    if (!target.value) return;

    setSortBy(target.value);
    if (!origin)
      return dispatch(updateNewsByOrder(news.data.articles, target.value));

    return dispatch(updateNewsByOrder(news.likes, target.value, origin));
  };

  return (
    <div className={style.wrapper}>
      <fieldset>
        <label className={style.label} htmlFor="orderby">
          Ordernar por:{" "}
        </label>
        <select
          className={style.select}
          id="orderby"
          value={sortBy}
          onChange={handleChange}
        >
          <option value="">Selecionar</option>
          <option value="author">Autor</option>
          <option value="publishedAt">Publicação</option>
          <option value="title">Título</option>
        </select>
      </fieldset>
    </div>
  );
}

OrderBy.propTypes = {
  origin: PropTypes.string,
};
