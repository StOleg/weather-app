import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCity } from '../actions/searchActions';
import { dailySelector } from '../selectors/selectedDays';
import SearchCity from '../components/SearchCity';

export const mapStateToProps = state => ({
    city: state.searchReducer.city,
    error: state.searchReducer.error,
    loading: state.searchReducer.loading,
    dailyList: dailySelector(state.searchReducer)
});

export const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchCity
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);