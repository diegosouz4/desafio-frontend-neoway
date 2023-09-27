import { useSelector } from "react-redux";
import SearchBar from "../../componets/SearchBar/SearchBar";
import style from "./HomePage.module.scss";
import Card from "../../componets/Card/Card";

export default function HomePage() {
  const { news } = useSelector((rootReducer) => rootReducer.noticias);

  return (
    <main>
      <section className={style.hero} aria-label="hero section">
        <div className="container">
          <SearchBar />
        </div>
      </section>

      <section className={style.content}>
        <div className="container">
          {news.loading && <p>Loading....</p>}
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
