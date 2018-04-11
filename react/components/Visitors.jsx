import React from 'react';
import s from './Visitors.css';

export default ({ visitors, changeVisitor }) => (
  <table className={s.table}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Country</th>
        <th>Birthday</th>
      </tr>
    </thead>
    <tbody>
      {visitors.map((visitor) => {
        const day = new Date(visitor.birthday);
        return (
          <tr onClick={() => changeVisitor(visitor)} key={visitor.name}>
            <td>{visitor.name}</td>
            <td>{visitor.country}</td>
            <td>{day.getDate()}/{day.getMonth() + 1}/{day.getFullYear()}</td>
          </tr>
        );
    })}
    </tbody>
  </table>
);
