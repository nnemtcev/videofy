import { shallow } from "enzyme";
import React from "react";

import { VideoMetadata } from "../VideoMetadata";

describe("VideoMetadata", () => {
  test("renders", () => {
    const wrapper = shallow(<VideoMetadata />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders view count when view count prop is passed in", () => {
    const wrapper = shallow(<VideoMetadata viewCount={1000} />);
    expect(wrapper).toMatchSnapshot();
  });
});
