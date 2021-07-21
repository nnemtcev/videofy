import { shallow } from "enzyme";
import React from "react";

import { Comments } from "../Comments";

describe("Comments", () => {
  test("Comments renders without props", () => {
    const wrapper = shallow(<Comments />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Comments renders with amountComments prop", () => {
    const wrapper = shallow(<Comments amountComments={286} />);
    expect(wrapper).toMatchSnapshot();
  });
});
