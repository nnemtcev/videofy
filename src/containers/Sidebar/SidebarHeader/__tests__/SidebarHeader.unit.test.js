import { shallow } from "enzyme";
import React from "react";
import { SidebarHeader } from "../SidebarHeader.js";

describe("SidebarHeader", () => {
  test("SidebarHeader renders with title prop passed in", () => {
    const wrapper = shallow(<SidebarHeader title="subscriptions" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("SidebarHeader renders with null title prop", () => {
    const wrapper = shallow(<SidebarHeader />);
    expect(wrapper).toMatchSnapshot();
  });

  test("SidebarHeader renders with empty title prop passed in", () => {
    const wrapper = shallow(<SidebarHeader title="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
