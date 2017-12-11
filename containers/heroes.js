import { connect } from "react-redux";
import Hero from "../screens/Hero";
import { fetchHeroes } from "../actions/heroes";

const mapStateToProps = state => ({
  data: state //from reducers heroes:action.payload or get all state --inisiasi dulu
});
const mapDispatchToProps = dispatch => ({
  fetchHeroeszz: () => {
    dispatch(fetchHeroes());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
