'use strict'

var controller = require('./controllers/project_controller');

var express = require('express');
var multipart = require('connect-multiparty');
var router = express.Router();
var multipartMiddleware = multipart({uploadDir: './uploads'});

router.post('/save', controller.saveProject);
router.get('/project/:id?', controller.getProject);
router.get('/projects', controller.getProjects);
router.put('/project/:id', controller.updateProject);
router.delete('/project/:id', controller.deleteProject);
router.post('/upload-image/:id', multipartMiddleware, controller.uploadImage);

module.exports = router;