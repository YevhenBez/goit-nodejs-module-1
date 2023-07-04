const fs = require("fs/promises");

const path = require("path");

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

module.exports = {
    listContacts,
    getContactById
}