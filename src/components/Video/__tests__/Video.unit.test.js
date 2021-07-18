import { snapshot } from "enzyme";
import React from "react";
import { Video } from "../Video";

describe("Video", () => {
  test("renders null if no id prop", () => {
    const wrapper = snapshot(<Video />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders a video successfully if valid id prop", () => {
    const wrapper = snapshot(<Video id="-7fuHEEmEjs" />);
    expect(wrapper).toMatchSnapshot();
  });
});
