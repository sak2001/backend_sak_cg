const sequelize = require("sequelize")

module.exports = sequelize.define("users",{

    UserID:{
        type:sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    FullName : {
        type: sequelize.STRING(50),
        allowNull: false,
        autoIncrement: false,
    },
    Email : {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    password : {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    role : {
        type: sequelize.STRING(50),
        allowNull: false,
    }
    
});