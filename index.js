//Express for starting server, you can use http library of nodejs to create a server also.
const express = require("express");
const app = express();
const PORT = 2000; //My port for server to run on.

//To read the request data from the body in json format
//We need to use the middleware express.json()
app.use(express.json());

//GET Method in Nodejs
app.get("/get", (req, res, next) => {
  try {
    res.json("Hello from get method");
  } catch (error) {
    next(error);
  }
});

//POST Method in Nodejs
app.post("/post", (req, res, next) => {
  try {
    res.json({ Message: req.body });
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
