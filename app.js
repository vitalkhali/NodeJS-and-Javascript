//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const flash = require('connect-flash');



const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// ***************************
// GLOBAL VARIABLES
// ***************************

// pass through user data on every route
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
});

mongoose.connect("mongodb+srv://shurjo-123:shurjo123@cluster0.sipl0.mongodb.net/userDB", {
  useNewUrlParser: true
});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  nameOfSchool: String,
  city: String,
  password: String,
  Silver: String,
  Gold: String


});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});



app.get("/", function(req,res) {
  res.render("index");
});



app.get("/index", function(req,res) {
  res.render("index");
});

app.get("/page2", function(req,res) {
  res.render("page2");
});



app.post("/page3", function(req,res) {

  if (req.isAuthenticated()) {
    User.findById(req.user.id, function(err, foundUser) {
      if(err) {
        console.log(err);

      } else {
        if (foundUser) {
          if (foundUser.Silver === "Paid" || foundUser.Gold === "Paid") {
            res.render("page3");
          } else {
            res.redirect("/aboutus");
          }
        } else {
          res.redirect("/login");
        }
      }

    });
} else {
  res.redirect("/login");
}


});

app.get("/aboutus", function(req,res) {
  res.render("aboutus");

});


app.get("/pricing", function(req,res) {
  res.render("pricing");
});


// app.get("/page3", function(req,res) {
//   res.render("page3");
// });




app.get('/flash', function(req, res) {
  // Set a flash message by passing the key, followed by the value, to req.flash().
  req.flash('info', 'Flash is back!');
  res.redirect('/');
});


app.get("/register", function(req, res) {
  res.render("register");
});

app.get("/login", function(req, res) {
  res.render("login");
});



app.post("/login",passport.authenticate("local", {
                                                    successRedirect: "/page2",
                                                    failureRedirect: "/login",
                                                    failureFlash: true
                                                }), (req, res) => {}
);



app.post("/register", function(req, res) {

  // const email = req.body.email;
  // const name = req.body.name;
  // const nameOfSchool = req.body.nameOfSchool;
  // const city = req.body.city;
  const password = req.body.password;
  const reEnteredPassword = req.body.reEnterPassword;

  if (password === reEnteredPassword) {


    User.register({
      username: req.body.username,
      name: req.body.name,
      nameOfSchool: req.body.nameOfSchool,
      city: req.body.city,
      Silver: "UnPaid",
      Gold: "UnPaid"
    }, req.body.password, function(err, user) {
      if (err) {
        console.log(err);
        req.flash('error', err.message);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, function() {
          // res.render("singup", {message: "Successfully registered"});
          console.log('success', 'New user registered.');
          res.redirect("/aboutus");
        });
      }

    });

  } else {
    console.log("Passwords dont match");
    // res.render("singup", {message: "Passwords dont match"});
  }

});


let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started Successfully");
});
