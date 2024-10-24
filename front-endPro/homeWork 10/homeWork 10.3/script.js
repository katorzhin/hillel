const contactBook = {
    contacts: [
        {name: "Ivan", phone: "093-992-78-90", email: "ivan@email.com"},
        {name: "Alena", phone: "066-654-32-10", email: "alena@email.com"}
    ],

    findContact: function (contactName) {
        return this.contacts.find(function (contact) {
            return contact.name.toLowerCase() === contactName.toLowerCase();
        }) || "Contact not found";
    },

    addContact: function (newName, newPhone, newEmail) {
        this.contacts.push({
            name: newName,
            phone: newPhone,
            email: newEmail
        });
    },
    showAllContacts: function () {
        console.log(this.contacts);
    }
};

contactBook.addContact("Peter", "095-123-45-67", "peter@email.com");
console.log(contactBook.findContact("Ivan"));
console.log(contactBook.findContact("Businka"));
contactBook.showAllContacts();
