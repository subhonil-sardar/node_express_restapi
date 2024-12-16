require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/config");

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    connectDB();
});