import axios from "axios";

export function fetchHeroes() {
  return {
    type: "FETCH_HERO",
    payload: axios.get("http://rest.learncode.academy/api/kamal/heroes")
  };
}
