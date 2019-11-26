module.exports = function (sequelize, DataTypes) {
    var Entries = sequelize.define("Entries", {
    })
}

// email: {
//     type: DataTypes.STRING,
//     unique: true,
//     allowNull: false,
//     validate: {
//         isEmail: true

    // Associating Clients with multiple time entries
    // When Client is deleted, deleted any associated time entries

    // Clients.associate = function (models) {
    //     Clients.hasMany(models.Entries, {
    //         onDelete: "cascade"
    //     });
    // }