import { connect } from 'react-redux';
import TagsOutput from '../components/TagsOutput';
import { getTags, getTotal, isCopied, isTooLong } from '../selectors';
import { copyTags, resetCopied } from '../actions';

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
    }
  }
}

const TagsOutputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsOutput);

export default TagsOutputContainer;


