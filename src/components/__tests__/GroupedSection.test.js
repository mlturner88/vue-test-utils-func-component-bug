import { mount } from "@vue/test-utils";
import GroupedSection from "../GroupedSection.js";

test("should render header", () => {
  const header = "A Header";
  const w = mount(GroupedSection, {
    props: { header },
    slots: { default: "<div>Text Content</div>" },
  });

  // debugging this test, the prop is not populated at all when component is rendered
  expect(w.html()).toContain(header);
});

test("should render header after props update", () => {
  const header = "A Header";
  const w = mount(GroupedSection, {
    slots: { default: "<div>Text Content</div>" },
  });

  w.setProps({ header });
  // debugging this test, the prop is not populated at all when component is rendered
  expect(w.html()).toContain(header);
});
