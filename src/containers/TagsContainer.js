import { connect } from 'react-redux';
import { Tags } from '../components/';
import {
  deleteTag,
  addTag,
  reorderTag
} from '../actions';

const mapStateToProps = ({ tags }) => ({ tags });

const mapDispatchToProps = dispatch => ({
  handleDelete: i => {
    dispatch(deleteTag(i));
  },
  handleAddition: text => {
    dispatch(addTag(text));
  },
  handleDrag: (tag, currPos, newPos) => {
    dispatch(reorderTag(tag, currPos, newPos));
  }
});

export const TagsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
