const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contacts = require("./contacts")

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.table(allContacts);
        case "get":
            const oneContact = await contacts.getContactById(id);
            return console.log(oneContact);
    }
}


const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);