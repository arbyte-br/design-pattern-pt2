const { UserFactory } = require('./../factories');

const userController = UserFactory.createController();

const loadIn = (
    router,
    controller = userController
) => {
    router.get('/getUser',
        (...args) => controller.getUser(...args));

    router.post('/createUser',
        (...args) => controller.createUser(...args));

    router.put('/updateUser/:id',
        (...args) => controller.updateUser(...args));

    router.delete('/deleteUser/:id',
        (...args) => controller.deleteUser(...args));
};

module.exports = {
    loadIn
};