'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Products.init({
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        storck: DataTypes.STRING,
        price: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Products',
        freezeTableName: true,
        underscoredAll: true,
        underscored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    });
    return Products;
};