import { connect } from 'react-redux';
import { Tags } from '../components/';

import {
  deleteTag,
  addTag,
  reorderTag
} from '../actions';

const mapStateToProps = ({ tags }) => {
  return {
    tags
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleDelete: i => {
      dispatch(deleteTag(i));
    },
    handleAddition: text => {
      dispatch(addTag(text));
    },
    handleDrag: (tag, currPos, newPos) => {
      dispatch(reorderTag(tag, currPos, newPos));
    }
  }
}

const TagsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);

export default TagsContainer;

