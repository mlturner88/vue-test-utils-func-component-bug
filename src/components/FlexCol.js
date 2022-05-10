import { h } from 'vue';

function FlexCol(props, { slots }) {
  return h(
    props.is || 'div',
    {
      class: [
        { flex: !props.inline, 'inline-flex': props.inline },
        'flex-col flex-nowrap min-h-0'
      ]
    },
    slots
  );
}

FlexCol.props = {
  is: {
    type: [String, Object],
    default: 'div'
  },
  inline: {
    type: Boolean,
    default: false
  }
};

export default FlexCol;
