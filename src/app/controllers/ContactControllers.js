const ContactRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    const contacts = await ContactRepository.findAll();
    return res.json({ contacts });
  }

  show(req, res) {
    const { id } = req.params;
    const findID = ContactRepository.findByID(id);
    if (!findID) {
      return res.status(404).json({ error: 'Contact not found!' });
    }
    return res.json({ findID });
  }

  store(req, res) {

  }

  update() {
    // Update a register
  }

  delete(req, res) {
    // Delete a register
    const { id } = req.params;
    const contact = ContactRepository.findByID(id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    ContactRepository.deleteByID(id);
    return res.sendStatus(204);
  }
}
// Singleton - Exportar a classe ja sendo iniciada
module.exports = new ContactController();
