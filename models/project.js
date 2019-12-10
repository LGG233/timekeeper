module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        // project_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     auto_increment: true,
        //     primaryKey: true
        // },
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

    Project.associate = function (models) {
        Project.hasMany(models.TimeEntry, {
            onDelete: "cascade"
        });
    };

    Project.associate = function (models) {
        Project.belongsTo(models.Client, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Project;
}
