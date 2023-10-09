import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Card from "./Card";
import formattedText from "../../util/formattedText";
import formattedDate from "../../util/formattedDate";
import { addLikesItem } from "../../redux/noticias/noticias";
import { SetLocalStore } from "../../hooks/useLocalStore";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/noticias/noticias", () => {
  return { addLikesItem: jest.fn() };
});

jest.mock("../../hooks/useLocalStore", () => {
  return { SetLocalStore: jest.fn() };
});

const mockStore = configureStore([]);

describe("<Card />", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      noticias: {},
    });
  });

  it("should be render with the props passed", () => {
    const mockNoticia = {
      title: "Sample Title",
      urlToImage: "sample-image.jpg",
      publishedAt: "2023-10-05",
      author: "Jest",
      likes: false,
    };

    mockNoticia.title = formattedText(mockNoticia.title);
    mockNoticia.publishedAt = formattedDate(mockNoticia.publishedAt);

    const { asFragment, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Card noticia={mockNoticia} />
        </Provider>
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();

    expect(getByText("Sample Title")).toBeInTheDocument();
    expect(getByText("2023/10/05")).toBeInTheDocument();
    expect(getByText("Jest")).toBeInTheDocument();
  });

  it("should the dispath of the like button is passing the news ", async () => {
    const mockNoticia = {
      title: "Sample Title",
      likes: false,
    };

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Card noticia={mockNoticia} />
        </Provider>
      </BrowserRouter>
    );

    const likesBtn = getByText("salvar nos favorito");
    expect(likesBtn).toBeInTheDocument();

    await fireEvent.click(likesBtn);

    expect(addLikesItem).toHaveBeenCalledTimes(1);
    expect(addLikesItem).toHaveBeenCalledWith(mockNoticia);
  });

  it("shoul view the news when clicked", () => {
    const mockNoticia = {
      title: "News title",
    };

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Card noticia={mockNoticia} />
        </Provider>
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe("/noticia/News title");

    fireEvent.click(link);

    expect(SetLocalStore).toHaveBeenCalledWith('post', mockNoticia);
  });
});
