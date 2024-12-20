const mongoose=require('mongoose')

const schema=mongoose.Schema

const registrationSchema=new schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    contactNumber: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/  // Ensures it is a 10-digit number
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    }
})

// Create a model based on the schema
const RegistrationModel = mongoose.model('Registration', registrationSchema);

// Export the model
module.exports = RegistrationModel;