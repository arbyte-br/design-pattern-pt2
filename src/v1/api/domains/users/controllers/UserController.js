class UserController {
    constructor(params) {
        this.service = params.service;
    }

    async getUser(req, res) {
        return this.service.getUser()
            .then(item => res.send(item))
            .catch(error => console.error(error));
    };

    async createUser(req, res) {
        const { name } = req.body;

        return this.service.createUser({ name })
            .then(item => res.send(item))
            .catch(error => console.error(error));
    };

    async updateUser(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        return this.service.updateUser({ id, name })
            .then(item => res.send(item))
            .catch(error => console.error(error));
    };

    async deleteUser(req, res) {
        const { id } = req.params;

        return this.service.deleteUser({ id })
            .then(item => res.send(item))
            .catch(error => console.error(error));
    };
}

module.exports = UserController;