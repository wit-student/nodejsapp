console.log(" Starting app.js ...");

const express = require("express");
console.log("Express module loaded successfully.");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js CI/CD Pipeline ");
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(` Server running on port ${port}`);
});

