import { connect } from 'react-redux';
import HeroProfile from './HeroProfile';

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
)(HeroProfile);
