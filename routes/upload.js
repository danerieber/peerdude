var express = require('express');
var multer = require('multer');
var router = express.Router();
var filestatus = require('../filestatus');

var upload = multer({dest: 'uploads/'})

/* GET upload page. */
router.get('/', function(req, res, next) {
  res.render('upload', { title: 'Upload' });
});

/* POST receive uploaded file. */
router.post('/', upload.single('myfile'), function(req, res, next) {
  console.dir(req.file);
  filestatus[req.file.filename] = { name: req.file.originalname, ts: Date.now() }
  res.render('upload_success', { title: 'Upload Success', fileid: req.file.filename });
});

module.exports = router;
