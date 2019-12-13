module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        client_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        billing_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        billing_rate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        billing_unit: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Associate Project with multiple time entries 
    // When Project is deleted, all associated time entries are deleted
    Project.associate = function (models) {
        Project.hasMany(models.TimeEntry, {
            foreignKey: {
                name: 'ProjectId',
                allowNull: false,
                onDelete: "cascade"
            }
        });
    };

    Project.associate = function (models) {
        Project.belongsTo(models.Client, {
            foreignKey: {
                name: 'ClientId',
                allowNull: false,
                onDelete: "cascade"
            }
        });
    };

    return Project;
}

