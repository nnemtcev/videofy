import { shallow } from "enzyme";
import React from "react";

import { SidebarItem } from "../SidebarItem.js";

describe("SidebarItem", () => {
  test("SidebarItem renders with no props passed in", () => {
    const wrapper = shallow(<SidebarItem />);
    expect(wrapper).toMatchSnapshot();
  });

  test("highlighted SidebarItem renders with icon and label", () => {
    const wrapper = shallow(
      <SidebarItem highlighted icon="fire" label="Trending" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("non-highlighted SidebarItem renders with icon and label", () => {
    const wrapper = shallow(<SidebarItem icon="fire" label="Trending" />);
    expect(wrapper).toMatchSnapshot();
  });
});
