import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Hero";

const mockInfo = {
  title: "Jest test title",
  author: "Jest author",
  publishedAt: "2023-10-05",
  urlToImage: "sample-image.jpg",
  likes: false,
};

describe("<Hero />", () => {
  it("hero", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Hero {...mockInfo} />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
