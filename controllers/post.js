
const role = require("./models/role");
const connection = require("./src/database/connection")

export const registration_api = async(request, response) => {
  return role
    .create({
      UserID: "1234",
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


export const login = async(request, result) => {
    // const FullName =  request.body.FullName;
    const role =  request.body.role;
    const email =  request.body.email;
    // const password =  request.body.password;
    connection.query(
    `SELECT * FROM users where email == ${email}`,
    function (err, res) {
      if (err) {
        request.flash("error", err);
        result.status(403).render();
      } 
      else {
        res.render("list", { role : role });
      }
    }
  );
};
