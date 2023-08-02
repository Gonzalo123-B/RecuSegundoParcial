CREATE DATABASE reservadb;
USE reservadb;

-- Tabla Cliente
CREATE TABLE cliente (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  correoElectronico VARCHAR(100) NOT NULL,
  telefono VARCHAR(15) NOT NULL
);

-- Tabla Reserva
CREATE TABLE reserva (
  codigoReserva VARCHAR(10) PRIMARY KEY,
  fechaReserva DATE NOT NULL,
  cliente_id INT NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);
