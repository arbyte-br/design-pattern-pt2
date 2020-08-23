const UserController = require('./../controllers/UserController');
const UserService = require('./../services/UserService');
const UserRepository = require('./../repositories/UserRepository');

const Mongo = require('./../../../../../database/mongo');

let mongo;

const createController = () => {
    const service = createService();

    const controller = new UserController({
        service
    });

    return controller;
}

const createService = () => {
    const repository = createRepository();

    const service = new UserService({
        repository
    });

    return service;
}

const createRepository = () => {
    mongo = mongo || new Mongo();

    const repository = new UserRepository({
        mongo
    });

    return repository;
}

module.exports = {
    createController
};