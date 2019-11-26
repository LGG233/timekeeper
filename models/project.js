
Project.associate = function (models) {
    Project.hasMany(models.Activities, {
        onDelete: "cascade"
    });
};

Project.associate = function (models) {
    Project.belongsTo(models.Client, {
        foreignKey: {
            allowNull: false
        }
    });