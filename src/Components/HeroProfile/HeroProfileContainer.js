import { connect } from 'react-redux';
import HeroProfile from './HeroProfile';

import {
  fetchHeroProfile,
  updateSelectedHero
} from '../../actions/heroProfile';

const mapStateToProps = (state) => {
  return {
    heroProfile: state.heroProfile,
    generalData:
      state.heroes.list.find((e) => e.id === state.heroProfile.selectedHero) ||
      {},
    profileData: state.heroProfile.data || {},
    heroesIsFetching: state.heroes.isFetching,
    profileIsFetching: state.heroProfile.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeroProfile: (heroId) => {
      dispatch(fetchHeroProfile(heroId));
    },
    updateSelectedHero: (heroId) => {
      dispatch(updateSelectedHero(heroId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroProfile);
