module.exports = (sequelize, DataTypes) => {
    const Film = sequelize.define("Film",{
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
      allowNull: false

        },
        Nama_Film:{
            type:DataTypes. STRING,
        },
        description: {
            type:DataTypes. STRING,
        },
        author:{
            type: DataTypes.STRING,
        },
        tahun_terbit:{
            type: DataTypes.STRING,
        },
        genre:{
            type: DataTypes.STRING,
        }

    });
    return Film;
};