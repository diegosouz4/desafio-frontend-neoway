import { handleritemLikes } from "../noticias/noticias";

const updateNoticias = (store) => (next) => (action) => {
  const result = next(action);
  const noticias = store.getState().noticias.news;

  if (action.type === "noticias/setLikesList" && noticias.data !== null) {
    store.dispatch(handleritemLikes(noticias.data.articles, noticias.likes));
  }

  return result;
};

export default updateNoticias;
