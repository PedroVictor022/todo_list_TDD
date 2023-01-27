class ContactController {
  index(req, res) {
    // List all register
    res.send('Send from controller');
  }

  show() {
    // Get one register
  }

  store() {
    // Create new register
  }

  update() {
    // Update a register
  }

  delete() {
    // Delete a register
  }
}
// Singleton - Exportar a classe ja sendo iniciada
module.exports = new ContactController();
