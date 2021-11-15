// const express = require("express");
// const app = express();
// const mongoose = require('mongoose');
// const db = require('./config/keys').mongoURI;
// const users = require("./routes/api/users");
// const User = require("./models/User");

// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => console.log("Connected to MongoDB successfully"))
//   .catch(err => console.log(err));

//   app.get("/", (req, res) => {
//     const user = new User({
//         handle: "jim",
//         email: "jim@jim.jim",
//         password: "jimisgreat123"
//     });
//     user.save();
//     res.send("Hello World!");
// });

// app.use("/api/users", users)

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server is running on port ${port}`));

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const tasks = require("./routes/api/tasks");
const User = require("./models/User");
const bodyParser = require("body-parser");
const passport = require('passport');


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    const user = new User({
        handle: "jim",
        email: "jim@jim.jim",
        password: "jimisgreat123"
    });
    user.save();
    res.send("Hello World!");
});

app.use("/api/users", users)
app.use("/api/tasks", tasks)


const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}`)});
