
const role = require("./models/role");
const connection = require("./src/database/connection")

export const registration_api = async(request, response) => {
  return role
    .create({
      FullName: request.body.FullName,
      role: request.body.role,
      email: request.body.email,
      password: request.body.password,
    })
    .then(function (users) {
      if (users) {
        response.send(users);
      } else {
        response.status(400).send("Error in insert new record");
      }
    });
};


export const login = async(req, res) => {
  connection.query(
    "SELECT * FROM users ORDER BY id desc",
    function (err, rows) {
      if (err) {
        req.flash("error", err);
        res.render("list", { page_title: "Users - Node.js", data: "" });
      } else {
        res.render("list", { page_title: "Users - Node.js", data: rows });
      }
    }
  );
};
