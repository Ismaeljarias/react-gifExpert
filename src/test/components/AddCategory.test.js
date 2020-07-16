import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { AddCategory } from "../../components/AddCategory";

describe("<AddCategory /> Tests", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should show <AddCategory /> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change textbox", () => {
    const input = wrapper.find("input");
    const value = "Hello";

    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("should NOT post info on submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call setCategories and clear the input text", () => {
    const value = "Hello";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
