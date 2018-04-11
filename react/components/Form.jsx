import React from 'react';
import s from './Form.scss';

export default ({
  submitForm,
  changeInput,
  name,
  surname,
  selectedCountry,
  countries,
  birthday,
}) => (
  <form className={s.form} onSubmit={submitForm}>
    <div className={s.formControl}>
      <label htmlFor="name">Name:</label>
      <input name="name" id="name" value={name} onChange={({ target }) => changeInput(target)} />
    </div>
    <div className={s.formControl}>
      <label htmlFor="surname">
        Surname:
      </label>
      <input id="surname" name="surname" value={surname} onChange={({ target }) => changeInput(target)} />
    </div>
    <div className={s.formControl}>
      <label htmlFor="country">
        Countries:
      </label>
      <select name="selectedCountry" id="country" value={selectedCountry} onChange={({ target }) => changeInput(target)}>
        {countries.map(country => (
          <option key={country.name} value={country.name}>{country.name}</option>
        ))}
      </select>
    </div>
    <div className={s.formControl}>
      <label htmlFor="birthday">
        Date:
      </label>
      <input type="date" id="birthday" name="birthday" value={birthday} onChange={({ target }) => changeInput(target)} />
    </div>
    <div className={s.submit}>
      <input disabled={!name || !surname || !birthday || !selectedCountry} type="submit" value="Save" />
    </div>
  </form>
);
