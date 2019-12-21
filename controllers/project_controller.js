'use strict'

var Project = require('../models/project');

var controller = {
    saveProject: (req, res) => {
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((error, projectStored) => {
            if(error) return res.status(500).send("Error al guardar el proyecto");
            if(!projectStored) return res.status(404).send("Projecto no guardado");
            
            res.status(200).send({
                project: project,
                message: 'Projecto almacenado correctamente'
            });
        });
    },
    getProject: (req, res) => {
        var projectId = req.params.id;

        if(projectId == null) return res.status(404).send("Ingrese datos válidos para continuar");
        Project.findById(projectId, (err, project) => {
            if(err) return res.status(500).send("Error al buscar el proyecto")
            if(!project) return res.status(404).send("Proyecto no encontrado");
            
            res.status(200).send(project);
        });
    },
    getProjects: (req, res) => {
        Project.find({}).exec((err, projects) => {
            if(err) return res.status(500).send("Error al obtener los proyectos");
            if(!projects) return res.status(404).send("Proyectos no encontrados");

            return res.status(200).send(projects);
        });
    },
    updateProject: (req, res) => {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, (err, projectUpdated) => {
            if(err) return res.status(500).send("Error al actualizar el proyecto");
            if(!projectUpdated) return res.status(404).send("Proyecto no actualizado");

            return res.status(200).send(projectUpdated);
        });
    },
    deleteProject: (req, res) => {
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectDeleted) => {
            if(err) return res.status(500).send("Error al eliminar el proyecto");
            if(!projectDeleted) return res.status(404).send("Error al eliminar, el proyecto no existe");

            return res.status(200).send(projectDeleted);
        });
    }
}

module.exports = controller;