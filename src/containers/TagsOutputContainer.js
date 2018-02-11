import { connect } from 'react-redux';
import TagsOutput from '../components/TagsOutput';
import { getTags, getTotal } from '../selectors';

const mapStateToProps = state => {
  return {
    tags: getTags(state),
    total: getTotal(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const TagsOutputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsOutput);

export default TagsOutputContainer;


