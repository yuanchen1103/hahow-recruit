import { connect } from 'react-redux';
import HeroList from './HeroList';

import { fetchHeroes } from '../../actions/heroes';

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeroes: () => {
      dispatch(fetchHeroes());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroList);
