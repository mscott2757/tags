import { connect } from 'react-redux';
import { TagsOutput } from '../components/';
import { getTags, getTotal, isCopied, isTooLong } from '../selectors';
import { copyTags, resetCopied, resetTags } from '../actions';

const mapStateToProps = state => {
  return {
    tags: getTags(state),
    total: getTotal(state),
    copied: isCopied(state),
    tooLong: isTooLong(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCopy: () => {
      let timer = setTimeout(() => {
        dispatch(resetCopied());
      }, 3000);
      dispatch(copyTags(timer));
    },
    onReset: () => {
      dispatch(resetTags());
    }
  }
}

const TagsOutputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsOutput);

export default TagsOutputContainer;


