import React from "react";
import { shallow } from "enzyme";
import { VideoGridHeader } from "../VideoGridHeader";

describe("VideoGridHeader", () => {
  test("renders with no props", () => {
    const wrapper = shallow(<VideoGridHeader />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with title props set to empty string", () => {
    const wrapper = shallow(<VideoGridHeader title="" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with title props set to non-empty string", () => {
    const wrapper = shallow(<VideoGridHeader title="Trending" />);
    expect(wrapper).toMatchSnapshot();
  });
});
