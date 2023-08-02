// TODO: Crear controladores para cada una de las rutas de reserva.
const TicketCine = require("../models/TicketCine"); // Importamos el modelo adaptado

const ctrl = {};

// ==========================================
//    Controladores para renderizar vistas
// ==========================================

// Obtener todas las reservas
ctrl.renderListaTickets = (req, res) => {
    res.render("listado-tickets"); // Vista para mostrar la lista de tickets
  };
  
// Formulario para crear una reserva
ctrl.renderFormNuevoTicket = (req, res) => {
    res.render("nuevo-ticket"); // Vista para crear un nuevo ticket
  };
  

// Formulario para editar una reserva
ctrl.renderFormEditarTicket = (req, res) => {
    const { id } = req.params;
    res.render("editar-ticket", { id }); // Vista para editar un ticket con el ID pasado como parámetro
}  

// ==========================================
//     Controladores para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrl.

// Obtener una reserva
ctrl.

// Crear una reserva
ctrl.

// Actualizar una reserva
ctrl.

// Eliminar una reserva de forma lógica
ctrl.


module.exports = ctrl;