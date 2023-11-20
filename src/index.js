const env = require("dotenv");
env.config();

const connectDB = require("./db/db");
const app = require("./app");

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server Listening on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection Failed!", err.message);
  });
