import { connect } from 'react-redux';
import TagCategory from '../components/TagCategory';
import { addGroup } from '../actions';
import { getCategoryTitle, getCategoryOptions } from '../selectors';

const mapStateToProps = (state, { id }) => {
  return {
    options: getCategoryOptions(state, id),
    title: getCategoryTitle(state, id)
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
