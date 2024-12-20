const mongoose = require('mongoose');

const mongoose_url = process.env.Mongoose_Conn;

mongoose.connect(mongoose_url)
.then(() => {
    console.log('MongoDB Connected Successfully');
})
.catch((err) => {
    console.log(`MongoDB connection error: ${err}`);
});
