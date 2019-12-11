module.exports = function (sequelize, DataTypes) {
    var Client = sequelize.define("Client", {
        client_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_contact: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_services: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })


    // Associating Clients with multiple time entries
    // When Client is deleted, deleted any associated time entries

    Client.associate = function (models) {
        Client.hasMany(models.Project, {
            onDelete: "cascade"
        });
    };

    return Client;
}

// key(client_name)