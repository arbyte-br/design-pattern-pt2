class UserRepository {
    constructor(params) {
        this.database = params.mongo;
    }

    async getUserModel() {
        const models = await this.database.models();
        return models;
    }

    async getUser() {
        const { User } = await this.getUserModel();

        return User.find();
    };

    async createUser({ name }) {
        const { User } = await this.getUserModel();

        const user = new User({ name });

        return user.save();
    };

    async updateUser({ id, name }) {
        const { User } = await this.getUserModel();

        return User.update({ _id: id }, { name });
    };

    async deleteUser({ id }) {
        const { User } = await this.getUserModel();

        return User.deleteOne({ _id: id });
    };
}

module.exports = UserRepository;
