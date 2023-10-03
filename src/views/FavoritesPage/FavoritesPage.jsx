import React from "react";
import Loader from "../../componets/Loader/Loader";
import { useSelector } from "react-redux";
import useSeo from "../../hooks/useSeo";
import Card from "../../componets/Card/Card";
import style from './FavoritesPage.module.scss';

export default function FavoritesPage() {
  const [loading, setLoading] = React.useState(false);
  const { news } = useSelector((rootReducer) => rootReducer.noticias);

  useSeo(
    "Favoritos | Neoway",
    "Teste prático para vaga de frontend na Neoway."
  );

  return (
    <main>
      <div className="container">
        {loading && <Loader />}

        {news.likes && (
          <ul className={style.list}>
            {news.likes.map((noticia) => (
              <Card key={noticia.source.id} noticia={noticia} />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
