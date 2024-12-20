import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import './register.css';

function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    age: '', // Added age field
    email: '',
    place: '',
    qualification: '',
    contactNumber: '',
    gender: 'male', // Default gender
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, age, email, place, qualification, contactNumber, gender } = registerInfo;

    if (!name || !age || !email || !place || !qualification || !contactNumber) {
      return handleError('All fields are required');
    }

    try {
      const url = `http://localhost:8080/main/register`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerInfo),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/user'); // Redirect to the user page after successful registration
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || message;
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message || 'An error occurred');
    }
  };

  return (
    <div className='container'>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            onChange={handleChange}
            type='text'
            name='name'
            autoFocus
            placeholder='Enter your name...'
            value={registerInfo.name}
          />
        </div>
        <div>
          <label htmlFor='age'>Age</label>
          <input
            onChange={handleChange}
            type='number'
            name='age'
            placeholder='Enter your age...'
            value={registerInfo.age}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            onChange={handleChange}
            type='email'
            name='email'
            placeholder='Enter your email...'
            value={registerInfo.email}
          />
        </div>
        <div>
          <label htmlFor='place'>Place</label>
          <input
            onChange={handleChange}
            type='text'
            name='place'
            placeholder='Enter your place...'
            value={registerInfo.place}
          />
        </div>
        <div>
          <label htmlFor='qualification'>Qualification</label>
          <input
            onChange={handleChange}
            type='text'
            name='qualification'
            placeholder='Enter your qualification...'
            value={registerInfo.qualification}
          />
        </div>
        <div>
          <label htmlFor='contactNumber'>Contact Number</label>
          <input
            onChange={handleChange}
            type='text'
            name='contactNumber'
            placeholder='Enter your contact number...'
            value={registerInfo.contactNumber}
          />
        </div>
        <div>
          <label htmlFor='gender'>Gender</label>
          <select
            onChange={handleChange}
            name='gender'
            value={registerInfo.gender}
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <button type='submit'>Register</button>
        <span>
          Already Registered? <Link to='/user'>User</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
