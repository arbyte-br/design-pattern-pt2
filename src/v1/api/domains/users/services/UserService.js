class UserService {
    constructor(params) {
        this.repository = params.repository;
    }

    async getUser() {
        return this.repository.getUser();
    };

    async createUser({ name }) {
        return this.repository.createUser({ name });
    };

    async updateUser({ id, name }) {
        return this.repository.updateUser({ id, name });
    };

    async deleteUser({ id }) {
        return this.repository.deleteUser({ id });
    };
}

module.exports = UserService;
