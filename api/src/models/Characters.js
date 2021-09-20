const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('characters', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull:false,
      primaryKey:true
    },
    name:{
      type: DataTypes.STRING
    },
    status:{
      type: DataTypes.STRING
    },
    gender:{
      type: DataTypes.STRING
    },
    image:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    location:{
      type: DataTypes.STRING
    }
  });
};


