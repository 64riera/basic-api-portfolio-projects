'use strict'

var controller = require('./controllers/project_controller');

var express = require('express');
var router = express.Router();

router.post('/save', controller.saveProject);
router.get('/project/:id?', controller.getProject);
router.get('/projects', controller.getProjects);
router.put('/project/:id', controller.updateProject);
router.delete('/project/:id', controller.deleteProject);

module.exports = router;