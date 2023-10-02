import { useSelector } from "react-redux";
import SearchBar from "../../componets/SearchBar/SearchBar";
import style from "./HomePage.module.scss";
import Card from "../../componets/Card/Card";
import useSeo from "../../hooks/useSeo";
import { GetLocalStore } from "../../hooks/useLocalStore";
import React from "react";
import Loader from "../../componets/Loader/Loader";

export default function HomePage() {
  const { news } = useSelector((rootReducer) => rootReducer.noticias);
  const [query, setQuery] = React.useState({});

  useSeo(
    "Desafio frontend | Neoway",
    "Teste prático para vaga de frontend na Neoway."
  );

  React.useEffect(() => {
    const localQuery = GetLocalStore("query");
    if (localQuery) setQuery(localQuery);
  }, []);

  return (
    <main>
      <section className={style.hero} aria-label="hero section">
        <div className="container">
          <SearchBar />
        </div>
      </section>

      <section className={style.content}>
        <div className="container">
          {query && (
            <h2 className={style.title}>
              Resultados para a palavra: <strong>{query.q}</strong>
            </h2>
          )}

          {news.loading && <Loader />}
          
          {news.data?.articles && (
            <ul className={style.list}>
              {news.data?.articles.map((noticia) => (
                <Card key={noticia.source.id} noticia={noticia} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
