import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); // To manage loading state
    const [error, setError] = useState(null); // To handle errors

    // Fetch users from the backend
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8080/main/render');
                const result = await response.json();
                if (result.success) {
                    setUsers(result.users); // Store the users in state
                    setLoading(false); // Stop loading when data is fetched
                } else {
                    setError(result.message || 'Failed to load users');
                    setLoading(false);
                }
            } catch (error) {
                setError('Error fetching users');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Handle the delete functionality
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this user?');
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:8080/main/delete/${id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            if (result.success) {
                setUsers(users.filter(user => user._id !== id)); // Remove the user from state
                alert('User deleted successfully');
            } else {
                alert('Failed to delete user');
            }
        } catch (error) {
            alert('Error deleting user');
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center">Users List</h1>

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : error ? (
                <p className="text-center text-danger">{error}</p>
            ) : users.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Place</th>
                            <th>Qualification</th>
                            <th>Contact Number</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.place}</td>
                                <td>{user.qualification}</td>
                                <td>{user.contactNumber}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <button 
                                        onClick={() => handleDelete(user._id)} 
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center">No users found</p>
            )}
        </div>
    );
}

export default User;
