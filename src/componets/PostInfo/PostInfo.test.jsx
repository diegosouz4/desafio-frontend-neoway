import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import PostInfo from "./PostInfo";
import formattedDate from "../../util/formattedDate";
import formattedText from "../../util/formattedText";
import "@testing-library/jest-dom";

const mockInfo = {
  author: "Jest",
  publishedAt: "2023-09-30T13:55:36Z",
  className: "jest-custom-class",
  likes: true,
};

describe("<PostInfo />", () => {
  it("should be render", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <PostInfo {...mockInfo} />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should title be formatted", () => {
    const text = "This is a long text that needs to be formatted";
    const formattedTitle = formattedText(text, 15);

    render(
      <BrowserRouter>
        <PostInfo
          publishedAt={mockInfo.publishedAt}
          author={formattedTitle}
          likes={mockInfo.likes}
        />
      </BrowserRouter>
    );

    const author = screen.getByText("This is a long ...");
    expect(author).toBeInTheDocument();
  });

  it("should data to be formatted", () => {
    const dateFormatted = formattedDate(mockInfo.publishedAt);

    render(
      <BrowserRouter>
        <PostInfo {...mockInfo} />
      </BrowserRouter>
    );

    const renderDate = screen.getByText(dateFormatted);
    expect(renderDate).toBeInTheDocument();
  });
});
