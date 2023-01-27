const ContactRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    const contacts = await ContactRepository.findAll();
    res.json({ contacts });
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
