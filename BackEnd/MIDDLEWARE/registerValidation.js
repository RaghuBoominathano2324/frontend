const Joi = require('joi');

const registerValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(50).required(),
        age: Joi.number().min(18).max(100).required(),
        place: Joi.string().min(6).max(100).required(),
        qualification: Joi.string().min(1).max(100).required(),
        email: Joi.string().email().required(),
      contactNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
      gender: Joi.string().valid('male', 'female', 'other').lowercase().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: error.details[0].message,
            success: false,
        });
    }
    next(); // Pass control to the next middleware or controller
};





module.exports = registerValidation;
 
