import { connect } from 'react-redux';
import { TagCategories } from '../components/';
import { getCategories } from '../selectors';

const mapStateToProps = (state) => {
  return {
    categories: getCategories(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const TagCategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagCategories)

export default TagCategoriesContainer;
