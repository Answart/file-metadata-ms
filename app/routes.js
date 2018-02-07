const express       = require('express'),
  router            = express.Router(),
  mainController    = require('./controllers/main.controller'),
  eventsController  = require('./controllers/events.controller');


router.get('/',         mainController.showHome);

router.post('/upload',  eventsController.showUploadedFile);

router.get('*',         eventsController.show404);


module.exports = router;
