module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define ("post", {
        tittle: {
            type: Sequelize.STRING,
            required: [true, 'Please add a tittle!']
        },
        description: {
            type: Sequelize.STRING,
            required: [true, 'Please add a description!']
        },
        photo: {
            type: Sequelize.STRING,
            default: 'no-photo.jpg'
        },
        CreatedAt: {
            type: Sequelize.Date,
            default: Date.now
        },
        UpdatedAt: {
            type: Sequelize.Date,
            default: Date.now
        }

    });
    return Post;
};