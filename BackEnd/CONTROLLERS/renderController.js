const registerModel = require('../MODELS/RegistrationSchema');

const renderController = async (req, res) => {
    try {
        // Fetch all registered users from the database
        const users = await registerModel.find();

        // Send the users as a response
        res.status(200).json({
            message: "Users retrieved successfully",
            success: true,
            users: users, // Sending the list of users to the frontend
        });
    } catch (error) {
        // Handle errors, such as database connection issues
        console.error('Error fetching users:', error.message); // Log detailed error message for debugging
        res.status(500).json({
            message: "Error fetching users",
            success: false,
            error: error.message, // Send error message in the response for better debugging
        });
    }
};

module.exports = renderController;
