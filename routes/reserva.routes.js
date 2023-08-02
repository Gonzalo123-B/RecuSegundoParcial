// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const express = require("express")

const router = require('express').Router();
const ticketController = require("../controllers/ticketController");



// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Vista para todas las reservas
router.get("/tickets", ticketController.renderListaTickets )

// Formulario para crear una reserva
router.get("/tickets/nuevo", ticketController.renderFormNuevoTicket )

// Formulario para editar una reserva
router.get("/tickets/editar/:id", ticketController.renderFormEditarTicket )

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/tickets", ticketController.obtenerTickets',);
 
// Crear una reserva
router.post('/api/tickets/:id", ticketController.obtenerTicket',);
 
// Actualizar una reserva
router.put('/api/:id',ticketController.actualizarTicket);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id', ticketController.eliminarTicket);

 
 module.exports = router;