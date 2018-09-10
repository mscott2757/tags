import { connect } from 'react-redux';
import { TagsOutput } from '../components/';
import { getTags, getTotal, isCopied, isTooLong } from '../selectors';
import { copyTags, resetCopied, resetTags } from '../actions';

const mapStateToProps = state => ({
  tags: getTags(state),
  total: getTotal(state),
  copied: isCopied(state),
  tooLong: isTooLong(state)
});

const mapDispatchToProps = dispatch => ({
  onCopy: () => {
    let timer = setTimeout(() => {
      dispatch(resetCopied());
    }, 3000);
    dispatch(copyTags(timer));
  },
  onReset: () => {
    dispatch(resetTags());
  }
});

export const TagsOutputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsOutput);
