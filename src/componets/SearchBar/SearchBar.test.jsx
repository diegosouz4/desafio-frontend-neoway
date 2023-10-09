import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SearchBar from "./SearchBar";
import { fetchNoticias } from "../../redux/noticias/noticias";
import { SetLocalStore } from "../../hooks/useLocalStore";

jest.mock("../../redux/noticias/noticias", () => {
  return { fetchNoticias: jest.fn() };
});

jest.mock("../../hooks/useLocalStore", () => {
  return { SetLocalStore: jest.fn() };
});

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([]);

describe("<SearchBar />", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      noticias: {
        news: {
          data: {
            articles: [],
          },
          likes: [],
        },
      },
    });
  });

  it("should SearchBar was rendered", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchBar />
        </Provider>
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("test submit", async () => {
    const dispatch = jest.fn();
    fetchNoticias.mockReturnValue(dispatch);
    useDispatch.mockReturnValue(dispatch);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchBar />
        </Provider>
      </BrowserRouter>
    );

    const formEl = screen.getByTestId("form");

    const inputQuery = screen.getByPlaceholderText("buscar...");
    const inputLang = screen.getByLabelText("Qual o idioma?");
    const inputFilterBy = screen.getByLabelText("Filtrar por:");

    await fireEvent.change(inputQuery, { target: { value: "Jest" } });
    await fireEvent.change(inputLang, { target: { value: "en" } });
    await fireEvent.change(inputFilterBy, { target: { value: "publishedAt" } });

    await fireEvent.submit(formEl);

    expect(fetchNoticias).toHaveBeenCalledWith({
      q: "Jest",
      language: "en",
      sortBy: "publishedAt",
    });

    expect(SetLocalStore).toHaveBeenCalledWith("query", {
      q: "Jest",
      language: "en",
      sortBy: "publishedAt",
    });
  });
});
