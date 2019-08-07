import { connect } from 'react-redux';
import HeroList from './HeroList';

import { fetchHeroes } from '../../actions/heroes';
import { updateSelectedHero } from '../../actions/heroProfile';

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes,
    selectedHero: state.heroProfile.selectedHero
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeroes: () => {
      dispatch(fetchHeroes());
    },
    updateSelectedHero: (heroId) => {
      dispatch(updateSelectedHero(heroId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroList);
