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

  async store(req, res) {
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is invalid' });
    }

    const contactExists = await ContactRepository.findByEmail(email);

    if (contactExists) {
      return res.status(400).json({ error: 'This email is already been taken' });
    }

    const contact = ContactRepository.create({
      name, email, phone, category_id,
    });

    return res.json(contact);
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
