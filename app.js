const ecpress = require('express');
let app = express();

const PORT = 3000;

const path = require("path");

const bodyParser = require("body-parser");
const res = require('express/lib/response');


app.set("view engine","pug");
app.set("views", path.resolve("./src/views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const router = express.Router();
app.use(router);


const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));
const role = require('./models/role');
app.post("/registration", function (request, response) {
  return role
    .create({
      FullName: request.body.FullName,
      role: request.body.role,
      email: request.body.email,
      password : request.body.password
    })
    .then(function (users) {
      if (users) {
        response.send(users);
      } else {
        response.status(400).send("Error in insert new record");
      }
    });
});

require("./src/database/connection");
require("./src/bootstrap")();

app.get('/', function(req, res, next) {
      
 connection.query('SELECT * FROM users ORDER BY id desc',function(err,rows)     {
 
        if(err){
         req.flash('error', err); 
         res.render('list',{page_title:"Users - Node.js",data:''});   
        }else{
            
            res.render('list',{page_title:"Users - Node.js",data:rows});
        }
                            
});
});
router.use((err,req,res,next)=>{
  if(err){
    return res.send(err.message);

  }
});

app.listen(PORT,err =>{
  if(err) return console.log(`cannot listen on port: ${PORT}`);
  console.log(`server is listening on : http://localhost:${PORT}/`);

})

