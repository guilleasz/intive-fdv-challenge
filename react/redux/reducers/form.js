import { CHANGE_INPUT, SET_COUNTRIES, RESET_FORM, LOADING_COUNTRIES, FAIL_FETCH_COUNTRIES } from '../constants';

const initialState = {
  name: '',
  surname: '',
  countries: [],
  selectedCountry: '',
  birthday: '',
  loading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.countries,
        loading: false,
        selectedCountry: action.countries[0].name,
      };
    case RESET_FORM:
      return {
        ...state,
        name: '',
        surname: '',
        selectedCountry: '',
        birthday: '',
        loading: false,
        error: false,
      };
    case LOADING_COUNTRIES:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FAIL_FETCH_COUNTRIES:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
