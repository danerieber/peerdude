var express = require('express');
var router = express.Router();
var filestatus = require('../filestatus')

/* GET download page. */
router.get('/', function(req, res, next) {
  res.render('download', { title: 'Download' });
});

/* GET file download using fileid. */
router.get('/:fileid', function(req, res, next) {
  res.download(`uploads/${req.params.fileid}`, filestatus[req.params.fileid].name);
});

/* POST download file using fileid */
router.post('/', function(req, res, next) {
  res.download(`uploads/${req.body.fileid}`, filestatus[req.body.fileid].name);
});

module.exports = router;
