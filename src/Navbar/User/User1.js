// import React from 'react';
// import PropTypes from 'prop-types';  // PropTypes for type-checking
// import './User1.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// const User1 = ({ id, name, place, age, contact, email, mobile, deleteUser }) => {

//   // Handle delete user functionality
//   const handleDelete = () => {
//     deleteUser(id);  // Assuming deleteUser requires the user's id
//   };

//   return (
//     <div className='user-container'>
//       <h5>Registered Candidate Details</h5>
//       <h2>ID: {id}</h2>
//       <h2>Name: {name}</h2>
//       <h2>Place: {place}</h2>
//       <h2>Age: {age}</h2>
//       <h2>Contact: {contact}</h2>
//       <h2>Email: {email}</h2>
//       <h2>Mobile: {mobile}</h2>
//       <button className='deleteButton' onClick={handleDelete}>
//         <FontAwesomeIcon icon={faTrash} /> Delete
//       </button>
//     </div>
//   );
// };

// // PropTypes to enforce prop validation
// User1.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   place: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   contact: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   mobile: PropTypes.string.isRequired,
//   deleteUser: PropTypes.func.isRequired,  // Function to delete the user
// };

// export default User1;
import React, { useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faTrash } from '@fortawesome/free-solid-svg-icons';

const User1 = ({ id, name, place, age, contact, email, mobile, deleteUser }) => {
  const [showDialog, setShowDialog] = useState(false); // State to show/hide confirmation dialog

  const handleDelete = () => {
    deleteUser(id); // Proceed with deletion
    setShowDialog(false); // Close the dialog after deletion
  };

  return (
    <div className='user-container'>
      <h5>Registered Candidate Details</h5>
      <h2>ID: {id}</h2>
      <h2>Name: {name}</h2>
      <h2>Place: {place}</h2>
      <h2>Age: {age}</h2>
      <h2>Contact: {contact}</h2>
      <h2>Email: {email}</h2>
      <h2>Mobile: {mobile}</h2>
      <button className='deleteButton' onClick={() => setShowDialog(true)}>
        <FontAwesomeIcon icon={faTrash} /> Delete
      </button>

      {/* Confirmation Dialog */}
      {showDialog && (
        <div className='confirmation-dialog'>
          <p>Are you sure you want to delete this user?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowDialog(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default User1;

