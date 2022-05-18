import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './presence.css';
import { Link } from "react-router-dom";

export default function Indetified(props) {
  console.log(props.indetification);
  const url = `http://attendance.bazafarm.rw/attendance/search?studentId=${props.indetification}`;
  const updateUrl = `http://attendance.bazafarm.rw/attendance/update?studentId=${props.indetification}`;
  const [formData, setFormData] = useState({
    email: null,
    firstName: null,
    lastName: null,
    postName: null,
    gender: null,
    birthDate: null,
    birthPlace: null,
    mother: null,
    father: null,
    faculty: null,
    option: null,
    promotion: null,
    phone_number: null,
    department: null,
    codePromotion: null,
  });

  let {
    email,
    firstName,
    lastName,
    postName,
    gender,
    birthDate,
    birthPlace,
    mother,
    father,
    faculty,
    option,
    promotion,
    phone_number,
    department,
    codePromotion,
  } = formData;

  useEffect(() => {
    axios.get(url).then((res) => {
      setFormData({
        email: res.data.data[0].email,
        firstName: res.data.data[0].firstName,
        lastName: res.data.data[0].lastName,
        postName: res.data.data[0].postName,
        gender: res.data.data[0].gender,
        birthDate: res.data.data[0].birthDate,
        birthPlace: res.data.data[0].birthPlace,
        mother: res.data.data[0].mother,
        father: res.data.data[0].father,
        faculty: res.data.data[0].faculty,
        option: res.data.data[0].option,
        promotion: res.data.data[0].promotion,
        phone_number: res.data.data[0].phone_number,
        department: res.data.data[0].department,
        codePromotion: res.data.data[0].codePromotion,
      });
    });
  }, [url]);

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(updateUrl, {
        email,
        firstName,
        lastName,
        postName,
        gender,
        birthDate,
        birthPlace,
        mother,
        father,
        faculty,
        option,
        promotion,
        phone_number,
        department,
        codePromotion,
      })
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <div class="input-field">
          <div>
            <label class="label">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange('email')}
              value={email}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">First Name</label>
            <input
              type="text"
              id="email"
              name="firstName"
              onChange={handleChange('firstName')}
              value={firstName}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">Last Name</label>
            <input
              type="text"
              id="email"
              name="lastName"
              onChange={handleChange('lastName')}
              value={lastName}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">Post Name</label>
            <input
              type="text"
              id="email"
              name="postName"
              onChange={handleChange('postName')}
              value={postName}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">Gender</label>
            <input
              type="text"
              id="email"
              name="gender"
              onChange={handleChange('gender')}
              value={gender}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">Birth Date</label>
            <input
              type="text"
              id="email"
              name="birthDate"
              onChange={handleChange('birthDate')}
              value={birthDate}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">Birth Place</label>
            <input
              type="text"
              id="email"
              name="birthPlace"
              onChange={handleChange('emabirthPlaceil')}
              value={birthPlace}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">Mother</label>
            <input
              type="text"
              id="email"
              name="mother"
              onChange={handleChange('mother')}
              value={mother}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">Father</label>
            <input
              type="text"
              id="email"
              name="father"
              onChange={handleChange('father')}
              value={father}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">Faculty</label>
            <input
              type="text"
              id="email"
              name="faculty"
              onChange={handleChange('faculty')}
              value={faculty}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">Option</label>
            <input
              type="text"
              id="email"
              name="option"
              onChange={handleChange('option')}
              value={option}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">Promotion</label>
            <input
              type="text"
              id="email"
              name="promotion"
              onChange={handleChange('promotion')}
              value={promotion}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">Phone Number</label>
            <input
              type="text"
              id="email"
              name="phone_number"
              onChange={handleChange('phone_number')}
              value={phone_number}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">Department</label>
            <input
              type="text"
              id="email"
              name="department"
              onChange={handleChange('department')}
              value={department}
              required
            ></input>
          </div>
        </div>

        <div class="input-field">
          <div>
            <label class="label">Code Promotion</label>
            <input
              type="text"
              id="email"
              name="codePromotion"
              onChange={handleChange('codePromotion')}
              value={codePromotion}
              required
            ></input>
          </div>
        </div>
      </div>

      <Link to="/done">
      <button type="submit" id='btn'>Done</button>
            </Link>
      
    </form>
  );
}
