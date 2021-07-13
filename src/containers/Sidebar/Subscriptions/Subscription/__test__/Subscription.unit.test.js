import { shallow } from "enzyme";
import React from "react";

import { Subscription } from "../Subscription.js";

describe("Subscription", () => {
  test("empty Subscription component renders", () => {
    const wrapper = shallow(<Subscription />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Subscription component with label renders", () => {
    const wrapper = shallow(<Subscription label="Coursera" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Subscription component with broadcasting renders", () => {
    const wrapper = shallow(<Subscription label="Coursera" broadcasting />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Subscription component with label, non-broadcasting but with new videos", () => {
    const wrapper = shallow(
      <Subscription label="Coursera" amountNewVideos={7} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
