const express = require('express');
const app = express();
const port = 3001;
const UserRoutes = require("./users/routes");
const PlagiarismCheckRoutes = require("./plagiarismCheck/routes");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/user", UserRoutes);
app.use("/copyleaks", PlagiarismCheckRoutes);


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});