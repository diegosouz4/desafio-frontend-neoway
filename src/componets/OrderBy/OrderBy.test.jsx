import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useSelector, Provider, useDispatch } from "react-redux";
import OrderBy from "./OrderBy";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { updateNewsByOrder } from "../../redux/noticias/noticias";

jest.mock("../../redux/noticias/noticias", () => {
  return { updateNewsByOrder: jest.fn() };
});

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([]);

describe("<OrderBy />", () => {
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

  it("should OrdernBy was rendered", () => {
    useSelector.mockReturnValue({
      noticias: {
        news: {
          data: {
            articles: [],
          },
          likes: [],
        },
      },
    });

    const { asFragment } = render(
      <BrowserRouter>
        <Provider store={store}>
          <OrderBy origin="likes" />
        </Provider>
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should dispath the likes array orderby author", async () => {
    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockReturnValue({
      news: {
        data: {
          articles: [],
        },
        likes: [],
      },
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <OrderBy origin="likes" />
        </Provider>
      </BrowserRouter>
    );

    const select = screen.getByLabelText("Ordernar por:");
    expect(select).toBeInTheDocument();

    await fireEvent.change(select, { target: { value: "author" } });

    expect(updateNewsByOrder).toHaveBeenCalledWith(
      store.getState().noticias.news.likes,
      "author",
      "likes"
    );
  });

  it("should dispath the articles array orderby author", async () => {
    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockReturnValue({
      news: {
        data: {
          articles: [],
        },
        likes: [],
      },
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <OrderBy />
        </Provider>
      </BrowserRouter>
    );

    const select = screen.getByLabelText("Ordernar por:");
    expect(select).toBeInTheDocument();

    await fireEvent.change(select, { target: { value: "author" } });

    expect(updateNewsByOrder).toHaveBeenCalledWith(
      store.getState().noticias.news.data.articles,
      "author"
    );
  });
});
