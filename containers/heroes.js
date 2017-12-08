import { connect } from "react-redux";
import Hero from "../screens/Hero";
import { fetchHeroes } from "../actions/heroes";

const mapStateToProps = state => ({
  data: state //from reducers heroes:action.payload or get all state
});
const mapDispatchToProps = dispatch => ({
  fetchHeroes: () => {
    dispatch(fetchHeroes());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
