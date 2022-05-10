import { h } from 'vue';
import FlexCol from './FlexCol.js';

function GroupedSection(props, { slots }) {
  return h(
    FlexCol,
    { class: 'ring-1 ring-black px-5 pb-5 pt-7 rounded-base relative' },
    {
      default: () => {
        const children = [slots.default()];
        if (props.header) {
          children.unshift(
            h(
              'h4',
              {
                class: [
                  'inline-block absolute -inset-y-3 px-1.5 w-fit h-fit select-none',
                  props.headerCss
                ]
              },
              props.header
            )
          );
        }
        return children;
      }
    }
  );
}

GroupedSection.props = {
  header: { type: String, default: null },
  headerCss: { type: [Object, Array, String], default: null }
};

export default GroupedSection;
