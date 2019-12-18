module.exports = function (sequelize, DataTypes) {
    var timeEntry = sequelize.define("timeEntry", {
        project_name: {
            type: DataTypes.STRING,
            allowNull: false,
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
        timeEntry.belongsTo(models.Project, {
            foreignKey: {
                name: 'ProjectId',
                allowNull: false,
                onDelete: "cascade"
            }
        })
    };

    return timeEntry;
}

