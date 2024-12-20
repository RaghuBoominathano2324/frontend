const registerModel = require('../MODELS/RegistrationSchema'); // Ensure correct import

const registerUser = async (req, res) => {
    try {
        const { name, age, place, qualification, email, contactNumber, gender } = req.body;

        // Check if the user already exists by email
        const existingUser = await registerModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: 'User with this email already exists.',
                success: false,
            });
        }

        // Proceed with saving the user
        const newUser = new registerModel({
            name,
            age,
            place,
            qualification,
            email,
            contactNumber,
            gender
        });

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({
            message: 'User registered successfully.',
            success: true,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Server error occurred during registration.',
            success: false,
        });
    }
};

module.exports = registerUser;
