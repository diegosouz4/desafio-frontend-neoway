import { render, screen } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";
import { BrowserRouter } from "react-router-dom";
import formattedText from "../../util/formattedText";
import "@testing-library/jest-dom";

const mockInfo = {
  title: "Example Title",
};

describe("<Breadcrumb/>", () => {
  it("Should be rendering", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Breadcrumb title={mockInfo.title} />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should showing the home link", () => {
    render(
      <BrowserRouter>
        <Breadcrumb title={mockInfo.title} />
      </BrowserRouter>
    );

    const homeLink = screen.getByText("home");

    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute("href")).toBe("/");
  });

  it("should showing the title passed as props", () => {
    render(
      <BrowserRouter>
        <Breadcrumb title={mockInfo.title} />
      </BrowserRouter>
    );

    const title = screen.getByText(mockInfo.title);
    expect(title).toBeInTheDocument();
  });

  it("should show the custom class passed as props", () => {
    const className = "jest-class";

    render(
      <BrowserRouter>
        <Breadcrumb title={mockInfo.title} className={className} />
      </BrowserRouter>
    );

    const component = screen.getByText(mockInfo.title).parentElement;
    expect(component).toHaveClass(className);
  });

  it("should title not be formatted", () => {
    const text = "Short text";
    const result = formattedText(text);

    render(
      <BrowserRouter>
        <Breadcrumb title={result} />
      </BrowserRouter>
    );

    const title = screen.getByText(text);
    expect(title).toBeInTheDocument();
  });

  it("should title be formatted", () => {
    const text = "This is a long text that needs to be formatted";
    const result = formattedText(text);

    render(
      <BrowserRouter>
        <Breadcrumb title={result} />
      </BrowserRouter>
    );

    // screen.debug();

    const title = screen.getByText("This is a long text ...");
    expect(title).toBeInTheDocument();
  });
});
