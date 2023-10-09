import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useSeo from "../../hooks/useSeo";
import Card from "../../componets/Card/Card";
import style from "./FavoritesPage.module.scss";
import OrderBy from "../../componets/OrderBy/OrderBy";
import { Link } from "react-router-dom";
import { addLikesItem } from "../../redux/noticias/noticias";
import Breadcrumb from "../../componets/Breadcrumb/Breadcrumb";

export default function FavoritesPage() {
  const [error, setError] = React.useState(null);
  const { news } = useSelector((rootReducer) => rootReducer.noticias);
  const dispatch = useDispatch();

  useSeo(
    "Favoritos | Neoway",
    "Teste prático para vaga de frontend na Neoway."
  );

  React.useEffect(() => {
    if (news.likes.length < 1) {
      setError(true);
      return;
    }

    setError(false);
  }, [news]);

  React.useEffect(() => {
    dispatch(addLikesItem());
  }, []);

  console.log(news?.likes)

  if (error) {
    return (
      <main className={style.error}>
        <div className={`container ${style.container}`}>
          <h1>404</h1>
          <h2>
            Ops! Não conseguimos encontrar as notícias salvas, tente novamente
            mais tarde.
          </h2>
          <Link to="/">Voltar para a home</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="container">
        {news.likes && (
          <>
            <section className={style.hero}>
              <div className={style.row}>
                <h1 className={style.title}>Meus favoritos</h1>
                <Breadcrumb title="Favoritos" className={style.breadcrumb} />
              </div>
            </section>

            <OrderBy origin="likes" />

            <ul className={style.list}>
              {news.likes.map((noticia) => (
                <Card key={noticia.source.id} noticia={noticia} />
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}
