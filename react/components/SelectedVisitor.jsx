import React from 'react';
import s from './SelectedVisitor.css';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'];

export default ({ visitor }) => {
  const birthday = visitor && new Date(visitor.birthday);
  return (
    <div className={s.box}>
      {visitor ?
        <p>
          Hello {visitor.name} from {visitor.country},
          on {birthday.getDate()} of {months[birthday.getMonth()]} you
          will have {new Date().getFullYear() - birthday.getFullYear()}
        </p>
        : null}
    </div>
  );
};
