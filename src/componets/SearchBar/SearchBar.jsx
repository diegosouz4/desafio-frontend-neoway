import React from "react";
import { useDispatch } from "react-redux";
import { fetchNoticias } from "../../redux/noticias/noticias";
import style from "./SearchBar.module.scss";
import { SetLocalStore } from "../../hooks/useLocalStore";

const initialState = {
  q: "",
  language: "pt",
  sortBy: "relevancy",
};

export default function SearchBar() {
  const [query, setQuery] = React.useState(initialState);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchNoticias(query));
    SetLocalStore("query", query);
  }

  return (
    <form data-testid="form" className={style.form} onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="q">Buscar</label>
        <input
          className={style.input}
          name="q"
          type="text"
          placeholder="buscar..."
          value={query.q}
          onChange={({ target }) =>
            setQuery((prev) => ({ ...prev, q: target.value }))
          }
          required
        />
      </fieldset>

      <fieldset>
        <label htmlFor="language">Qual o idioma?</label>
        <select
          className={style.select}
          id="language"
          value={query.language}
          onChange={({ target }) =>
            setQuery((prev) => {
              return { ...prev, language: target.value };
            })
          }
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
          <option value="pt">PT</option>
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="filterBy">Filtrar por:</label>
        <select
          id="filterBy"
          className={style.select}
          value={query.sortBy}
          onChange={({ target }) =>
            setQuery((prev) => {
              return { ...prev, sortBy: target.value };
            })
          }
        >
          <option value="relevancy">Relevância</option>
          <option value="popularity">Popularidade</option>
          <option value="publishedAt">Data da publicação</option>
        </select>
      </fieldset>

      <button className={style.btn}>Buscar</button>
    </form>
  );
}
