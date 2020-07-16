import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { GridGifItem } from "../../components/GridGifItem";

describe("GridGifItem tests", () => {
  const title = "Title";
  const url = "https://localhost/";
  const wrapper = shallow(<GridGifItem title={title} url={url} />);

  test("should show <GridGifItem /> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should should have a p tag with the Title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("should have img equal to url and alt from props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("should have animate__fadeIn", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
