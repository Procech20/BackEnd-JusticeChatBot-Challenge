module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define ("post", {
        userId: { 
            type: Sequelize.INTEGER,
            required: false
        },
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
        }

    });
    return Post;
};