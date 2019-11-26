module.exports = function (sequelize, DataTypes) {
    var timeEntry = sequelize.define("timeEntry", {
        entry_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            auto_increment: true,
            primaryKey: true
        },
        client_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_of_service: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        hours: {
            type: DataTypes.DECIMAL(4, 2),
            allowNull: false
        },
        desc_of_work: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })

    timeEntry.associate = function (models) {
        timeEntry.belongsTo(models.Client, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Entries;

};

