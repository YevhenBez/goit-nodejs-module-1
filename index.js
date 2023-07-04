const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contacts = require("./src")

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "read":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
    }
}


const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);