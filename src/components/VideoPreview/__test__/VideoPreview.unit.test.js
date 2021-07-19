import { shallow } from "enzyme";
import React from "react";
import { VideoPreview } from "../VideoPreview";

describe("VideoPreview", () => {
  test("renders vertically", () => {
    const wrapper = shallow(<VideoPreview />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders horizontally when horizontal prop is set to true", () => {
    const wrapper = shallow(<VideoPreview horizontal />);
    expect(wrapper).toMatchSnapshot();
  });
});
