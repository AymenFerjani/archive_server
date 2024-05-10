const express = require("express");
//const axios = require('axios');
const router = express.Router();

router.get('/completed/:scanID', (req, res, next) => {
    const scanID = req.params.scanID;

    console.log(`The 'completed' route is fired!`);
    console.log(`Got scanID = ${scanID}`);
    console.log(`req.body = ${req.body}`);

    /*return res.status(200).json({
        id,
        firstName: "Marco",
        lastName: "Silva",
        email: "marcos.henrique@toptal.com"
    });*/
});

router.get('/error/:scanID', (req, res, next) => {
  const scanID = req.params.scanID;

  console.log(`The 'error' route is fired!`);
  console.log(`Got scanID = ${scanID}`);
  console.log(`req.body = ${req.body}`);

});

router.get('/creditsChecked/:scanID', (req, res, next) => {
  const scanID = req.params.scanID;

  console.log(`The 'creditsChecked' route is fired!`);
  console.log(`Got scanID = ${scanID}`);
  console.log(`req.body = ${req.body}`);

});

module.exports = router;