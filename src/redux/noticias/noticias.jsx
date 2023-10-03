import { createSlice } from "@reduxjs/toolkit";
import { GetLocalStore, SetLocalStore } from "../../hooks/useLocalStore";

const initialState = {
  news: {
    loading: false,
    data: null,
    error: null,
    likes: [],
  },
};

const slice = createSlice({
  name: "noticias",
  initialState: initialState,
  reducers: {
    fetchNewsStart(state) {
      (state.news.loading = true),
        (state.news.data = null),
        (state.news.error = null);
    },
    fetchNewsSuccess(state, action) {
      (state.news.loading = false),
        (state.news.data = action.payload),
        (state.news.error = null);
    },
    fetchNewsError(state, action) {
      (state.news.loading = false),
        (state.news.data = null),
        (state.news.error = action.payload);
    },
    setLikesList(state, action) {
      state.news.likes = action.payload;
    },
    updateNewsLikes(state, action) {
      state.news.data.articles = action.payload;
    },
    sortNewsBy(state, action) {
      state.news.data.articles = action.payload;
    },
    sortLikesBy(state, action) {
      state.news.likes = action.payload;
    },
  },
});

const {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsError,
  setLikesList,
  updateNewsLikes,
  sortNewsBy,
  sortLikesBy,
} = slice.actions;

export const fetchNoticias = (query) => async (dispatch) => {
  const { q, language, sortBy } = query;
  const url = `https://newsapi.org/v2/everything?q=${q}&language=${language}&sortBy=${sortBy}&from=2023-09-24&apiKey=${
    import.meta.env.VITE_API_TOKEN_TESTE
  }&pageSize=100`;

  try {
    dispatch(fetchNewsStart());
    const response = await fetch(url);
    const data = await response.json();
    //Removendo as notícias
    data.articles = await data.articles.filter(
      (item) => item.title !== "[Removed]" && item.title !== null
    );
    //Alterando os id's null pelo index da notícia.
    data.articles = await data.articles.map((item, index) => ({
      ...item,
      source: { ...item.source, id: index },
      likes: false,
    }));
    //Valida se a notícia está salva como favorita.
    const likesList = GetLocalStore("newsLikes");
    if (likesList) {
      data.articles = await data.articles.map((item) => ({
        ...item,
        likes: likesList.find((local) =>
          local.title === item.title ? true : false
        ),
      }));
    }

    return dispatch(fetchNewsSuccess(data));
  } catch (error) {
    dispatch(fetchNewsError(error.message));
  }
};

export const addLikesItem = (noticia) => (dispatch) => {
  //Puxar as notícias no localStorage
  let localStorageLikes = GetLocalStore("newsLikes") || [];

  // Verificar se a notícia já está como favorita
  if (!noticia) {
    dispatch(setLikesList(localStorageLikes));
    return;
  }

  //Se tiver remover
  if (localStorageLikes.find((item) => item.title === noticia.title)) {
    localStorageLikes = localStorageLikes.filter(
      (item) => item.title !== noticia.title
    );
  } else {
    //Se não adicionar
    localStorageLikes = [...localStorageLikes, { ...noticia, likes: true }];
  }
  //fazer o dispatch para o reducer
  SetLocalStore("newsLikes", localStorageLikes);
  dispatch(setLikesList(localStorageLikes));
};

export const handleritemLikes = (noticias, likes) => (dispatch) => {
  const newArray = noticias.map((noticia) => {
    const isFavorite = likes.find((item) => item.title === noticia.title);
    return { ...noticia, likes: !!isFavorite };
  });

  return dispatch(updateNewsLikes(newArray));
};

export const updateNewsByOrder = (arr, value, origin) => (dispatch) => {
  let newArray = [...arr].sort((a, b) =>
    a[value] > b[value] ? 1 : a[value] < b[value] ? -1 : 0
  );

  if (origin && origin === "likes") {
    dispatch(sortLikesBy(newArray));
    return;
  }

  dispatch(sortNewsBy(newArray));
};

export default slice.reducer;
