import axios from "axios";

import {
  GET_ALL_POKEMONS,
  GET_DETAIL_POKEMON,
  GET_TYPES,
  GET_POKEMON_BY_NAME,
  CLEAN_DETAIL,
  FILTER_TYPES,
  FILTER_POKEMONS,
  ORDER_POKEMONS,
  CLEAN_INFO_FILTERS,
} from '../actiontypes/actiontypes'

export const getAllPokemons = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/pokemons`)
      return dispatch({
        type: GET_ALL_POKEMONS,
        payload: response.data
      })
    } catch (error) {
      return ({
        payload: error,
      });
    }
  };
};

export const getDetailPokemons = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/pokemons/${id}`);
      return dispatch({
        type: GET_DETAIL_POKEMON,
        payload: response.data,
      })
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error,
      })
    }
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/types`);
      return dispatch({
        type: GET_TYPES,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
};

export const getByNamePokemon = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/pokemons?name=${name}`);
      dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error,
      });
      alert("Sorry, this pokemon doesn't exist")
    }
  };
};

export const createPokemon = (pokemon) => {
  return function () {
    axios.post('/pokemons', pokemon)
      .catch((error) => alert(
        "The game could not be created: it doesn't meet the validation requirements."
      ))
  }
}

export const cleanDetailPokemon = () => {
  return { type: CLEAN_DETAIL };
};

export const filterTypesPokemons = (payload) => {
  return { type: FILTER_TYPES, payload };
};

export const filterPokemons = (payload) => {
  return { type: FILTER_POKEMONS, payload };
};

export const orderPokemons = (payload) => {
  return { type: ORDER_POKEMONS, payload };
};

export const cleanInfoFilters = () => { return { type: CLEAN_INFO_FILTERS } } 