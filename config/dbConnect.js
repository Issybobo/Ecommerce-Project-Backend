const mongoose = require('mongoose');

const dbConnect = async () => {
 try {
    // Ensure the MONGODB_URI environment variable is correctly loaded
    const uri = process.env.MONGODB_URL;
    if (!uri) {
        throw new Error('MONGODB_URI is not defined in the environment variables.');
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
 } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
 }
};

module.exports = dbConnect;