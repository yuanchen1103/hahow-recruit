import { connect } from 'react-redux';
import HeroProfile from './HeroProfile';

import {
  fetchHeroProfile,
  updateSelectedHero,
  updateHeroProfile
} from '../../actions/heroProfile';

const mapStateToProps = (state) => {
  return {
    heroProfile: state.heroProfile,
    generalData:
      state.heroes.list.find((e) => e.id === state.heroProfile.selectedHero) ||
      {},
    profileData: state.heroProfile.data || {},
    heroesIsFetching: state.heroes.isFetching,
    profileIsFetching: state.heroProfile.isFetching,
    isUpdating: state.heroProfile.isUpdating
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeroProfile: (heroId) => {
      dispatch(fetchHeroProfile(heroId));
    },
    updateSelectedHero: (heroId) => {
      dispatch(updateSelectedHero(heroId));
    },
    updateHeroProfile: (heroId, data) => {
      dispatch(updateHeroProfile(heroId, data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroProfile);
