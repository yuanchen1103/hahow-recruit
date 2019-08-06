import { connect } from 'react-redux';
import HeroProfile from './HeroProfile';

import { fetchHeroProfile } from '../../actions/heroProfile';

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeroProfile: (heroId) => {
      dispatch(fetchHeroProfile(heroId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroProfile);
