const express = require('express');
const router = express.Router();
const indexcontrol = require('../controller/index');

// LISTVIEW
router.get('/list', function(req, res, next) {
  res.render("user/list");
});

// ADDVIEW
router.get('/add', function(req, res, next) {
  res.render("user/add");
});

// UPDATEVIEW
router.get('/update/:id', function(req, res, next) {
  res.render("user/update");
});


// GET
router.get('/get', indexcontrol.get);

// INSERT
router.post('/insert', indexcontrol.insert);

// UPDATE
router.post('/update/:id', indexcontrol.update);

// DELETE
router.get('/delete/:id', indexcontrol.delete);




module.exports = router;
