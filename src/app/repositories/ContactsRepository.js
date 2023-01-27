const { uuid } = require('uuidv4');

let contacts = [
  {
    id: uuid(),
    name: 'Mateus',
    email: 'meteus@mail.com',
    phone: '123123123',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findByID(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  deleteByID(id) {
    return new Promise((resolve) => resolve(
      contacts = contacts.filter((contact) => contact.id !== id),
    ));
  }
}

module.exports = new ContactsRepository();
