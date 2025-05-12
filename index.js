require('dotenv').config();
const connectDB = require("./config/db.js");
const app = require("./app.js");
// const { connect } = require('mongoose');

const PORT = process.env.PORT || 3000;

connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Database connection error:', err);
    process.exit(1);
}
);