const express = require("express");
const router = express.Router();
const userController = require("./UserController");
router.get("/", userController.getAllUsers);

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    return res.status(200).json({
        id,
        firstName: "Marco",
        lastName: "Silva",
        email: "marcos.henrique@toptal.com"
    });
    /*Thing.findOne({
      _id: req.params.id
    }).then(
      (thing) => {
        res.status(200).json(thing);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );*/
});

module.exports = router;