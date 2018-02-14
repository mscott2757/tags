import { connect } from 'react-redux';
import TagCategory from '../components/TagCategory';
import { addGroup } from '../actions';
import {
  getCategoryTitle,
  getCategoryGroups,
  isAdded
} from '../selectors';

const mapStateToProps = (state, { id }) => {
  return {
    groups: getCategoryGroups(state, id),
    title: getCategoryTitle(state, id),
    added: isAdded(state, id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAddGroup: (id, groupId) => {
      dispatch(addGroup(id, groupId));
    }
  }
}

const TagCategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagCategory);

export default TagCategoryContainer;
