import { connect } from 'react-redux';
import TagsOutput from '../components/TagsOutput';
import { formatTags } from '../actions';

const mapStateToProps = ({ tags }) => {
  return {
    tags: formatTags(tags)
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


