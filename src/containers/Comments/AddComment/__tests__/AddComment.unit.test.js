import { shallow } from "enzyme";
import React from "react";

import { AddComment } from "../AddComment";

describe("AddComment", () => {
  test("renders", () => {
    const wrapper = shallow(<AddComment />);
    expect(wrapper).toMatchSnapshot();
  });
});
