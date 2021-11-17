const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const User = require("./models/User");
const cors = require('cors');
const users = require("./routes/api/users");
// const tasks = require("./routes/api/tasks");
const bodyParser = require("body-parser");
const flashcards = require("./routes/api/flashcards");
const passport = require("passport");
const mongoose = require("mongoose");
const todo = require("./routes/api/todo");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
  app.use(bodyParser.urlencoded({
      extended: false
  }));

  app.use(cors());

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
    
app.use(passport.initialize());
require('./config/passport')(passport);
app.use('/todos', todo);
app.use("/api/users", users)
app.use("/api/flashcards", flashcards)
// app.use("/api/tasks", tasks)
// app.use("/api/tasks", tasks)


const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}`)});
