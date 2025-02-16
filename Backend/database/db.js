require('dotenv').config();
const { Sequelize } = require("sequelize");

// Use environment variables for database configuration
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432, // Default PostgreSQL port is 5432
    logging: false, // Disable logging for cleaner output
});

// Test the database connection
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('DB connection successful............................');
    } catch (error) {
        console.error('Unable to connect to the database...............', error);
    }
}

// Call the function to test the connection
testConnection();

// Export the Sequelize instance for use in other files
module.exports = sequelize;