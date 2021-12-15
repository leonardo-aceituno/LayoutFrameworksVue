import axios from "axios";

export const getCharacters = ({ commit }) => {
  axios
    .get(
      "https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]"
    )
    .then((response) => {
      commit("SET_CHARACTERS", response.data);
    });
};
