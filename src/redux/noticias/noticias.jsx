import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: {
    loading: false,
    data: null,
    error: null,
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
  },
});

const { fetchNewsStart, fetchNewsSuccess, fetchNewsError } = slice.actions;

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
    data.articles = await data.articles.map((item, index) =>({...item, source: {...item.source, id: index}}));
    return dispatch(fetchNewsSuccess(data));
  } catch (error) {
    dispatch(fetchNewsError(error.message));
  }
};

export default slice.reducer;
