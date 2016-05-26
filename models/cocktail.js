module.exports = function(sequelize, DataTypes) {
    return sequelize.define('cocktail', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },
        description: {
            type: DataTypes.STRING
        },
        alcohol: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        drinks: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};