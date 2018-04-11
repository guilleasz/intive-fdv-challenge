import axios from 'axios';
import { CHANGE_INPUT, SET_COUNTRIES, RESET_FORM, LOADING_COUNTRIES, FAIL_FETCH_COUNTRIES } from '../constants';
import { addVisitor } from './visitors';

export const changeInput = ({ value, name }) => ({
  type: CHANGE_INPUT,
  value,
  name,
});

export const setCountries = countries => ({
  type: SET_COUNTRIES,
  countries,
});

export const resetForm = () => ({
  type: RESET_FORM,
});

export const loadingCountries = () => ({
  type: LOADING_COUNTRIES,
});

export const failFetchCountries = () => ({
  type: FAIL_FETCH_COUNTRIES,
});

export const fetchCountries = () => (dispatch) => {
  dispatch(loadingCountries());
  axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => res.data)
    .then(countries => dispatch(setCountries(countries)))
    .catch(() => dispatch(failFetchCountries()));
};

export const submitForm = evt => (dispatch, getState) => {
  evt.preventDefault();
  const { name, surname, birthday, selectedCountry: country } = getState().form;
  dispatch(addVisitor({ name: `${name} ${surname}`, birthday: new Date(birthday), country }));
  dispatch(resetForm());
};
