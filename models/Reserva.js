// TODO: Crear modelo de datos de Reserva

const { DataTypes, sequelize } = require("../database");

const TicketCine = sequelize.define(
  "TicketCine",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      defaultValue: new Date().getTime().toString(36), // Código generado basado en el timestamp actual
    },
    nombrePelicula: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    duracion: {
      type: DataTypes.INTEGER, // Duración en minutos
      allowNull: false,
    },
    numeroButaca: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechaHoraTicket: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nombreCliente: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellidoCliente: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "tickets_cine", // Nombre de la tabla en la base de datos
  }
);

// Si la tabla no existe, crearla
TicketCine.sync({ force: false }).then(() => {
  console.log("Tabla de Tickets de Cine creada");
});

module.exports = TicketCine;
