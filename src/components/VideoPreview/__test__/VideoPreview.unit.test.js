import { shallow } from "enzyme";
import React from "react";
import { VideoPreview } from "../VideoPreview";

describe("VideoPreview", () => {
  test("component renders successfully", () => {
    const wrapper = shallow(<VideoPreview />);
    expect(wrapper).toMatchSnapshot();
  });
});
