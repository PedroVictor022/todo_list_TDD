const { v4 } = require('uuid');
const db = require('../../database');

let contacts = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'meteus@mail.com',
    phone: '123123123',
    category_id: v4(),
  },
];

class ContactsRepository {
  async findAll() {
    // Retorna os contatos de forma ascendente
    const rows = await db.query('SELECT * FROM contacts ORDER BY');
    return rows;
  }

  async findByID(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  deleteByID(id) {
    return new Promise((resolve) => resolve(
      contacts = contacts.filter((contact) => contact.id !== id),
    ));
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
    INSERT INTO contacts (name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) => (
        contact.id === id ? updateContact : contact
      ));
      resolve(updateContact);
    });
  }
}

module.exports = new ContactsRepository();
