import React, { useState } from 'react';
import './presence.css';
import Indetified from './Identified';
let content = null;
export default function Presence() {
  const [studentId, setStudentId] = useState({
    id: '',
  });

  const { id } = studentId;

  const handleChange = (text) => (e) => {
    setStudentId({ ...studentId, [text]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentId({
      id,
    });

    if (id) {
      content = <Indetified indetification={id} />;
      console.log(id);
    }
  };

  return (
    <div className="presence--whole">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="lab--box" htmlFor="box">
              Registration Number :{' '}
            </label>
            <input
              className="input--box"
              type="text"
              name="id"
              value={id}
              onChange={handleChange('id')}
              id="registrationNumber"
            />
          </div>
          <div>
            <button className="submit--input" type="submit">
              vérifie
            </button>
          </div>
        </form>
        {content}
      </div>
    </div>
  );
}
