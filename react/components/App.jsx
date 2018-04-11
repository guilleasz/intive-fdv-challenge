import React from 'react';
import FormContainer from '../containers/FormContainer';
import VisitorsContainer from '../containers/VisitorsContainer';
import SelectedVisitorContainer from '../containers/SelectedVisitorContainer';
import s from './App.scss';

export default () => (
  <div className={s.app}>
    <h1 className={s.header}>Intive - FDV Exercise</h1>
    <div className={s.container}>
      <div className={s.box}>
        <FormContainer />
        <SelectedVisitorContainer />
      </div>
      <div className={[s.box, s.table].join(' ')}>
        <VisitorsContainer />
      </div>
    </div>
    <h3 className={s.author}>Guillermo Aszyn</h3>
  </div>
);
