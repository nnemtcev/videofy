import { shallow } from "enzyme";
import React from "react";
import { AppLayout } from "../AppLayout";

describe("AppLayout", () => {
  test("AppLayout renders with no children", () => {
    const wrapper = shallow(<AppLayout />);
    expect(wrapper).toMatchSnapshot();
  });

  test("AppLayout renders with one child", () => {
    const wrapper = shallow(
      <AppLayout>
        <div>Child 1</div>
      </AppLayout>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("AppLayout renders with multiple children", () => {
    const wrapper = shallow(
      <AppLayout>
        <div>Child 1</div>
        <div>
          <span>Child 2</span>
        </div>
      </AppLayout>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
