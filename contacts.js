const fs = require("fs/promises");

const path = require("path");

const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}

const getContactById = async (id) => {
    const contactId = String(id)
    const contactsAll = await listContacts();
    const result = contactsAll.find(item => item.id === contactId)
    return result || null;
}

const addContact = async (data) => {
    const contactsAll = await listContacts();
    const newContact = {
        id: nanoid(),
        ...data
    }
    contactsAll.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contactsAll, null, 2));
    return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    addContact
}