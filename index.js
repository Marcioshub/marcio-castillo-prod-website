const express = require("express");
const fs = require("fs");
const path = require("path");
// const helmet = require("helmet");
// const xss = require("xss-clean");
// const hpp = require("hpp");
require("dotenv").config();
const app = express();

app.use(express.json());

// app.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         ...helmet.contentSecurityPolicy.getDefaultDirectives(),
//         "script-src": ["'self'", "'unsafe-inline'", "marciocastillo.com"],
//       },
//     },
//   })
// );

// set security headers
// app.use(helmet());

// prevent XSS attacks
// app.use(xss());

// prevent httP param pollution
// app.use(hpp());

app.post("/api/contactform", (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // make sure data is not empty
    if (
      String(name).trim() === "" ||
      name === undefined ||
      String(email).trim() === "" ||
      email === undefined ||
      String(subject).trim() === "" ||
      subject === undefined ||
      String(message).trim() === "" ||
      message === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields",
      });
    }

    // test if email is valid
    const re =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(email).toLowerCase())) {
      return res.status(400).json({
        success: false,
        message: "Email is not valid, please enter a valid email",
      });
    }

    // save message to log file
    if (fs.existsSync(__dirname + "/messages.log")) {
      fs.appendFile(
        __dirname + "/messages.log",
        `{name: ${name}, email: ${email}, subject: ${subject}, message: ${message}}\n`,
        function (err) {
          if (err) throw err;
          // console.log("Saved!");
        }
      );
    } else {
      fs.writeFile(
        __dirname + "/messages.log",
        `{name: ${name}, email: ${email}, subject: ${subject}, message: ${message}}\n`,
        function (err) {
          if (err) throw err;
          // console.log("Saved!");
        }
      );
    }
    // successful
    res.json({
      success: true,
      message: "Message as been submitted!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`)
);
