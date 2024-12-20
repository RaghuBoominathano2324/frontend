const registerModel = require('../MODELS/RegistrationSchema');

const deleteController = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the entry by ID
        const deletedUser = await registerModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                message: 'User not found',
                success: false,
            });
        }

        res.status(200).json({
            message: 'User deleted successfully',
            success: true,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Server error occurred while deleting the user',
            success: false,
        });
    }
};

module.exports = deleteController;