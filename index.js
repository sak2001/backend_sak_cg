const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
import postRoutes from "./routes/post.js";

let app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// const rootPath = path.resolve("./dist");
// app.use(express.static(rootPath));

require("./src/database/connection");
require("./src/bootstrap")();

app.use("/", postRoutes);

// router.use((err,req,res,next)=>{
//   if(err){
//     return res.send(err.message);

//   }
// });

app.listen(port, (err) => {
  if (err) return console.log(`cannot listen on port: ${PORT}`);
  console.log(`server is listening on : http://localhost:${PORT}/`);
});
