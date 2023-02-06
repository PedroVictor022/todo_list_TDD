const ContactRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    const { orderBy } = req.query;
    const contacts = await ContactRepository.findAll(orderBy);
    return res.json({ contacts });
  }

  async show(req, res) {
    const { id } = req.params;
    const contact = await ContactRepository.findByID(id);

    if (!contact) {
      console.log('Contact not found');
      return res.status(404).json({ error: 'Contact not found!' });
    }

    return res.json(contact);
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
      return res.status(400).json({ error: 'This email is already in use' });
    }

    const contact = ContactRepository.create({
      name, email, phone, category_id,
    });

    return res.json(contact);
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      name, email, phone, category_id,
    } = req.body;

    const contactExists = await ContactRepository.findByID(id);
    if (!contactExists) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    const contactByEmail = await ContactRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id) {
      return res.status(400).json({ error: 'This is email is already in use' });
    }

    const contact = await ContactRepository.update(id, {
      name, email, phone, category_id,
    });

    return res.json(contact);
  }

  delete(req, res) {
    // Delete a register
    const { id } = req.params;
    ContactRepository.deleteByID(id);
    return res.sendStatus(204);
  }
}
// Singleton - Exportar a classe ja sendo iniciada
module.exports = new ContactController();
