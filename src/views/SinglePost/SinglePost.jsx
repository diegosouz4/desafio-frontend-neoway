import React from "react";
import { useSelector } from "react-redux";
import { GetLocalStore } from "../../hooks/useLocalStore";
import Hero from "../../componets/Hero/Hero";
import useSeo from "../../hooks/useSeo";
import { Link, useParams } from "react-router-dom";
import style from "./SinglePost.module.scss";
import Loader from "../../componets/Loader/Loader";

export default function SinglePost() {
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const { news } = useSelector((rootReducer) => rootReducer.noticias);
  const { title } = useParams();

  useSeo(title, post?.description);

  React.useEffect(() => {
    setLoading(true);

    if (news.data === null) {
      const localStore = GetLocalStore("post");
      setPost(localStore ? localStore : null);
    } else {
      news.data.articles.some((post) => {
        if (post.title === title) {
          setPost(post);
          return;
        }
      });
    }

    setLoading(false);
  }, []);

  if (post === null) {
    return (
      <main className={style.error}>
        <div className={`container ${style.container}`}>
          <h1>404</h1>
          <h2>
            Não foi possível encontrar o post: <strong>{title}</strong>
          </h2>
          <Link to="/">Voltar para a home</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="container">
        {loading && <Loader />}
       
       {post && (
          <>
            <Hero {...post} />

            <section className={style.content}>
              <div className={`container ${style.container}`}>
                {post.source.name && (
                  <h3 className={style.source}>
                    Source: <strong>{post.source.name}</strong>
                  </h3>
                )}

                {post.content && <p>{post.content}</p>}

                {post.url && (
                  <a
                    className={style.link}
                    href={post.url}
                    rel="noopen noreferrer"
                    target="_blank"
                    title={post.title}
                  >
                    Ver matéria completa
                  </a>
                )}
              </div>
            </section>

            <div className={style.backHome}>
              <Link to="/">Voltar para a home</Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
