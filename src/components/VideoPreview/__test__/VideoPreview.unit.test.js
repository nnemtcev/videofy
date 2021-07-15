import { snapshot } from "enzyme";
import React from "react";
import VideoPreview from "./VideoPreview";

describe("VideoPreview", () => {
  test("component renders successfully", () => {
    const wrapper = snapshot(<VideoPreview />);
    expect(wrapper).toMatchSnapshot();
  });
});
