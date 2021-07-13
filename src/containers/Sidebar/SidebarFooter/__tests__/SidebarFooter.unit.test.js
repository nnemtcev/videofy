import { shallow } from "enzyme";
import React from "react";

import { SidebarFooter } from "../SidebarFooter.js";

test("sidebar footer renders", () => {
  const wrapper = shallow(<SidebarFooter />);
  expect(wrapper).toMatchSnapshot();
});
