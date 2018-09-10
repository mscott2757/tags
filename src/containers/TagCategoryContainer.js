import { connect } from 'react-redux';
import { TagCategory } from '../components/';
import { addGroup } from '../actions';
import {
  getCategoryTitle,
  getCategoryGroups,
  isAdded,
  fetchPreview
} from '../selectors';

const mapStateToProps = (state, { id }) => {
  return {
    groups: getCategoryGroups(state, id),
    title: getCategoryTitle(state, id),
    added: isAdded(state, id),
    onFetchPreview: (categoryId, groupId) => {
      return fetchPreview(state, categoryId, groupId);
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAddGroup: (id, groupId) => {
      dispatch(addGroup(id, groupId));
    }
  }
}

export const TagCategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagCategory);
