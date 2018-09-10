import { connect } from 'react-redux';
import { TagCategories } from '../components/';
import { getCategories } from '../selectors';

const mapStateToProps = state => ({
    categories: getCategories(state)
});

export const TagCategoriesContainer = connect(
  mapStateToProps,
)(TagCategories)
